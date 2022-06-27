import "./App.css";
import FooterTop from "./component/FooterTop/FooterTop";
import HeroAreea from "./component/HeroArea/HeroAreea";
import IncomeArea from "./component/IncomeArea/IncomeArea";
import NavBar from "./NavBar/NavBar";
import Trade from "./Trade/Trade";

function App() {
  return (
    <div>
      <NavBar/>
      <HeroAreea/>
      <Trade/>
      <IncomeArea/>
      <FooterTop/>
    </div>
  );
}

export default App;
