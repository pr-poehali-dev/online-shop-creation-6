import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

const Catalog = () => {
  const [priceRange, setPriceRange] = useState([0, 150000]);

  const products = [
    {
      id: 1,
      name: 'Беспроводные наушники Pro',
      price: 14990,
      category: 'Наушники',
      image: 'https://cdn.poehali.dev/projects/3d786960-832f-4950-9680-78f2cff94356/files/0aa4d936-5146-4801-a116-7fae50f7d96c.jpg',
      rating: 4.8,
      badge: 'Хит'
    },
    {
      id: 2,
      name: 'Смартфон Galaxy Ultra',
      price: 89990,
      category: 'Смартфоны',
      image: 'https://cdn.poehali.dev/projects/3d786960-832f-4950-9680-78f2cff94356/files/3b15104f-c081-4163-96ca-e30a22c043a7.jpg',
      rating: 4.9,
      badge: 'Новинка'
    },
    {
      id: 3,
      name: 'Игровой ноутбук X15',
      price: 129990,
      category: 'Ноутбуки',
      image: 'https://cdn.poehali.dev/projects/3d786960-832f-4950-9680-78f2cff94356/files/0865b366-43c9-476b-abfe-8cb52fe5f403.jpg',
      rating: 4.7,
      badge: 'Топ'
    },
    {
      id: 4,
      name: 'Беспроводная зарядка Ultra',
      price: 3990,
      category: 'Аксессуары',
      image: 'https://cdn.poehali.dev/projects/3d786960-832f-4950-9680-78f2cff94356/files/0aa4d936-5146-4801-a116-7fae50f7d96c.jpg',
      rating: 4.5
    },
    {
      id: 5,
      name: 'Умные часы Sport',
      price: 24990,
      category: 'Умные часы',
      image: 'https://cdn.poehali.dev/projects/3d786960-832f-4950-9680-78f2cff94356/files/3b15104f-c081-4163-96ca-e30a22c043a7.jpg',
      rating: 4.6
    },
    {
      id: 6,
      name: 'Планшет Tab Pro 12',
      price: 54990,
      category: 'Планшеты',
      image: 'https://cdn.poehali.dev/projects/3d786960-832f-4950-9680-78f2cff94356/files/0865b366-43c9-476b-abfe-8cb52fe5f403.jpg',
      rating: 4.8
    }
  ];

  const categories = ['Смартфоны', 'Ноутбуки', 'Наушники', 'Умные часы', 'Планшеты', 'Аксессуары'];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-background sticky top-0 z-50 shadow-sm">
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
              <Link to="/catalog" className="text-primary font-bold">
                Каталог
              </Link>
              <Button variant="ghost" size="icon">
                <Icon name="ShoppingCart" size={20} />
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold mb-2">Каталог товаров</h1>
          <p className="text-muted-foreground">Найдите идеальный гаджет для себя</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64 space-y-6 animate-slide-up">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Icon name="SlidersHorizontal" size={20} />
                  Фильтры
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Категории</h4>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <div key={category} className="flex items-center space-x-2">
                          <Checkbox id={category} />
                          <label htmlFor={category} className="text-sm cursor-pointer">
                            {category}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Цена</h4>
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={150000}
                      step={1000}
                      className="mb-2"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>{priceRange[0].toLocaleString()} ₽</span>
                      <span>{priceRange[1].toLocaleString()} ₽</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Рейтинг</h4>
                    <div className="space-y-2">
                      {[5, 4, 3].map((rating) => (
                        <div key={rating} className="flex items-center space-x-2">
                          <Checkbox id={`rating-${rating}`} />
                          <label htmlFor={`rating-${rating}`} className="text-sm cursor-pointer flex items-center gap-1">
                            <Icon name="Star" size={14} className="fill-accent text-accent" />
                            {rating}+ звезд
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-primary to-secondary">
                    Применить фильтры
                  </Button>
                </div>
              </CardContent>
            </Card>
          </aside>

          <div className="flex-1">
            <div className="flex items-center justify-between mb-6 animate-fade-in">
              <p className="text-muted-foreground">Найдено товаров: {products.length}</p>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Сортировка:</span>
                <Button variant="outline" size="sm">
                  По популярности
                  <Icon name="ChevronDown" size={16} className="ml-1" />
                </Button>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-scale-in">
              {products.map((product) => (
                <Card key={product.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden bg-gradient-to-br from-muted to-background">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {product.badge && (
                        <Badge className="absolute top-3 right-3 bg-accent text-white">
                          {product.badge}
                        </Badge>
                      )}
                      <Button 
                        size="icon"
                        variant="secondary"
                        className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Icon name="Heart" size={18} />
                      </Button>
                    </div>
                    <div className="p-4">
                      <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
                      <h3 className="font-bold mb-2 line-clamp-2">{product.name}</h3>
                      <div className="flex items-center gap-1 mb-3">
                        <Icon name="Star" size={14} className="fill-accent text-accent" />
                        <span className="text-sm font-medium">{product.rating}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-primary">
                          {product.price.toLocaleString()} ₽
                        </span>
                        <Link to={`/product/${product.id}`}>
                          <Button size="sm" className="bg-gradient-to-r from-primary to-secondary">
                            <Icon name="ShoppingCart" size={16} className="mr-1" />
                            Купить
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
