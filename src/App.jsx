import TheNavbar from "./components/TheNavbar";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import TeamPage from "./pages/TeamPage";

function App() {
  return (
    <div className="bg-gray-400 min-h-screen">
      <TheNavbar />
      <div className="bg-white border rounded p-10 max-w-xl mx-auto m-10">
        <HomePage />
        <AboutPage />
        <ContactPage />
        <TeamPage />
      </div>
    </div>
  );
}

export default App;
