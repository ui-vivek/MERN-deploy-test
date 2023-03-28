import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Summary from "./pages/Summary";
import { Routes, Route } from "react-router-dom";
import Paragraph from "./pages/Paragraph";
import Chatbot from "./pages/Chatbot";
import CodeHelper from "./pages/CodeHelper";
import ImageGen from "./pages/ImageGen";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/paragraph" element={<Paragraph />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/codehelper" element={<CodeHelper />} />
        <Route path="/imagegen" element={<ImageGen />} />
      </Routes>
    </>
  );
}

export default App;
