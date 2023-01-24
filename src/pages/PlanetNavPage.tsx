import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MyContext } from "../App";
import Arrow from "../components/Arrow";
import { ThemeData } from "../components/ThemeComponent";
import Data from "../data.json";



export default function PlanetNavPage() {

  const navigate = useNavigate();

  const context = useContext(MyContext);
  console.log(context.isShown);

  const NavigatePlanets1 = () => {
    navigate("/");
    context.setIsShown(!context.isShown);
    let DataPlanet = Data.map((num) => num.name);

    if (DataPlanet.find((e) => e == "Mercury")) {
      context.setIndexP(0)
    }
  };

  const NavigatePlanets2 = () => {
    navigate("/");
    context.setIsShown(!context.isShown);
    let DataPlanet = Data.map((num) => num.name);

    if (DataPlanet.find((e) => e == "Venus")) {
      context.setIndexP(1)
    }
  };
  const NavigatePlanets3 = () => {
    navigate("/");
    context.setIsShown(!context.isShown);
    let DataPlanet = Data.map((num) => num.name);

    if (DataPlanet.find((e) => e == "Earth")) {
      context.setIndexP(2)
    }
  };
  const NavigatePlanets4 = () => {
    navigate("/");
    context.setIsShown(!context.isShown);
    let DataPlanet = Data.map((num) => num.name);

    if (DataPlanet.find((e) => e == "Mars")) {
      context.setIndexP(3)
    }
  };
  const NavigatePlanets5 = () => {
    navigate("/");
    context.setIsShown(!context.isShown);
    let DataPlanet = Data.map((num) => num.name);

    if (DataPlanet.find((e) => e == "Jupiter")) {
      context.setIndexP(4)
    }
  };
  const NavigatePlanets6 = () => {
    navigate("/");
    context.setIsShown(!context.isShown);
    let DataPlanet = Data.map((num) => num.name);

    if (DataPlanet.find((e) => e == "Saturn")) {
      context.setIndexP(5)
    }
  };
  const NavigatePlanets7 = () => {
    navigate("/");
    context.setIsShown(!context.isShown);
    let DataPlanet = Data.map((num) => num.name);

    if (DataPlanet.find((e) => e == "Uranus")) {
      context.setIndexP(6)
    }
  };
  const NavigatePlanets8 = () => {
    navigate("/");
    context.setIsShown(!context.isShown);
    let DataPlanet = Data.map((num) => num.name);

    if (DataPlanet.find((e) => e == "Neptune")) {
      context.setIndexP(7)
    }
  };

  return (
    
    <PlanetNav
    style={{ display: context.isShown ? "block" : "none" }}
    >
      <PlanetUl>
        <PlanetsLi
        
        style={{ marginTop: "20px" }}
        onClick={NavigatePlanets1}>
          <CirclePlanet>
            <LilCircle backgroundColor={ThemeData.colors.mercury} />
            <LiText fonts={ThemeData.fonts.spartan}>Mercury</LiText>
          </CirclePlanet>
          <Arrow />
        </PlanetsLi>
        <LineDiv />

        <PlanetsLi onClick={NavigatePlanets2} style={{ marginTop: "20px" }}>
          <CirclePlanet>
            <LilCircle backgroundColor={ThemeData.colors.venus} />
            <LiText fonts={ThemeData.fonts.spartan}>venus</LiText>
          </CirclePlanet>
          <Arrow />
        </PlanetsLi>
        <LineDiv />

        <PlanetsLi onClick={NavigatePlanets3} style={{ marginTop: "20px" }}>
          <CirclePlanet>
            <LilCircle backgroundColor={ThemeData.colors.earth} />
            <LiText fonts={ThemeData.fonts.spartan}>earth</LiText>
          </CirclePlanet>
          <Arrow />
        </PlanetsLi>
        <LineDiv />

        <PlanetsLi onClick={NavigatePlanets4} style={{ marginTop: "20px" }}>
          <CirclePlanet>
            <LilCircle backgroundColor={ThemeData.colors.mars} />
            <LiText fonts={ThemeData.fonts.spartan}>mars</LiText>
          </CirclePlanet>
          <Arrow />
        </PlanetsLi>
        <LineDiv />

        <PlanetsLi onClick={NavigatePlanets5} style={{ marginTop: "20px" }}>
          <CirclePlanet>
            <LilCircle backgroundColor={ThemeData.colors.jupiter} />
            <LiText fonts={ThemeData.fonts.spartan}>jupiter</LiText>
          </CirclePlanet>
          <Arrow />
        </PlanetsLi>
        
        <LineDiv />

        <PlanetsLi onClick={NavigatePlanets6} style={{ marginTop: "20px" }}>
          <CirclePlanet>
            <LilCircle backgroundColor={ThemeData.colors.saturn} />
            <LiText fonts={ThemeData.fonts.spartan}>saturn</LiText>
          </CirclePlanet>
          <Arrow />
        </PlanetsLi>
        <LineDiv />

        <PlanetsLi onClick={NavigatePlanets7} style={{ marginTop: "20px" }}>
          <CirclePlanet>
            <LilCircle backgroundColor={ThemeData.colors.uranus} />
            <LiText fonts={ThemeData.fonts.spartan}>uranus</LiText>
          </CirclePlanet>
          <Arrow />
        </PlanetsLi>
        <LineDiv />

        <PlanetsLi onClick={NavigatePlanets8} style={{ marginTop: "20px" }}>
          <CirclePlanet>
            <LilCircle backgroundColor={ThemeData.colors.neptune} />
            <LiText fonts={ThemeData.fonts.spartan}>neptune</LiText>
          </CirclePlanet>
          <Arrow />
        </PlanetsLi>
      </PlanetUl>
    </PlanetNav>
    
  );
}

const PlanetNav = styled.div<any>`
  display: block;
  width: 100%;
  padding: 24px 32px 0 24px;
  

  @media (width > 767px){
    all: unset;
    display: flex;
    padding: 0;
    width: 100%;
    

  
  }
`;
const LineDiv = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ffffff2f;

  @media (width > 767px){
    display: none;
  }
`;
const PlanetsLi = styled.button`
  color: white;
  list-style: none;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border: none;
  background-color: transparent;

  @media (width > 767px){
    all:unset;
    color: white;
    border: none;
    /* margin-left: 33px; */
   
    
  }
`;

const LiText = styled.p<any>`
  font-family: ${(props) => props.fonts};
  font-weight: 700;
  font-size: 15px;
  line-height: 25px;
  letter-spacing: 1.36364px;
  text-transform: uppercase;
`;
const LilCircle = styled.div<any>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.backgroundColor};
  margin-right: 25px;

  @media (width > 767px){
    display: none;
  }
`;

const CirclePlanet = styled.div`
  display: flex;
  align-items: center;
  @media (width > 767px){

  }
 
`;


const PlanetUl = styled.ul`
  @media (width > 767px){
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 53px 27px 51px;
  }
`