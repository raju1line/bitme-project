import "./App.css";
import FooterTop from "./component/FooterTop/FooterTop";
import HeroAreea from "./component/HeroArea/HeroAreea";
import IncomeArea from "./component/IncomeArea/IncomeArea";
import Footer from "./Footer/Footer";
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
      <Footer/>
    </div>
  );
}

export default App;
