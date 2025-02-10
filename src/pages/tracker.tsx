import { useState } from "react";
import { Button } from "@/components/ui/button";

const Tracker = () => {
  const [symptoms, setSymptoms] = useState("");
  const [response, setResponse] = useState("");

  const handleCheck = async () => {
    // Simulate AI response
    setResponse(`Based on your symptoms (${symptoms}), you may have a mild condition. Please consult a doctor for accurate diagnosis.`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Symptom Tracker</h1>
      <textarea
        className="w-full p-2 border rounded mt-4"
        placeholder="Enter your symptoms..."
        value={symptoms}
        onChange={(e) => setSymptoms(e.target.value)}
      ></textarea>
      <Button onClick={handleCheck} className="mt-4">Check</Button>
      {response && <p className="mt-4 p-2 bg-gray-100 rounded">{response}</p>}
    </div>
  );
};

export default Tracker;