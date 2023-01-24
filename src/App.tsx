import { createContext, useContext, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Burger from "./components/Burger";
import { Routes, Route, useNavigate } from "react-router-dom";
import Logo from "./components/Logo";
import { ThemeData } from "./components/ThemeComponent";
import PlanetNavPage from "./pages/PlanetNavPage";
import MainPage from "./pages/MainPage";
import Data from "./data.json";

export const MyContext = createContext<any>("");

function App() {
  const navigate = useNavigate();

  const [indexP, setIndexP] = useState<any>(0);
  const [isShown, setIsShown] = useState<boolean>(false);
  const [isActive1, setIsActive1] = useState<string>("0.5");
  const [isActive2, setIsActive2] = useState<string>("0.5");
  const [isActive3, setIsActive3] = useState<string>("0.5");
  const [planetImg, setPlanetImg] = useState<boolean>(true);
  const [isOpacity, setIsOpacity] = useState<boolean>(false);

  const [isClicked1, setIsClicked1] = useState<boolean>(false);
  const [isClicked2, setIsClicked2] = useState<boolean>(false);
  const [isClicked3, setIsClicked3] = useState<boolean>(false);

  
  

  const BurgerFunc = () => {
    setIsShown(!isShown);
    if (isShown) {
      navigate("/");
    } else {
      navigate("/nav");
    }
  };

 
 
  

  const NavigatePlanets1 = () => {
    console.log('1');
    
    let DataPlanet = Data.map((num) => num.name);
    if (DataPlanet.find((e) => e == "Mercury")) {
      setIndexP(0);
    }
  };
  const NavigatePlanets2 = () => {
    console.log('2');
    
    let DataPlanet = Data.map((num) => num.name);
    if (DataPlanet.find((e) => e == "Venus")) {
      setIndexP(1)
    }
  };
  const NavigatePlanets3 = () => {
    console.log('3')
    let DataPlanet = Data.map((num) => num.name);
    if (DataPlanet.find((e) => e == "Earth")) {
      setIndexP(2)
    }
  };
  const NavigatePlanets4 = () => {
    let DataPlanet = Data.map((num) => num.name);
    if (DataPlanet.find((e) => e == "Mars")) {
      setIndexP(3)
    }
  };
  const NavigatePlanets5 = () => {
    let DataPlanet = Data.map((num) => num.name);
    if (DataPlanet.find((e) => e == "Jupiter")) {
      setIndexP(4)
    }
  };
  const NavigatePlanets6 = () => {
    let DataPlanet = Data.map((num) => num.name);
    if (DataPlanet.find((e) => e == "Saturn")) {
      setIndexP(5)
    }
  };
  const NavigatePlanets7 = () => {
    let DataPlanet = Data.map((num) => num.name);
    if (DataPlanet.find((e) => e == "Uranus")) {
      setIndexP(6)
    }
  };
  const NavigatePlanets8 = () => {
    let DataPlanet = Data.map((num) => num.name);
    if (DataPlanet.find((e) => e == "Neptune")) {
      setIndexP(7)
    }
  };


  

  return (
    <MyContext.Provider
      value={{
        isActive1,
        setIsActive1,
        isActive2,
        setIsActive2,
        isActive3,
        setIsActive3,
        isShown,
        setIsShown,
        indexP,
        setIndexP,
        planetImg,
        setPlanetImg,
        isOpacity,
        setIsOpacity,
        isClicked1, setIsClicked1,isClicked2, setIsClicked2,isClicked3, setIsClicked3
      }}
    >
      <div className="App">
        <GlobalStyles />
        <Header>
          <Logo />
          <BurgerButton onClick={BurgerFunc} opacity={isShown ? "0.2" : "1"}>
            <Burger />
          </BurgerButton>
          <HeaderButtonDiv>
            <HeaderButtons onClick={NavigatePlanets1}>mercury</HeaderButtons>
            <HeaderButtons onClick={NavigatePlanets2}>venus</HeaderButtons>
            <HeaderButtons onClick={NavigatePlanets3}>earth</HeaderButtons>
            <HeaderButtons onClick={NavigatePlanets4}>mars</HeaderButtons>
            <HeaderButtons onClick={NavigatePlanets5}>jupiter</HeaderButtons>
            <HeaderButtons onClick={NavigatePlanets6}>saturn</HeaderButtons>
            <HeaderButtons onClick={NavigatePlanets7}>uranus</HeaderButtons>
            <HeaderButtons onClick={NavigatePlanets8}>neptune</HeaderButtons>
            
          </HeaderButtonDiv>
        </Header>
        <Routes>
          <Route path="nav" element={<PlanetNavPage />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </div>
    </MyContext.Provider>
  );
}

export default App;

const Header = styled.div`
  width: 100%;
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ffffff2f;

  @media (width > 767px) {
    justify-content: center;
    flex-direction: column;
    padding: 32px 53px 27px 51px;
  }
  @media (width > 1439px){
    justify-content: space-between;
    flex-direction: row;
    padding: 22px 41px 27px 32px;
    
  }
`;

const BurgerButton = styled.button<any>`
  background-color: transparent;
  cursor: pointer;
  opacity: ${(props) => props.opacity};
  border: none;

  @media (width > 767px) {
    display: none;
  }
`;

const HeaderButtonDiv = styled.div`
  display: none;
  justify-content: space-between;
  align-items: center;
  @media (width > 767px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 39px;
    width: 100%;
  }
  @media (width > 1439px){
    width: 50%;
    margin-top:0px;
    justify-content:flex-end
  }
`;

const HeaderButtons = styled.button`
  color: white;
  border: none;
  background-color: transparent;
  justify-content: space-between;
  text-transform: uppercase;
  font-family: ${ThemeData.fonts.spartan};
  font-weight: 700;
  font-size: 11px;
  line-height: 25px;
  @media (width > 1439px){
    margin-left: 33px;
  }
`;





const GlobalStyles = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
}
  body {
    background: #070724;
    background-image: url('../public/assets/background-stars.svg');
    background-repeat: no-repeat;
    background-size: 100vh;
    
  }
textarea {
  resize: none;
}
  
`;
