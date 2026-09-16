import Navbar from "./components/NavBar";
import Profile from "./components/Profile";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main>
        <Profile />

        <About />

       <Skills />

        <Experience/>
       <Projects />

        <Contact/>
        <Footer />
      </main>
    </div>
  );
}

export default App;