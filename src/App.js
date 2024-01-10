import "./styles.css";
import Search from "./Search";
import Currentweather from "./Currentweather";
import Days from "./Days";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <Currentweather />
        <Days />
        <Footer />
      </div>
    </div>
  );
}

export default App;
