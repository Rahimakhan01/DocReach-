import { useState } from "react";
import { Button } from "@/components/ui/button";

const Message = () => {
  const [messages, setMessages] = useState<{ text: string; sender: "user" | "doctor" }[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Chat with Doctor</h1>
      <div className="h-96 overflow-y-auto border p-4 mt-4 rounded">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-2 my-2 rounded ${
              msg.sender === "user"
                ? "bg-blue-500 text-white text-right"
                : "bg-gray-200"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="mt-4 flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border p-2 rounded"
          placeholder="Type a message..."
        />
        <Button onClick={sendMessage} className="ml-2">
          Send
        </Button>
      </div>
    </div>
  );
};

export default Message;
