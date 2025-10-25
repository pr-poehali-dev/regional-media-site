import Icon from '@/components/ui/icon';

export default function About() {
  return (
    <div className="min-h-screen">
      <section className="bg-primary text-white py-12 mb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">О редакции</h1>
          <p className="text-lg mt-2 opacity-90">
            Независимое региональное информационное агентство
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-12 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl mb-6 leading-relaxed">
            РегионВести — современное информационное агентство, созданное для объективного
            освещения событий региона. Мы работаем с 2020 года и за это время стали одним
            из ведущих источников новостей для жителей области.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Наша миссия</h2>
          <p className="mb-6 leading-relaxed">
            Предоставлять достоверную, актуальную и объективную информацию о событиях в
            регионе. Мы стремимся быть связующим звеном между властью и обществом,
            освещая важнейшие события во всех сферах жизни.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Наши принципы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-secondary/30 p-6 rounded-lg">
              <Icon name="CheckCircle" size={32} className="text-primary mb-3" />
              <h3 className="font-semibold mb-2">Объективность</h3>
              <p className="text-sm">
                Мы освещаем события беспристрастно, предоставляя читателям возможность
                сформировать собственное мнение.
              </p>
            </div>
            <div className="bg-secondary/30 p-6 rounded-lg">
              <Icon name="Zap" size={32} className="text-primary mb-3" />
              <h3 className="font-semibold mb-2">Оперативность</h3>
              <p className="text-sm">
                Наша команда работает 24/7, чтобы вы первыми узнавали о важных событиях.
              </p>
            </div>
            <div className="bg-secondary/30 p-6 rounded-lg">
              <Icon name="Award" size={32} className="text-primary mb-3" />
              <h3 className="font-semibold mb-2">Профессионализм</h3>
              <p className="text-sm">
                Наша редакция состоит из опытных журналистов с многолетним стажем работы.
              </p>
            </div>
            <div className="bg-secondary/30 p-6 rounded-lg">
              <Icon name="Users" size={32} className="text-primary mb-3" />
              <h3 className="font-semibold mb-2">Открытость</h3>
              <p className="text-sm">
                Мы всегда открыты для диалога с нашими читателями и партнерами.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">Команда</h2>
          <p className="mb-6 leading-relaxed">
            В нашей редакции работают более 30 профессиональных журналистов, фотографов
            и видеооператоров. Мы гордимся нашей командой и тем вкладом, который каждый
            из нас вносит в развитие региональной журналистики.
          </p>
        </div>
      </div>
    </div>
  );
}
