import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import NewsCard from '@/components/NewsCard';
import { mockNews } from '@/data/mockNews';

export default function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<typeof mockNews>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    const filtered = mockNews.filter(
      (news) =>
        news.title.toLowerCase().includes(query.toLowerCase()) ||
        news.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        news.content.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
    setHasSearched(true);
  };

  return (
    <div className="min-h-screen">
      <section className="bg-primary text-white py-12 mb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Поиск новостей</h1>
          <form onSubmit={handleSearch} className="max-w-2xl">
            <div className="flex gap-2">
              <Input
                type="search"
                placeholder="Введите ключевые слова..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="bg-white text-foreground"
              />
              <Button type="submit" variant="secondary" className="gap-2">
                <Icon name="Search" size={20} />
                Найти
              </Button>
            </div>
          </form>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-12">
        {hasSearched && (
          <>
            <div className="mb-6">
              <p className="text-muted-foreground">
                {results.length > 0
                  ? `Найдено результатов: ${results.length}`
                  : 'Ничего не найдено. Попробуйте изменить запрос.'}
              </p>
            </div>

            {results.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.map((news) => (
                  <div key={news.id} className="animate-fade-in">
                    <NewsCard {...news} />
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {!hasSearched && (
          <div className="text-center py-20">
            <Icon name="Search" size={64} className="text-muted-foreground mx-auto mb-4" />
            <p className="text-xl text-muted-foreground">
              Введите запрос для поиска новостей
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
