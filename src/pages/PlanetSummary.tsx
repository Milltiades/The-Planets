import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MyContext } from "../App";
import SourceSvg from "../components/SourceSvg";
import { ThemeData } from "../components/ThemeComponent";
import Data from "../data.json";
import PlanetNavPage from "./PlanetNavPage";

export default function PlanetSummary() {
  const context = useContext(MyContext);

  const [pixelT, setPixelT] = useState("");
  const [pixelD, setPixelD] = useState("");
  const [pixel, setPixel] = useState("");
  const [tabletSize, setTabletSize] = useState(1);

  useEffect(() => {
    WindowSize();

    if (context.indexP === 0 && window.innerWidth <= 767) {
      setPixel("111px");
    } else if (context.indexP === 1 && window.innerWidth <= 767) {
      setPixel("154px");
    } else if (context.indexP === 2 && window.innerWidth <= 767) {
      setPixel("173px");
    } else if (context.indexP === 3 && window.innerWidth <= 767) {
      setPixel("129px");
    } else if (context.indexP === 4 && window.innerWidth <= 767) {
      setPixel("224px");
    } else if (context.indexP === 5 && window.innerWidth <= 767) {
      setPixel("256px");
    } else if (context.indexP === 6 && window.innerWidth <= 767) {
      setPixel("176px");
    } else if (context.indexP === 7 && window.innerWidth <= 767) {
      setPixel("173px");
    } else if (
      context.indexP === 0 &&
      window.innerWidth >= 768 &&
      window.innerWidth <= 1439
    ) {
      setPixelT("184px");
    } else if (
      context.indexP === 1 &&
      window.innerWidth >= 768 &&
      window.innerWidth <= 1439
    ) {
      setPixelT("253px");
    } else if (
      context.indexP === 2 &&
      window.innerWidth >= 768 &&
      window.innerWidth <= 1439
    ) {
      setPixelT("285px");
    } else if (
      context.indexP === 3 &&
      window.innerWidth >= 768 &&
      window.innerWidth <= 1439
    ) {
      setPixelT("213px");
    } else if (
      context.indexP === 4 &&
      window.innerWidth >= 768 &&
      window.innerWidth <= 1439
    ) {
      setPixelT("369px");
    } else if (
      context.indexP === 5 &&
      window.innerWidth >= 768 &&
      window.innerWidth <= 1439
    ) {
      setPixelT("422px");
    } else if (
      context.indexP === 6 &&
      window.innerWidth >= 768 &&
      window.innerWidth <= 1439
    ) {
      setPixelT("290px");
    } else if (
      context.indexP === 7 &&
      window.innerWidth >= 768 &&
      window.innerWidth <= 1439
    ) {
      setPixelT("285px");
    } else if (context.indexP === 0 && window.innerWidth >= 1440) {
      setPixelD("290px");
    } else if (context.indexP === 1 && window.innerWidth >= 1440) {
      setPixelD("400px");
    } else if (context.indexP === 2 && window.innerWidth >= 1440) {
      setPixelD("450px");
    } else if (context.indexP === 3 && window.innerWidth >= 1440) {
      setPixelD("336px");
    } else if (context.indexP === 4 && window.innerWidth >= 1440) {
      setPixelD("582px");
    } else if (context.indexP === 5 && window.innerWidth >= 1440) {
      setPixelD("666px");
    } else if (context.indexP === 6 && window.innerWidth >= 1440) {
      setPixelD("458px");
    } else if (context.indexP === 7 && window.innerWidth >= 1440) {
      setPixelD("450px");
    } else {
      setPixel("");
    }
  }, [window.innerWidth, context.indexP]);

  const WindowSize = () => {
    if (window.innerWidth >= 768 && window.innerWidth <= 1439) {
      setTabletSize(2);
    } else if (window.innerWidth >= 1440) {
      setTabletSize(3);
    } else if (window.innerWidth <= 767) {
      setTabletSize(1);
    }
  };
  window.onresize = function () {
    WindowSize();
    // window.location.reload();
  };
  const obj = ["name", "structure", "geology"];

  return (
    <PlanetDiv>
      <ScreenAllDiv>
        <PlanetImg>
          <TwoImg>
            <ImgPlanet
              width={
                tabletSize == 1 ? pixel : tabletSize == 2 ? pixelT : pixelD
              }
              height={
                tabletSize == 1 ? pixel : tabletSize == 2 ? pixelT : pixelD
              }
              src={
                context.planetImg
                  ? Data[context.indexP].images.planet
                  : Data[context.indexP].images.internal
              }
              alt=""
            />
            <GeologyImg
              opacity={context.isOpacity ? "1" : "0"}
              width={"70"}
              height={"88"}
              src={Data[context.indexP].images.geology}
            />
          </TwoImg>
        </PlanetImg>

        <OverviewWrapper>
          <PlanetTextContent>
            <ContentH1>{Data[context.indexP].name}</ContentH1>
            <ContentP>
              {context.isClicked1
                ? Data[context.indexP].overview.content
                : context.isClicked2
                ? Data[context.indexP].structure.content
                : Data[context.indexP].geology.content}
            </ContentP>
            <SourceDiv>
              <SourceP>Source :</SourceP>
              <SourceLink to={Data[context.indexP].overview.source}>
                <SourceP>Wikipedia</SourceP>
                <SourceSvg />
              </SourceLink>
            </SourceDiv>
          </PlanetTextContent>
          <OverviewAppeared>
            <Overview>
              <OverviewButton
                style={{
                  background: context.isClicked1
                    ? context.indexP == 0
                      ? `#419EBB`
                      : context.indexP == 1
                      ? `${ThemeData.colors.venus}`
                      : context.indexP == 2
                      ? `${ThemeData.colors.earth}`
                      : context.indexP == 3
                      ? `${ThemeData.colors.mars}`
                      : context.indexP == 4
                      ? `${ThemeData.colors.jupiter}`
                      : context.indexP == 5
                      ? `${ThemeData.colors.saturn}`
                      : context.indexP == 6
                      ? `${ThemeData.colors.uranus}`
                      : `${ThemeData.colors.neptune}`
                    : null,
                }}
                onClick={() => {
                  context.setIsActive1("1");
                  context.setPlanetImg(true);
                  context.setIsOpacity(false);
                  context.setIsClicked1(true);
                  context.setIsClicked2(false);
                  context.setIsClicked3(false);
                  context.setIsActive2("0.5");
                  context.setIsActive3("0.5");
                }}
                
              >
                <OverviewLi opacity={context.isActive1}>
                  <span style={{color:'#ffffff2f', marginRight : '10px'}}>01</span> OVERVIEW
                </OverviewLi>
              </OverviewButton>
              <OverviewButton
                style={{
                  background: context.isClicked2
                    ? context.indexP == 0
                      ? `#419EBB`
                      : context.indexP == 1
                      ? `${ThemeData.colors.venus}`
                      : context.indexP == 2
                      ? `${ThemeData.colors.earth}`
                      : context.indexP == 3
                      ? `${ThemeData.colors.mars}`
                      : context.indexP == 4
                      ? `${ThemeData.colors.jupiter}`
                      : context.indexP == 5
                      ? `${ThemeData.colors.saturn}`
                      : context.indexP == 6
                      ? `${ThemeData.colors.uranus}`
                      : `${ThemeData.colors.neptune}`
                    : null,
                }}
                onClick={() => {
                  context.setIsActive2("1");
                  context.setPlanetImg(false);
                  context.setIsOpacity(false);
                  context.setIsClicked2(true);
                  context.setIsClicked3(false);
                  context.setIsClicked1(false);
                  context.setIsActive1("0.5");
                  context.setIsActive3("0.5");
                }}
                
              >
                <OverviewLi opacity={context.isActive2}>
                <span style={{color:'#ffffff2f', marginRight : '10px'}}>02</span> Internal Structure
                </OverviewLi>
              </OverviewButton>
              <OverviewButton
                style={{
                  background: context.isClicked3
                    ? context.indexP == 0
                      ? `#419EBB`
                      : context.indexP == 1
                      ? `${ThemeData.colors.venus}`
                      : context.indexP == 2
                      ? `${ThemeData.colors.earth}`
                      : context.indexP == 3
                      ? `${ThemeData.colors.mars}`
                      : context.indexP == 4
                      ? `${ThemeData.colors.jupiter}`
                      : context.indexP == 5
                      ? `${ThemeData.colors.saturn}`
                      : context.indexP == 6
                      ? `${ThemeData.colors.uranus}`
                      : `${ThemeData.colors.neptune}`
                    : null,
                }}
                onClick={() => {
                  context.setIsActive3("1");
                  context.setPlanetImg(true);
                  context.setIsOpacity(true);
                  context.setIsClicked3(true);
                  context.setIsClicked2(false);
                  context.setIsClicked1(false);
                  context.setIsActive1("0.5");
                  context.setIsActive2("0.5");
                }}
                
              >
                <OverviewLi opacity={context.isActive3}><span style={{color:'#ffffff2f', marginRight : '10px'}}>03</span>  Surface Geology</OverviewLi>
              </OverviewButton>
            </Overview>
          </OverviewAppeared>
        </OverviewWrapper>
      </ScreenAllDiv>
      <FooterSummary>
        <RotationTime>
          <RotationP>rotation time</RotationP>
          <RotationH1>{Data[context.indexP].rotation}</RotationH1>
        </RotationTime>

        <RotationTime>
          <RotationP>revolution time</RotationP>
          <RotationH1>{Data[context.indexP].revolution}</RotationH1>
        </RotationTime>

        <RotationTime>
          <RotationP>radius</RotationP>
          <RotationH1>{Data[context.indexP].radius}</RotationH1>
        </RotationTime>

        <RotationTime style={{ marginRight: "0px" }}>
          <RotationP>average temp</RotationP>
          <RotationH1>{Data[context.indexP].temperature}</RotationH1>
        </RotationTime>
      </FooterSummary>
    </PlanetDiv>
  );
}

const PlanetDiv = styled.div`
  width: 100%;
  display: block;
  padding: 24px 24px 47px 24px;

  @media (width > 767px) {
    height: 460px;
    padding: 54px 40px 36px 39px;
  }
  @media (width > 1439px) {
    padding: 212px 165px 56px 165px;
  }
`;

const PlanetTextContent = styled.div`
  display: block;
  align-items: center;
  text-align: center;
  @media (width > 767px) {
    width: 50%;
  }
  @media (width > 1439px) {
    width: 100%;
    padding: 0px 0px 48px 66px;
    
  }
`;
const ContentH1 = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 52px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  font-family: ${ThemeData.fonts.antonio};
  @media (width > 767px) {
    font-weight: 400;
    font-size: 48px;
    line-height: 62px;
    text-align: start;
    margin-right: 183px;
  }
  @media (width > 1439px) {
    font-weight: 400;
    font-size: 70px;
    line-height: 104px;
   
  }
`;

const ContentP = styled.p`
  margin-top: 16px;
  font-weight: 400;
  font-size: 11px;
  line-height: 22px;
  text-align: center;
  color: #ffffff;
  font-family: ${ThemeData.fonts.spartan};
  height: 132px;

  @media (width > 767px) {
    text-align: start;
    margin-top: 24px;
  }
  @media (width > 1439px) {
    font-weight: 400;
    font-size: 14px;
    line-height: 25px;
    margin-top: 23px;
   
  }
`;

const SourceDiv = styled.div`
  margin-top: 32px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  @media (width > 767px) {
    justify-content: flex-start;
  }
  @media (width > 1439px){
    margin-top: 24px;

  }
`;
const SourceP = styled.p`
  color: white;
  font-weight: 400;
  font-size: 12px;
  line-height: 25px;
  font-family: ${ThemeData.fonts.spartan};
  opacity: 0.5;
  margin-right: 3px;
  font-style: normal;
  @media (width > 1439px) {
    font-weight: 400;
    font-size: 14px;
    line-height: 25px;
  }
`;
const SourceLink = styled(Link)`
  font-weight: 400;
  font-size: 12px;
  line-height: 25px;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterSummary = styled.div`
  margin-top: 28px;
  display: block;
  width: 100%;
  @media (width > 767px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  @media (width > 1439px) {
    width: 100%;
  }
`;
const RotationTime = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 9px 24px 13px 24px;
  align-items: center;
  border: 1px solid #ffffff2f;
  margin-bottom: 8px;
  @media (width > 767px) {
    display: block;
    padding: 16px 0px 19px 15px;
    margin-right: 11px;
    width: 100%;
  }
  @media (width > 1439px) {
    width: 100%;
    margin-right: 30px;
    padding-right: 0px;
  }
`;
const RotationP = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 8px;
  line-height: 16px;
  letter-spacing: 0.727273px;
  text-transform: uppercase;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.5;
  font-family: ${ThemeData.fonts.spartan};
  @media (width > 1439px) {
    font-size: 11px;
    line-height: 25px;
    letter-spacing: -0.9px;
  }
`;

const RotationH1 = styled.h1`
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  text-align: right;
  letter-spacing: -0.75px;
  text-transform: uppercase;
  color: #ffffff;
  font-family: ${ThemeData.fonts.antonio};
  @media (width > 767px) {
    font-weight: 400;
    font-size: 24px;
    line-height: 31px;
    letter-spacing: -0.9px;
    text-align: left;
    margin-top: 6px;
    @media (width > 1439px) {
      font-weight: 400;
      font-size: 35px;
      line-height: 40px;
      letter-spacing: -1.5px;
    }
  }
`;
const PlanetImg = styled.div`
  width: 100%;
  height: 304px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (width > 767px) {
    height: 460px;
  }
  @media (width > 1439px) {
    width: 65%;
  }
`;
const TwoImg = styled.div`
  display: flex;
  height: 304px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (width > 1439px) {
    height: 100%;
  }
`;

const ImgPlanet = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: absolute;
  z-index: -1;
`;

const GeologyImg = styled.img<any>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: absolute;
  margin-top: 150px;
  z-index: 1;
  opacity: ${(props) => props.opacity};
`;

const OverviewWrapper = styled.div`
  display: flex;
  @media (width > 1439px) {
    flex-direction: column;
    width: 35%;
    padding-left: 30px;
  }
`;

const OverviewAppeared = styled.div`
  display: none;

  @media (width > 767px) {
    display: flex;
    width: 50%;

    padding: 59px 0px 48px 66px;
  }
  @media (width > 1439px) {
    width: 100%;
    padding-top:0px;
  }
`;

const Overview = styled.ul`
  display: none;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (width > 767px) {
    display: flex;
    flex-direction: column;
  }
`;
const OverviewLi = styled.li<any>`
  list-style: none;
  color: #ffffff;
  font-style: normal;
  font-weight: 700;
  font-size: 9px;
  line-height: 10px;
  text-align: start;
  letter-spacing: 1.92857px;
  text-transform: uppercase;
  font-family: ${ThemeData.fonts.spartan};
  opacity: ${(props) => props.opacity};
  width: 100%;
  padding-left: 20px;
  @media (width > 767px){
    font-size: 9px;
line-height: 25px;
letter-spacing: 1.92857px;

  }
  @media (width > 1439px){
font-weight: 700;
font-size: 12px;
line-height: 25px;
letter-spacing: 2.57143px;
  }
`;

const OverviewButton = styled.button<any>`
  background-color: transparent;

  cursor: pointer;
  border: 1px solid #ffffff2f;
  width: 100%;
  margin-bottom: 16px;
  height: 40px;
  text-align: start;
  width: 100%;
  @media (width > 1439px){
    
  }
`;

const ScreenAllDiv = styled.div`
  @media (width > 1439px) {
    display: flex;
  }
`;
