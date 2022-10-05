import { Navbar } from "./Navbar";
import { Header } from "./Header";
import { Workers } from "./Workers";
import { Offers } from "./offers/Offers";
import { Footer } from "./Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Workers />
      <Offers />
      <Footer />
    </div>
  );
}

export default App;
