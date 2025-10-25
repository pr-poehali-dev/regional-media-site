import { useState, useEffect } from 'react';
import NewsCard from '@/components/NewsCard';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { mockNews } from '@/data/mockNews';

export default function Home() {
  const [newsItems, setNewsItems] = useState(mockNews.slice(0, 6));
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      const currentLength = newsItems.length;
      const moreNews = [...mockNews, ...mockNews].slice(
        currentLength,
        currentLength + 6
      );
      if (moreNews.length === 0) {
        setHasMore(false);
      } else {
        setNewsItems([...newsItems, ...moreNews]);
      }
      setLoading(false);
    }, 500);
  };

  const featuredNews = mockNews[0];

  return (
    <div className="min-h-screen">
      <section className="mb-12 animate-fade-in">
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-sm uppercase tracking-wide text-primary font-bold mb-6 flex items-center gap-2">
            <Icon name="Flame" size={20} />
            Главная новость
          </h2>
          <NewsCard {...featuredNews} featured />
        </div>
      </section>

      <section className="bg-secondary/30 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Последние новости</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {newsItems.slice(1).map((news, index) => (
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
      </section>
    </div>
  );
}
