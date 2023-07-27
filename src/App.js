import { Route, Routes } from "react-router-dom";
import Main from "./components/main/Main";
import { SignIn, SignUp } from "./components/auth/index"
import Header from "./components/ui/Header";
import { useEffect } from "react";
import Aos from "aos";
import Footer from "./components/ui/Footer";

function App() {
  useEffect(() => {
    Aos.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    });
  })
  return (
    <div className="bg-gray-900 tracking-tight font-inter text-gray-200">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
