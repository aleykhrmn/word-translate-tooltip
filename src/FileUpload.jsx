import React from "react";

const FileUpload = ({ onFileLoaded }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target.result;
      onFileLoaded(text);
    };
    reader.readAsText(file);
  };

  return (
    <div style={{ backgroundColor: "#a9dbb7", padding: "20px", borderRadius: "8px" }}>
      <input
        type="file"
        accept=".txt"
        onChange={handleFileChange}
        style={{
          backgroundColor: "#a9dbb7",
          padding: "10px 15px",
          fontSize: "16px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          cursor: "pointer",
          width: "90%",
          maxWidth: "250px",
        }}
      />
    </div>
  );
};

export default FileUpload;