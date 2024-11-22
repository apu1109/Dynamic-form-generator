import React, { useState } from "react";
import { useForm } from "react-hook-form";

const App = () => {
  const [jsonSchema, setJsonSchema] = useState<string>(JSON.stringify({
    title: "Sample Form",
    fields: [
      { id: "name", label: "Name", type: "text", required: true },
      { id: "email", label: "Email", type: "email", required: true },
    ],
  }, null, 2));

  const handleJsonChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJsonSchema(e.target.value);
  };

  return (
    <div className="flex flex-col sm:flex-row h-screen">
      <textarea
        className="w-full sm:w-1/2 p-4 border"
        value={jsonSchema}
        onChange={handleJsonChange}
      />
      <div className="w-full sm:w-1/2 p-4">
        <h1>Form Preview</h1>
        {/* Future Form Rendering Logic Here */}
      </div>
    </div>
  );
};

export default App;