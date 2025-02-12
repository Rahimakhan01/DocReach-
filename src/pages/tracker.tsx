import { useState } from "react";
import { Button } from "@/components/ui/button";
import axios from "axios";

const Tracker = () => {
  const [symptoms, setSymptoms] = useState("");
  const [messages, setMessages] = useState<
    { text: string; sender: "user" | "ai" }[]
  >([]);
  const [loading, setLoading] = useState(false);

  const handleCheck = async () => {
    if (!symptoms.trim()) return;

    setMessages([...messages, { text: symptoms, sender: "user" }]);
    setSymptoms("");
    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/analyze-symptoms",
        { symptoms }
      );
      const cleanResponse = res.data.message.replace(/\*/g, ""); // Removes asterisks
      setMessages((prev) => [...prev, { text: cleanResponse, sender: "ai" }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { text: "Error fetching response. Please try again.", sender: "ai" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto bg-white shadow-lg rounded-lg mt-24 mb-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Stay Ahead of Your Health - Your Health Guide in Your Pocket!</h1>

      {/* Chat Box */}
      <div className="h-96 overflow-y-auto border p-4 rounded-lg bg-gray-50 flex flex-col gap-2 mt-8">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            } transition-all duration-300`}
          >
            <div
              className={`p-3 rounded-lg max-w-[80%] ${
                msg.sender === "user"
                  ? "bg-blue-500 text-white shadow-md"
                  : "bg-gray-200 text-black shadow-sm"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="mt-4">
        <textarea
          className="w-full p-3 border rounded resize-none"
          placeholder="Enter your symptoms..."
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          rows={3}
        />
        <Button
          onClick={handleCheck}
          className="mt-3 w-full"
          disabled={loading}
        >
          {loading ? "Checking..." : "Check Symptoms"}
        </Button>
      </div>
    </div>
  );
};

export default Tracker;
