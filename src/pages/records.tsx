const Records = () => {
    const medicalHistory = [
      { date: "2024-01-10", diagnosis: "Flu", treatment: "Rest and hydration" },
      { date: "2023-11-05", diagnosis: "Allergy", treatment: "Antihistamines" },
    ];
  
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold">Medical Records</h1>
        <ul className="mt-4">
          {medicalHistory.map((record, idx) => (
            <li key={idx} className="p-2 border-b">
              <p><strong>Date:</strong> {record.date}</p>
              <p><strong>Diagnosis:</strong> {record.diagnosis}</p>
              <p><strong>Treatment:</strong> {record.treatment}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Records;
  