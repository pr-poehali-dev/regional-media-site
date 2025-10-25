import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface NewsCardProps {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  hasVideo?: boolean;
  hasAudio?: boolean;
  hasGallery?: boolean;
  featured?: boolean;
}

export default function NewsCard({
  id,
  title,
  excerpt,
  image,
  category,
  date,
  hasVideo,
  hasAudio,
  hasGallery,
  featured = false,
}: NewsCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group h-full flex flex-col">
      <Link to={`/news/${id}`} className="relative overflow-hidden block">
        <img
          src={image}
          alt={title}
          className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 ${
            featured ? 'h-80' : 'h-48'
          }`}
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge variant="destructive">{category}</Badge>
          <div className="flex gap-1">
            {hasVideo && (
              <div className="bg-black/70 text-white p-1.5 rounded">
                <Icon name="Video" size={16} />
              </div>
            )}
            {hasAudio && (
              <div className="bg-black/70 text-white p-1.5 rounded">
                <Icon name="Mic" size={16} />
              </div>
            )}
            {hasGallery && (
              <div className="bg-black/70 text-white p-1.5 rounded">
                <Icon name="Image" size={16} />
              </div>
            )}
          </div>
        </div>
      </Link>

      <CardContent className="p-4 flex-1 flex flex-col">
        <Link to={`/news/${id}`}>
          <h3
            className={`font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2 ${
              featured ? 'text-2xl' : 'text-lg'
            }`}
          >
            {title}
          </h3>
        </Link>

        <p className="text-muted-foreground text-sm mb-3 line-clamp-2 flex-1">
          {excerpt}
        </p>

        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Icon name="Clock" size={14} />
          <span>{date}</span>
        </div>
      </CardContent>
    </Card>
  );
}
