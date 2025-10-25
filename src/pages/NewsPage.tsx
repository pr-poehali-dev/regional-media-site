import { useParams, Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { getNewsById } from '@/data/mockNews';

export default function NewsPage() {
  const { newsId } = useParams<{ newsId: string }>();
  const news = getNewsById(newsId || '');

  if (!news) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Новость не найдена</h1>
        <Link to="/">
          <Button>Вернуться на главную</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <article className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-6">
          <Link to={`/category/${news.categoryId}`}>
            <Badge variant="destructive" className="mb-4">
              {news.category}
            </Badge>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            {news.title}
          </h1>
          <div className="flex items-center gap-4 text-muted-foreground text-sm">
            <div className="flex items-center gap-2">
              <Icon name="User" size={16} />
              <span>{news.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Clock" size={16} />
              <span>{news.date}</span>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <img
            src={news.image}
            alt={news.title}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {news.hasVideo && news.videoUrl && (
          <div className="mb-8 bg-secondary/50 p-6 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Video" size={20} className="text-primary" />
              <h3 className="font-semibold">Видео материал</h3>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src={news.videoUrl}
                title="Видео новости"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        )}

        {news.hasAudio && (
          <div className="mb-8 bg-secondary/50 p-6 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Mic" size={20} className="text-primary" />
              <h3 className="font-semibold">Аудио комментарий</h3>
            </div>
            <audio controls className="w-full">
              <source src="/placeholder-audio.mp3" type="audio/mpeg" />
              Ваш браузер не поддерживает аудио элемент.
            </audio>
          </div>
        )}

        {news.hasGallery && news.gallery && (
          <div className="mb-8 bg-secondary/50 p-6 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Image" size={20} className="text-primary" />
              <h3 className="font-semibold">Фотогалерея</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {news.gallery.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Фото ${index + 1}`}
                  className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                />
              ))}
            </div>
          </div>
        )}

        <div className="prose prose-lg max-w-none mb-12">
          {news.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-4 text-lg leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="border-t border-border pt-8">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <Icon name="Share2" size={20} />
            Поделиться новостью
          </h3>
          <div className="flex gap-3">
            <Button variant="outline" size="sm" className="gap-2">
              <Icon name="Facebook" size={18} />
              Facebook
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Icon name="Twitter" size={18} />
              Twitter
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Icon name="Link" size={18} />
              Копировать ссылку
            </Button>
          </div>
        </div>
      </article>
    </div>
  );
}
