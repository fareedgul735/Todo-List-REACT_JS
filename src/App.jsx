import Navbar from "./navbar/Navbar";
import TodoList from "./list/TodoList";
import Footer from "./footer/Footer";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState(false);

  const toggle = () => {
    // setTheme(theme ? false : true);
    setTheme(!theme);
  };

  return (
    <>
      <Navbar toggle={toggle} theme={theme} />
      <TodoList toggle={toggle} theme={theme} />
      <Footer />
    </>
  );
}

export default App;
