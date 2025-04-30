
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/Icon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";

const defaultPreviewHTML = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { 
      font-family: 'Inter', sans-serif;
      margin: 0;
      padding: 0;
      color: #333;
    }
    
    * {
      box-sizing: border-box;
    }
    
    header {
      background: #6d28d9;
      color: white;
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    nav {
      display: flex;
      gap: 1.5rem;
    }
    
    nav a {
      color: white;
      text-decoration: none;
      font-weight: 500;
    }
    
    .hero {
      padding: 4rem 2rem;
      background: linear-gradient(to right, #8b5cf6, #6d28d9);
      color: white;
      text-align: center;
    }
    
    .hero h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
    
    .hero p {
      font-size: 1.2rem;
      max-width: 600px;
      margin: 0 auto 2rem;
      opacity: 0.9;
    }
    
    .btn {
      display: inline-block;
      background: white;
      color: #6d28d9;
      padding: 0.8rem 1.5rem;
      border-radius: 0.375rem;
      font-weight: bold;
      text-decoration: none;
      transition: all 0.2s;
    }
    
    .btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    
    .features {
      padding: 4rem 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .features h2 {
      text-align: center;
      margin-bottom: 3rem;
      font-size: 2rem;
    }
    
    .feature-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }
    
    .feature-card {
      background: white;
      border-radius: 0.5rem;
      padding: 2rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
      transition: all 0.3s;
    }
    
    .feature-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
    }
    
    .feature-icon {
      background: #f3e8ff;
      color: #6d28d9;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1rem;
      font-size: 1.5rem;
    }
    
    footer {
      background: #f9fafb;
      padding: 2rem;
      text-align: center;
      color: #6b7280;
    }
  </style>
</head>
<body>
  <header>
    <div class="logo">Мой Сайт</div>
    <nav>
      <a href="#">Главная</a>
      <a href="#">О нас</a>
      <a href="#">Услуги</a>
      <a href="#">Контакты</a>
    </nav>
  </header>
  
  <section class="hero">
    <h1>Создайте свой идеальный сайт</h1>
    <p>Наша платформа поможет вам создать профессиональный сайт быстро и легко с помощью искусственного интеллекта.</p>
    <a href="#" class="btn">Начать сейчас</a>
  </section>
  
  <section class="features">
    <h2>Наши преимущества</h2>
    <div class="feature-grid">
      <div class="feature-card">
        <div class="feature-icon">⚡</div>
        <h3>Быстрая разработка</h3>
        <p>Создайте полноценный сайт за считанные минуты благодаря нашим инструментам.</p>
      </div>
      
      <div class="feature-card">
        <div class="feature-icon">🎨</div>
        <h3>Стильный дизайн</h3>
        <p>Выбирайте из сотен профессиональных шаблонов или создайте свой уникальный дизайн.</p>
      </div>
      
      <div class="feature-card">
        <div class="feature-icon">📱</div>
        <h3>Адаптивность</h3>
        <p>Ваш сайт будет отлично выглядеть на любых устройствах — от смартфонов до больших экранов.</p>
      </div>
    </div>
  </section>
  
  <footer>
    <p>© 2025 Мой Сайт. Все права защищены.</p>
  </footer>
</body>
</html>
`;

const codeExamples: Record<string, string> = {
  html: defaultPreviewHTML,
  
  react: `import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="logo">Мой Сайт</div>
        <nav>
          <a href="#">Главная</a>
          <a href="#">О нас</a>
          <a href="#">Услуги</a>
          <a href="#">Контакты</a>
        </nav>
      </header>
      
      <section className="hero">
        <h1>Создайте свой идеальный сайт</h1>
        <p>Наша платформа поможет вам создать профессиональный сайт быстро и легко с помощью искусственного интеллекта.</p>
        <a href="#" className="btn">Начать сейчас</a>
      </section>
      
      <section className="features">
        <h2>Наши преимущества</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Быстрая разработка</h3>
            <p>Создайте полноценный сайт за считанные минуты благодаря нашим инструментам.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>Стильный дизайн</h3>
            <p>Выбирайте из сотен профессиональных шаблонов или создайте свой уникальный дизайн.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Адаптивность</h3>
            <p>Ваш сайт будет отлично выглядеть на любых устройствах — от смартфонов до больших экранов.</p>
          </div>
        </div>
      </section>
      
      <footer>
        <p>© 2025 Мой Сайт. Все права защищены.</p>
      </footer>
    </div>
  );
}

export default App;`,
  
  nodejs: `// app.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware для парсинга JSON
app.use(express.json());
app.use(express.static('public'));

// Маршруты API
app.get('/api/data', (req, res) => {
  const data = {
    title: 'Мой Сайт',
    features: [
      { id: 1, title: 'Быстрая разработка', icon: '⚡', description: 'Создайте полноценный сайт за считанные минуты' },
      { id: 2, title: 'Стильный дизайн', icon: '🎨', description: 'Выбирайте из сотен профессиональных шаблонов' },
      { id: 3, title: 'Адаптивность', icon: '📱', description: 'Отлично выглядит на любых устройствах' }
    ]
  };
  
  res.json(data);
});

// Обработчик ошибок
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Что-то пошло не так!');
});

// Запуск сервера
app.listen(port, () => {
  console.log(\`Сервер запущен на порту \${port}\`);
});`
};

const PreviewPanel = () => {
  const [currentView, setCurrentView] = useState("desktop");
  const [previewHTML, setPreviewHTML] = useState(defaultPreviewHTML);
  const [codeLanguage, setCodeLanguage] = useState("html");
  
  const handleLanguageChange = (value: string) => {
    setCodeLanguage(value);
    setPreviewHTML(codeExamples[value] || defaultPreviewHTML);
  };
  
  return (
    <div className="flex flex-col h-full">
      <div className="px-4 py-3 border-b flex justify-between items-center bg-gray-50">
        <h2 className="text-lg font-medium">Предпросмотр</h2>
        
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className={currentView === "desktop" ? "bg-gray-200" : ""}
            onClick={() => setCurrentView("desktop")}
          >
            <Icon name="Monitor" size={16} />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className={currentView === "tablet" ? "bg-gray-200" : ""}
            onClick={() => setCurrentView("tablet")}
          >
            <Icon name="Tablet" size={16} />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className={currentView === "mobile" ? "bg-gray-200" : ""}
            onClick={() => setCurrentView("mobile")}
          >
            <Icon name="Smartphone" size={16} />
          </Button>
        </div>
      </div>
      
      <Tabs defaultValue="preview" className="flex-1 flex flex-col">
        <div className="flex justify-between items-center border-b px-4">
          <TabsList className="mt-2 justify-start">
            <TabsTrigger value="preview">Просмотр</TabsTrigger>
            <TabsTrigger value="code">Код</TabsTrigger>
          </TabsList>
          
          <RadioGroup 
            value={codeLanguage} 
            onValueChange={handleLanguageChange} 
            className="flex mt-2 space-x-2"
          >
            <div className="flex items-center space-x-1">
              <RadioGroupItem value="html" id="html" />
              <Label htmlFor="html" className="text-sm">HTML</Label>
            </div>
            <div className="flex items-center space-x-1">
              <RadioGroupItem value="react" id="react" />
              <Label htmlFor="react" className="text-sm">React</Label>
            </div>
            <div className="flex items-center space-x-1">
              <RadioGroupItem value="nodejs" id="nodejs" />
              <Label htmlFor="nodejs" className="text-sm">Node.js</Label>
            </div>
          </RadioGroup>
        </div>
        
        <TabsContent value="preview" className="flex-1 p-4 flex items-center justify-center">
          <div 
            className={`bg-white border shadow-sm overflow-auto ${
              currentView === "desktop" ? "w-full h-full" :
              currentView === "tablet" ? "w-[768px] h-[1024px]" :
              "w-[375px] h-[667px]"
            }`}
          >
            {codeLanguage === "html" ? (
              <iframe
                srcDoc={previewHTML}
                title="Preview"
                className="w-full h-full border-0"
                sandbox="allow-scripts"
              />
            ) : (
              <div className="p-4 h-full overflow-auto bg-gray-50 flex flex-col items-center justify-center">
                <div className="p-8 rounded-lg bg-white shadow-lg max-w-xl text-center">
                  <Icon name={codeLanguage === "react" ? "Code2" : "Server"} size={48} className="mx-auto mb-4 text-violet-600" />
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {codeLanguage === "react" ? "React-компонент" : "Серверный код Node.js"}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {codeLanguage === "react" 
                      ? "Этот React-компонент будет отрендерен клиентом. Для просмотра результата необходимо запустить приложение."
                      : "Серверный код требует запуска на Node.js сервере для корректной работы."}
                  </p>
                  <Button className="bg-violet-600 hover:bg-violet-700">
                    {codeLanguage === "react" ? "Скомпилировать" : "Запустить сервер"}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="code" className="flex-1 p-0">
          <ScrollArea className="h-full">
            <pre className="bg-gray-900 text-gray-100 p-4 m-0 h-full">
              <code className="font-mono text-sm">{previewHTML}</code>
            </pre>
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PreviewPanel;
