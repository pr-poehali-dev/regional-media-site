import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Contacts() {
  return (
    <div className="min-h-screen">
      <section className="bg-primary text-white py-12 mb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Контакты</h1>
          <p className="text-lg mt-2 opacity-90">
            Свяжитесь с нами
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h2 className="text-2xl font-bold mb-6">Напишите нам</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Имя
                </label>
                <Input placeholder="Ваше имя" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input type="email" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Тема
                </label>
                <Input placeholder="Тема обращения" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Сообщение
                </label>
                <Textarea
                  placeholder="Ваше сообщение"
                  rows={6}
                />
              </div>
              <Button className="w-full">Отправить</Button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Наши контакты</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-primary/10 p-3 rounded-lg h-fit">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Адрес редакции</h3>
                  <p className="text-muted-foreground">
                    г. Региональск, ул. Центральная, д. 123
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-primary/10 p-3 rounded-lg h-fit">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Телефон</h3>
                  <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Ежедневно с 9:00 до 21:00
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-primary/10 p-3 rounded-lg h-fit">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground">info@regionvesti.ru</p>
                  <p className="text-muted-foreground">redaction@regionvesti.ru</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-primary/10 p-3 rounded-lg h-fit">
                  <Icon name="Globe" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Социальные сети</h3>
                  <div className="flex gap-3 mt-2">
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Icon name="Facebook" size={24} />
                    </a>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Icon name="Twitter" size={24} />
                    </a>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Icon name="Instagram" size={24} />
                    </a>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Icon name="Youtube" size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-secondary/30 p-6 rounded-lg">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Icon name="Info" size={20} className="text-primary" />
                Для СМИ
              </h3>
              <p className="text-sm text-muted-foreground">
                По вопросам сотрудничества и размещения материалов обращайтесь по адресу:
                press@regionvesti.ru
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
