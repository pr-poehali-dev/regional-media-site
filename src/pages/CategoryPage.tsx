import { useState } from 'react';
import { useParams } from 'react-router-dom';
import NewsCard from '@/components/NewsCard';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { mockNews } from '@/data/mockNews';

const categoryNames: Record<string, string> = {
  politics: 'Политика',
  economy: 'Экономика',
  society: 'Общество',
  culture: 'Культура',
  sport: 'Спорт',
  tech: 'Технологии',
  science: 'Наука',
  world: 'Мир',
  incidents: 'Происшествия',
  opinion: 'Мнения',
};

export default function CategoryPage() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const categoryName = categoryNames[categoryId || ''] || 'Новости';

  const categoryNews = mockNews.filter((news) => news.categoryId === categoryId);
  const allNews = categoryNews.length > 0 ? categoryNews : mockNews;

  const [newsItems, setNewsItems] = useState(allNews.slice(0, 9));
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      const currentLength = newsItems.length;
      const moreNews = [...allNews, ...allNews].slice(
        currentLength,
        currentLength + 9
      );
      if (moreNews.length === 0) {
        setHasMore(false);
      } else {
        setNewsItems([...newsItems, ...moreNews]);
      }
      setLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen">
      <section className="bg-primary text-white py-12 mb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">{categoryName}</h1>
          <p className="text-lg mt-2 opacity-90">
            Актуальные новости раздела
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {newsItems.map((news, index) => (
            <div key={`${news.id}-${index}`} className="animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
              <NewsCard {...news} />
            </div>
          ))}
        </div>

        {hasMore && (
          <div className="flex justify-center">
            <Button
              onClick={loadMore}
              disabled={loading}
              size="lg"
              className="gap-2"
            >
              {loading ? (
                <>
                  <Icon name="Loader2" size={20} className="animate-spin" />
                  Загрузка...
                </>
              ) : (
                <>
                  <Icon name="ChevronDown" size={20} />
                  Показать ещё
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
