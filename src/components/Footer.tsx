import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Newspaper" size={28} className="text-primary" />
              <h3 className="text-xl font-bold">РегионВести</h3>
            </div>
            <p className="text-sm opacity-80">
              Независимое региональное информационное агентство
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Разделы</h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link to="/category/politics" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">
                Политика
              </Link>
              <Link to="/category/economy" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">
                Экономика
              </Link>
              <Link to="/category/society" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">
                Общество
              </Link>
              <Link to="/category/sport" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">
                Спорт
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">О нас</h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link to="/about" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">
                О редакции
              </Link>
              <Link to="/contacts" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">
                Контакты
              </Link>
              <Link to="/advertising" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">
                Реклама
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Социальные сети</h4>
            <div className="flex gap-3">
              <a href="#" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">
                <Icon name="Facebook" size={24} />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">
                <Icon name="Twitter" size={24} />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">
                <Icon name="Youtube" size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-80">
          © 2024 РегионВести. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
