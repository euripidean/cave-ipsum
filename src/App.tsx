import React from "react";
import { TextBox } from "./Components/TextBox/TextBox";
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";

const ipsumText = "Written and directed by his red right hand.";

function handleCopy() {
  console.log("Copied!");
}

function App() {
  return (
    <>
      <Header />
      <TextBox text={ipsumText} onCopy={handleCopy} />
      <Footer />
    </>
  );
}

export default App;
