
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/Icon";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Message {
  role: "user" | "assistant";
  content: string;
}

// Моки ответов от ИИ для демонстрации
const AI_RESPONSES = [
  {
    trigger: "сайт",
    response: `Отлично! Я помогу создать базовую структуру для вашего сайта. Вот что предлагаю:

**Структура файлов:**
\`\`\`
src/
  components/
    Header.tsx - Шапка сайта
    Footer.tsx - Подвал сайта
    Hero.tsx - Главный блок
  pages/
    Index.tsx - Главная страница
\`\`\`

**Пример компонента Header.tsx:**
\`\`\`jsx
// src/components/Header.tsx
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-violet-700">Мой Сайт</h1>
        <nav className="space-x-4">
          <Button variant="link">Главная</Button>
          <Button variant="link">О нас</Button>
          <Button variant="link">Контакты</Button>
          <Button variant="default">Заказать</Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
\`\`\`

**CSS для стилизации (Tailwind):**
\`\`\`css
/* Добавьте в ваш index.css или tailwind.config.js */
.shadow-custom {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
\`\`\`

Хотите, чтобы я создал для вас другие компоненты?`
  },
  {
    trigger: "магазин",
    response: `Я могу помочь создать основу для интернет-магазина. Вот компоненты, которые понадобятся:

**Структура файлов:**
\`\`\`
src/
  components/
    ProductCard.tsx - Карточка товара
    ProductList.tsx - Список товаров
    Cart.tsx - Корзина покупок
  pages/
    Shop.tsx - Страница магазина
    ProductDetail.tsx - Страница товара
\`\`\`

**Пример компонента ProductCard.tsx:**
\`\`\`tsx
// src/components/ProductCard.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  image: string;
  onAddToCart: (id: string) => void;
}

const ProductCard = ({ id, title, price, image, onAddToCart }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform hover:scale-105" 
        />
      </div>
      <CardHeader className="p-4 pb-0">
        <h3 className="font-medium text-lg">{title}</h3>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <p className="text-xl font-bold text-violet-700">{price.toLocaleString()} ₽</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={() => onAddToCart(id)} 
          className="w-full"
        >
          В корзину
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
\`\`\`

**Пример JavaScript для API данных:**
\`\`\`javascript
// src/api/products.js
export async function fetchProducts() {
  // В реальном приложении здесь был бы fetch к API
  return [
    { id: '1', title: 'Смартфон X', price: 29990, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800' },
    { id: '2', title: 'Ноутбук Y', price: 89990, image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800' },
    { id: '3', title: 'Планшет Z', price: 34990, image: 'https://images.unsplash.com/photo-1527698266440-12104e498b76?w=800' }
  ];
}
\`\`\`

Хотите, чтобы я разработал еще какие-то компоненты для магазина?`
  },
  {
    trigger: "сервер",
    response: `Для серверной части приложения я предлагаю использовать Node.js с Express. Вот пример базовой структуры:

**Структура файлов бэкенда:**
\`\`\`
server/
  controllers/
    productController.js - Логика для работы с товарами
  models/
    Product.js - Модель данных товара
  routes/
    api.js - API маршруты
  server.js - Главный файл сервера
\`\`\`

**Пример Express сервера (server.js):**
\`\`\`javascript
// server/server.js
const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', apiRoutes);

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Что-то пошло не так!');
});

app.listen(PORT, () => {
  console.log(\`Сервер запущен на порту \${PORT}\`);
});

module.exports = app;
\`\`\`

**Пример API маршрутов (routes/api.js):**
\`\`\`javascript
// server/routes/api.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Маршруты для товаров
router.get('/products', productController.getAllProducts);
router.get('/products/:id', productController.getProductById);
router.post('/products', productController.createProduct);
router.put('/products/:id', productController.updateProduct);
router.delete('/products/:id', productController.deleteProduct);

module.exports = router;
\`\`\`

**Пример контроллера (controllers/productController.js):**
\`\`\`javascript
// server/controllers/productController.js
const Product = require('../models/Product');

// Получить все товары
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Получить товар по ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Товар не найден' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Остальные методы контроллера...
\`\`\`

**Python альтернатива (FastAPI):**
\`\`\`python
# main.py
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Optional
import uvicorn

app = FastAPI()

class Product(BaseModel):
    id: int
    name: str
    price: float
    description: Optional[str] = None

# Пример данных
products = [
    Product(id=1, name="Смартфон X", price=29990, description="Отличный смартфон"),
    Product(id=2, name="Ноутбук Y", price=89990, description="Мощный ноутбук")
]

@app.get("/api/products", response_model=List[Product])
async def get_products():
    return products

@app.get("/api/products/{product_id}", response_model=Product)
async def get_product(product_id: int):
    for product in products:
        if product.id == product_id:
            return product
    raise HTTPException(status_code=404, detail="Товар не найден")

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
\`\`\`

Нужна ли дополнительная информация по настройке сервера?`
  },
  {
    trigger: "ошибка",
    response: `Я помогу исправить ошибку в вашем коде. Давайте разберем основные типы ошибок и их решения:

**1. Синтаксические ошибки в React/TypeScript:**
\`\`\`tsx
// Неправильно
const Component = () => {
  return (
    <div>
      <h1>Заголовок</h1>
      <p>Параграф</div>  // Ошибка: неправильно закрыт тег
    </div>
  );
}

// Правильно
const Component = () => {
  return (
    <div>
      <h1>Заголовок</h1>
      <p>Параграф</p>  // Исправлено
    </div>
  );
}
\`\`\`

**2. Ошибки типов в TypeScript:**
\`\`\`tsx
// Неправильно
interface UserProps {
  name: string;
  age: number;
}

const User: React.FC<UserProps> = (props) => {
  const { name, email } = props; // Ошибка: email не определен в UserProps
  return <div>{name}: {email}</div>;
}

// Правильно
interface UserProps {
  name: string;
  age: number;
  email?: string; // Добавлен опциональный параметр
}

const User: React.FC<UserProps> = (props) => {
  const { name, email = 'нет email' } = props; // Значение по умолчанию
  return <div>{name}: {email}</div>;
}
\`\`\`

**3. Ошибки стилей CSS/Tailwind:**
\`\`\`css
/* Неправильно */
.container {
  display: flex;
  align-items: center
  justify-content: space-between; /* Ошибка: пропущена точка с запятой */
}

/* Правильно */
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
\`\`\`

**4. Ошибки в JavaScript/асинхронном коде:**
\`\`\`javascript
// Неправильно - Промис без обработки ошибок
const fetchData = async () => {
  const response = await fetch('/api/data');
  const data = await response.json();
  return data;
};

// Правильно - с обработкой ошибок
const fetchData = async () => {
  try {
    const response = await fetch('/api/data');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Ошибка получения данных:', error);
    throw error;
  }
};
\`\`\`

Если у вас конкретная ошибка, сообщите мне подробности, и я помогу её исправить.`
  },
  {
    trigger: "лендинг",
    response: `Давайте создадим современный лендинг-пейдж. Вот необходимые компоненты:

**Структура файлов:**
\`\`\`
src/
  components/
    landing/
      Hero.tsx - Главный баннер
      Features.tsx - Блок с преимуществами
      Testimonials.tsx - Отзывы клиентов
      PricingPlans.tsx - Тарифные планы
      ContactForm.tsx - Форма обратной связи
  pages/
    Landing.tsx - Страница лендинга
\`\`\`

**Пример компонента Hero.tsx:**
\`\`\`tsx
// src/components/landing/Hero.tsx
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-violet-600 to-indigo-700 text-white py-20">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Создавайте потрясающие сайты с помощью ИИ
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Наша платформа использует искусственный интеллект для создания профессиональных сайтов за минуты, а не дни.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-white text-violet-700 hover:bg-gray-100">
              Начать бесплатно
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Узнать больше
            </Button>
          </div>
        </div>
        <div className="lg:w-1/2 lg:pl-12">
          <img 
            src="https://images.unsplash.com/photo-1551651653-c5186a1fbba2?w=800" 
            alt="AI создание сайтов" 
            className="rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
\`\`\`

**Пример компонента Features.tsx:**
\`\`\`tsx
// src/components/landing/Features.tsx
import Icon from "@/components/ui/Icon";

const features = [
  {
    icon: "Zap",
    title: "Молниеносная скорость",
    description: "Создайте полноценный сайт за считанные минуты благодаря нашему ИИ."
  },
  {
    icon: "Palette",
    title: "Дизайн мирового уровня",
    description: "Профессиональные шаблоны и настройки дизайна для любой отрасли."
  },
  {
    icon: "Code",
    title: "Чистый код",
    description: "Генерируем оптимизированный код без ошибок и багов."
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Почему выбирают нас</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Наша платформа сочетает в себе мощь искусственного интеллекта и простоту использования
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-violet-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Icon name={feature.icon} className="text-violet-700" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
\`\`\`

**Пример HTML/CSS для анимации элементов:**
\`\`\`html
<!-- Анимация при скролле - добавьте в index.html -->
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out'
    });
  });
</script>
\`\`\`

Хотите, чтобы я добавил другие секции для лендинга или показал код для контактной формы?`
  }
];

const AIAssistant = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Привет! Я твой AI-ассистент по разработке сайтов. Опиши, какой сайт ты хочешь создать, и я помогу тебе с кодом на разных языках программирования и структурой файлов."
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    // Добавляем сообщение пользователя
    setMessages((prev) => [...prev, { role: "user", content: input }]);
    setIsLoading(true);
    
    // Имитация ответа от AI с проверкой ключевых слов
    setTimeout(() => {
      const lowerInput = input.toLowerCase();
      
      // Поиск подходящего ответа из предзаготовленных
      const matchedResponse = AI_RESPONSES.find(item => 
        lowerInput.includes(item.trigger)
      );
      
      // Если найден подходящий ответ, используем его
      const responseContent = matchedResponse 
        ? matchedResponse.response
        : `Отлично! Вот пример кода для вашего запроса:

\`\`\`tsx
// src/components/Example.tsx
import React from 'react';

const Example = () => {
  return (
    <div className="p-4 border rounded shadow-sm">
      <h2 className="text-xl font-bold mb-2">Пример компонента</h2>
      <p>Этот компонент создан на основе вашего запроса.</p>
    </div>
  );
};

export default Example;
\`\`\`

Вы можете интегрировать этот компонент в вашу страницу. Нужны ли дополнительные уточнения или примеры на других языках программирования?`;
      
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: responseContent }
      ]);
      setIsLoading(false);
    }, 1200);
    
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="px-4 py-3 border-b flex items-center bg-violet-50">
        <Icon name="Bot" className="mr-2 text-violet-600" />
        <h2 className="text-lg font-medium">AI-ассистент</h2>
      </div>
      
      <Tabs defaultValue="chat" className="flex flex-col flex-1">
        <TabsList className="mx-4 mt-2 justify-start">
          <TabsTrigger value="chat">Чат</TabsTrigger>
          <TabsTrigger value="code">Примеры кода</TabsTrigger>
        </TabsList>
        
        <TabsContent value="chat" className="flex-1 flex flex-col">
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <Card
                  key={index}
                  className={`p-3 ${
                    message.role === "user"
                      ? "bg-violet-500 text-white ml-8"
                      : "bg-gray-100 mr-8"
                  }`}
                >
                  <div className="whitespace-pre-wrap break-words">
                    {message.content.split("```").map((part, i) => {
                      // Если это нечетный индекс, значит это блок кода
                      if (i % 2 === 1) {
                        const [language, ...codeParts] = part.split("\n");
                        const code = codeParts.join("\n");
                        return (
                          <div key={i} className="my-2 bg-gray-900 text-gray-100 p-3 rounded overflow-auto">
                            <div className="text-xs text-gray-400 mb-1">{language}</div>
                            <pre className="font-mono text-sm">
                              <code>{code}</code>
                            </pre>
                          </div>
                        );
                      }
                      // Обычный текст
                      return <p key={i}>{part}</p>;
                    })}
                  </div>
                </Card>
              ))}
              {isLoading && (
                <div className="flex justify-center py-2">
                  <Icon name="Loader" className="animate-spin text-violet-500" />
                </div>
              )}
            </div>
          </ScrollArea>
          
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Опиши, какой сайт ты хочешь создать..."
                className="min-h-24 resize-none"
              />
              <Button
                className="self-end bg-violet-600 hover:bg-violet-700"
                onClick={handleSendMessage}
                disabled={isLoading || !input.trim()}
              >
                <Icon name="Send" />
              </Button>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="code" className="flex-1 p-4 overflow-auto">
          <div className="space-y-4">
            <Card className="p-4">
              <h3 className="text-lg font-medium mb-2">Популярные примеры</h3>
              <ul className="space-y-2">
                <li>
                  <Button variant="link" className="p-0 h-auto text-left" onClick={() => setInput("Создай сайт магазина")}>
                    Создать интернет-магазин
                  </Button>
                </li>
                <li>
                  <Button variant="link" className="p-0 h-auto text-left" onClick={() => setInput("Сделай лендинг страницу")}>
                    Создать лендинг
                  </Button>
                </li>
                <li>
                  <Button variant="link" className="p-0 h-auto text-left" onClick={() => setInput("Напиши серверную часть")}>
                    Серверная часть (Node.js/Python)
                  </Button>
                </li>
                <li>
                  <Button variant="link" className="p-0 h-auto text-left" onClick={() => setInput("Исправь ошибку в коде")}>
                    Исправление ошибок
                  </Button>
                </li>
              </ul>
            </Card>
            
            <Card className="p-4">
              <h3 className="text-lg font-medium mb-2">Поддерживаемые языки</h3>
              <div className="flex flex-wrap gap-2">
                <div className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm">JavaScript</div>
                <div className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">TypeScript</div>
                <div className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm">React</div>
                <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Node.js</div>
                <div className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Python</div>
                <div className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">HTML/CSS</div>
              </div>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AIAssistant;
