import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Product = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = {
    id: Number(id),
    name: 'Беспроводные наушники Pro',
    price: 14990,
    oldPrice: 19990,
    rating: 4.8,
    reviews: 127,
    inStock: true,
    images: [
      'https://cdn.poehali.dev/projects/3d786960-832f-4950-9680-78f2cff94356/files/0aa4d936-5146-4801-a116-7fae50f7d96c.jpg',
      'https://cdn.poehali.dev/projects/3d786960-832f-4950-9680-78f2cff94356/files/3b15104f-c081-4163-96ca-e30a22c043a7.jpg',
      'https://cdn.poehali.dev/projects/3d786960-832f-4950-9680-78f2cff94356/files/0865b366-43c9-476b-abfe-8cb52fe5f403.jpg'
    ],
    description: 'Премиальные беспроводные наушники с активным шумоподавлением. Наслаждайтесь чистым звуком высочайшего качества и комфортом на протяжении всего дня. Современный дизайн и передовые технологии в одном устройстве.',
    features: [
      'Активное шумоподавление премиум-класса',
      'До 30 часов автономной работы',
      'Быстрая зарядка USB-C',
      'Поддержка Hi-Res Audio',
      'Эргономичный дизайн',
      'Голосовой ассистент'
    ],
    specs: [
      { label: 'Тип подключения', value: 'Bluetooth 5.3' },
      { label: 'Время работы', value: 'До 30 часов' },
      { label: 'Время зарядки', value: '2 часа (быстрая зарядка 15 мин = 5 ч)' },
      { label: 'Вес', value: '250 г' },
      { label: 'Цвет', value: 'Черный, Серебристый' },
      { label: 'Гарантия', value: '2 года' }
    ]
  };

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

      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8 animate-fade-in">
          <Link to="/" className="hover:text-primary transition-colors">Главная</Link>
          <Icon name="ChevronRight" size={16} />
          <Link to="/catalog" className="hover:text-primary transition-colors">Каталог</Link>
          <Icon name="ChevronRight" size={16} />
          <span className="text-foreground">{product.name}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-4 animate-slide-up">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-muted to-background border">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-[500px] object-cover"
              />
              {product.oldPrice && (
                <Badge className="absolute top-4 right-4 bg-destructive text-white text-lg px-4 py-2">
                  -{Math.round((1 - product.price / product.oldPrice) * 100)}%
                </Badge>
              )}
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative overflow-hidden rounded-lg border-2 transition-all ${
                    selectedImage === index ? 'border-primary' : 'border-transparent'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} - ${index + 1}`}
                    className="w-full h-24 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6 animate-fade-in">
            <div>
              <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Icon 
                      key={i} 
                      name="Star" 
                      size={18} 
                      className={i < Math.floor(product.rating) ? 'fill-accent text-accent' : 'text-muted'} 
                    />
                  ))}
                  <span className="text-lg font-semibold ml-2">{product.rating}</span>
                </div>
                <Separator orientation="vertical" className="h-6" />
                <span className="text-muted-foreground">{product.reviews} отзывов</span>
              </div>
              <p className="text-lg text-muted-foreground">{product.description}</p>
            </div>

            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardContent className="p-6">
                <div className="flex items-end gap-4 mb-4">
                  <span className="text-5xl font-bold text-primary">
                    {product.price.toLocaleString()} ₽
                  </span>
                  {product.oldPrice && (
                    <span className="text-2xl text-muted-foreground line-through mb-2">
                      {product.oldPrice.toLocaleString()} ₽
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2 mb-6">
                  {product.inStock ? (
                    <>
                      <Icon name="CheckCircle2" size={20} className="text-green-600" />
                      <span className="text-green-600 font-semibold">В наличии</span>
                    </>
                  ) : (
                    <>
                      <Icon name="XCircle" size={20} className="text-destructive" />
                      <span className="text-destructive font-semibold">Нет в наличии</span>
                    </>
                  )}
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center border rounded-lg">
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      <Icon name="Minus" size={16} />
                    </Button>
                    <span className="px-6 font-semibold">{quantity}</span>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <Icon name="Plus" size={16} />
                    </Button>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button size="lg" className="w-full text-lg py-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                    <Icon name="ShoppingCart" size={20} className="mr-2" />
                    Добавить в корзину
                  </Button>
                  <Button size="lg" variant="outline" className="w-full text-lg py-6 border-2">
                    <Icon name="Heart" size={20} className="mr-2" />
                    В избранное
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 border rounded-lg">
                <Icon name="Truck" size={24} className="mx-auto mb-2 text-primary" />
                <p className="text-sm font-semibold">Доставка 1-3 дня</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <Icon name="ShieldCheck" size={24} className="mx-auto mb-2 text-primary" />
                <p className="text-sm font-semibold">Гарантия 2 года</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <Icon name="RefreshCw" size={24} className="mx-auto mb-2 text-primary" />
                <p className="text-sm font-semibold">Возврат 14 дней</p>
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="features" className="animate-fade-in">
          <TabsList className="grid w-full max-w-2xl grid-cols-3">
            <TabsTrigger value="features">Особенности</TabsTrigger>
            <TabsTrigger value="specs">Характеристики</TabsTrigger>
            <TabsTrigger value="reviews">Отзывы ({product.reviews})</TabsTrigger>
          </TabsList>
          
          <TabsContent value="features" className="mt-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Ключевые особенности</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 mt-1">
                        <Icon name="Check" size={14} className="text-white" />
                      </div>
                      <span className="text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="specs" className="mt-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Технические характеристики</h3>
                <div className="space-y-4">
                  {product.specs.map((spec, index) => (
                    <div key={index} className="flex justify-between py-4 border-b last:border-0">
                      <span className="font-semibold text-muted-foreground">{spec.label}</span>
                      <span className="text-lg font-medium">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="mt-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Отзывы покупателей</h3>
                <p className="text-muted-foreground text-center py-12">
                  Раздел с отзывами находится в разработке
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Product;
