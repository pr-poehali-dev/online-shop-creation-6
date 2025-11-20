import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Беспроводные наушники Pro',
      price: '14 990 ₽',
      image: 'https://cdn.poehali.dev/projects/3d786960-832f-4950-9680-78f2cff94356/files/0aa4d936-5146-4801-a116-7fae50f7d96c.jpg',
      badge: 'Хит продаж'
    },
    {
      id: 2,
      name: 'Смартфон Galaxy Ultra',
      price: '89 990 ₽',
      image: 'https://cdn.poehali.dev/projects/3d786960-832f-4950-9680-78f2cff94356/files/3b15104f-c081-4163-96ca-e30a22c043a7.jpg',
      badge: 'Новинка'
    },
    {
      id: 3,
      name: 'Игровой ноутбук X15',
      price: '129 990 ₽',
      image: 'https://cdn.poehali.dev/projects/3d786960-832f-4950-9680-78f2cff94356/files/0865b366-43c9-476b-abfe-8cb52fe5f403.jpg',
      badge: 'Топ выбор'
    }
  ];

  const categories = [
    { name: 'Смартфоны', icon: 'Smartphone', color: 'bg-primary' },
    { name: 'Ноутбуки', icon: 'Laptop', color: 'bg-secondary' },
    { name: 'Наушники', icon: 'Headphones', color: 'bg-accent' },
    { name: 'Умные часы', icon: 'Watch', color: 'bg-primary' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                <Icon name="Zap" size={24} className="text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                TechStore
              </span>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
                Главная
              </Link>
              <Link to="/catalog" className="text-foreground hover:text-primary transition-colors font-medium">
                Каталог
              </Link>
              <Button variant="ghost" size="icon">
                <Icon name="ShoppingCart" size={20} />
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
              Технологии будущего уже здесь
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Откройте для себя новейшие гаджеты и электронику с доставкой по всей России
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                <Link to="/catalog" className="flex items-center gap-2">
                  Перейти в каталог
                  <Icon name="ArrowRight" size={20} />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2">
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Популярные категории</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-slide-up">
          {categories.map((category, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className={`${category.color} w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <Icon name={category.icon} size={32} className="text-white" />
                </div>
                <h3 className="font-semibold text-lg">{category.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Хиты продаж</h2>
          <div className="grid md:grid-cols-3 gap-8 animate-scale-in">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden bg-gradient-to-br from-muted to-background">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <Badge className="absolute top-4 right-4 bg-accent text-white">
                      {product.badge}
                    </Badge>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">{product.price}</span>
                      <Link to={`/product/${product.id}`}>
                        <Button className="bg-gradient-to-r from-primary to-secondary">
                          Подробнее
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center animate-fade-in">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-4">
              <Icon name="Truck" size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Быстрая доставка</h3>
            <p className="text-muted-foreground">Доставка по России за 1-3 дня</p>
          </div>
          <div className="flex flex-col items-center animate-fade-in" style={{ animationDelay: '100ms' }}>
            <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mb-4">
              <Icon name="ShieldCheck" size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Гарантия качества</h3>
            <p className="text-muted-foreground">Официальная гарантия на все товары</p>
          </div>
          <div className="flex flex-col items-center animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mb-4">
              <Icon name="Headset" size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Поддержка 24/7</h3>
            <p className="text-muted-foreground">Всегда на связи для вас</p>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-lg mb-4">TechStore</h4>
              <p className="text-sm opacity-80">Ваш надежный магазин электроники и гаджетов</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Каталог</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Смартфоны</li>
                <li>Ноутбуки</li>
                <li>Наушники</li>
                <li>Аксессуары</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Информация</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>О компании</li>
                <li>Доставка и оплата</li>
                <li>Гарантия</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>+7 (495) 123-45-67</li>
                <li>info@techstore.ru</li>
                <li>Москва, ул. Примерная, 1</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm opacity-60">
            © 2024 TechStore. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
