
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import notes from "../notes";
import Note from './Note';

function App() {

  return (
    <div>
      <Header />
     
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
