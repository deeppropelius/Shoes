import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/navbar/Navbar";
import Section1 from "./components/Section1/Section1";

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen w-full text-foreground transition-colors duration-500 overflow-x-hidden">
        <Navbar />
        <Section1 />
      </div>
    </ThemeProvider>
  );
}

export default App;
