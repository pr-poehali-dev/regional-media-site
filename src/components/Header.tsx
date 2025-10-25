import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const categories = [
  { id: 'politics', name: 'Политика' },
  { id: 'economy', name: 'Экономика' },
  { id: 'society', name: 'Общество' },
  { id: 'culture', name: 'Культура' },
  { id: 'sport', name: 'Спорт' },
  { id: 'tech', name: 'Технологии' },
  { id: 'science', name: 'Наука' },
  { id: 'world', name: 'Мир' },
  { id: 'incidents', name: 'Происшествия' },
  { id: 'opinion', name: 'Мнения' },
];

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Icon name="Newspaper" size={32} className="text-primary" />
            <h1 className="text-2xl font-bold">РегионВести</h1>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
              Главная
            </Link>
            {categories.slice(0, 5).map((cat) => (
              <Link
                key={cat.id}
                to={`/category/${cat.id}`}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {cat.name}
              </Link>
            ))}
            <div className="relative group">
              <button className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1">
                Ещё
                <Icon name="ChevronDown" size={16} />
              </button>
              <div className="absolute top-full left-0 mt-2 bg-white border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[150px]">
                {categories.slice(5).map((cat) => (
                  <Link
                    key={cat.id}
                    to={`/category/${cat.id}`}
                    className="block px-4 py-2 text-sm hover:bg-secondary transition-colors"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          <div className="flex items-center gap-3">
            {searchOpen ? (
              <div className="hidden md:flex items-center gap-2 animate-fade-in">
                <Input
                  type="search"
                  placeholder="Поиск новостей..."
                  className="w-64"
                  autoFocus
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSearchOpen(false)}
                >
                  <Icon name="X" size={20} />
                </Button>
              </div>
            ) : (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSearchOpen(true)}
                className="hidden md:flex"
              >
                <Icon name="Search" size={20} />
              </Button>
            )}

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={24} />
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="mb-4">
              <Input type="search" placeholder="Поиск новостей..." />
            </div>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="py-2 hover:text-primary transition-colors">
                Главная
              </Link>
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  to={`/category/${cat.id}`}
                  className="py-2 hover:text-primary transition-colors"
                >
                  {cat.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
