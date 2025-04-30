
import AIAssistant from "@/components/AIAssistant";
import PreviewPanel from "@/components/PreviewPanel";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/Icon";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Верхняя панель */}
      <header className="bg-violet-700 text-white p-4 shadow-md flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Icon name="Code2" size={28} className="text-white" />
          <h1 className="text-xl font-bold">AI Site Builder</h1>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="bg-white text-violet-700 hover:bg-gray-100">
            <Icon name="Save" className="mr-1" />
            Сохранить
          </Button>
          <Button variant="outline" className="bg-white text-violet-700 hover:bg-gray-100">
            <Icon name="Share2" className="mr-1" />
            Опубликовать
          </Button>
        </div>
      </header>

      {/* Основной контент */}
      <div className="flex flex-1 overflow-hidden">
        {/* Левая панель с AI-ассистентом */}
        <div className="w-1/2 border-r overflow-hidden">
          <AIAssistant />
        </div>

        {/* Правая панель с предпросмотром */}
        <div className="w-1/2 overflow-hidden">
          <PreviewPanel />
        </div>
      </div>
    </div>
  );
};

export default Index;
