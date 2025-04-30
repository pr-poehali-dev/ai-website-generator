
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/Icon";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const AIAssistant = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Привет! Я твой AI-ассистент. Опиши, какой сайт ты хочешь создать, и я помогу тебе с кодом."
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    // Добавляем сообщение пользователя
    setMessages((prev) => [...prev, { role: "user", content: input }]);
    setIsLoading(true);
    
    // Имитация ответа от AI (в реальном приложении здесь был бы API-запрос)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `Отличная идея! Вот пример кода для вашего запроса:\n\n\`\`\`jsx\nconst MyComponent = () => {\n  return <div>Ваш новый компонент</div>;\n};\n\`\`\``
        }
      ]);
      setIsLoading(false);
    }, 1000);
    
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
              <div className="whitespace-pre-wrap">{message.content}</div>
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
    </div>
  );
};

export default AIAssistant;
