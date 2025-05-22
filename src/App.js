import React, { useState } from "react";
import FileUpload from "./FileUpload";
import TextDisplay from "./TextDisplay";

function App() {
  const [text, setText] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h2>📄 İngilizce Belge Üzerinden Türkçe Anlam Gösterimi</h2>
      <FileUpload onFileLoaded={setText} />
      {text && (
        <div>
          <h3>Metin:</h3>
          <TextDisplay text={text} />
        </div>
      )}
    </div>
  );
}

export default App;
