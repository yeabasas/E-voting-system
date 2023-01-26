import Header from "./components/Header";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="w-screen h-screen flex flex-col items-center py-1 overflow-hidden">
      <Header />
      <Navigation />
    </div>
  );
}

export default App;
