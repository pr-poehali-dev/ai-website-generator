
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/Icon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const defaultPreviewHTML = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { 
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 20px;
      text-align: center;
    }
    h1 { color: #6d28d9; }
  </style>
</head>
<body>
  <h1>Мой новый сайт</h1>
  <p>Это предварительный просмотр вашего сайта.</p>
  <button style="background: #6d28d9; color: white; border: none; padding: 10px 20px; border-radius: 4px; cursor: pointer;">
    Нажми на меня
  </button>
</body>
</html>
`;

const PreviewPanel = () => {
  const [currentView, setCurrentView] = useState("desktop");
  const [previewHTML, setPreviewHTML] = useState(defaultPreviewHTML);
  
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
        <TabsList className="mx-4 mt-2 justify-start">
          <TabsTrigger value="preview">Просмотр</TabsTrigger>
          <TabsTrigger value="code">Код</TabsTrigger>
        </TabsList>
        
        <TabsContent value="preview" className="flex-1 p-4 flex items-center justify-center">
          <div 
            className={`bg-white border shadow-sm overflow-auto ${
              currentView === "desktop" ? "w-full h-full" :
              currentView === "tablet" ? "w-[768px] h-[1024px]" :
              "w-[375px] h-[667px]"
            }`}
          >
            <iframe
              srcDoc={previewHTML}
              title="Preview"
              className="w-full h-full border-0"
              sandbox="allow-scripts"
            />
          </div>
        </TabsContent>
        
        <TabsContent value="code" className="flex-1 p-4">
          <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-auto h-full">
            <code>{previewHTML}</code>
          </pre>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PreviewPanel;
