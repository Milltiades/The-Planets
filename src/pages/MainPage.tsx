import React, { useContext, useEffect } from 'react'
import styled from 'styled-components';
import { MyContext } from '../App';
import { ThemeData } from '../components/ThemeComponent';
import PlanetSummary from './PlanetSummary';


 
export default function MainPage() {

 

const context = useContext<any>(MyContext);

// useEffect(() => {
//   if(context.indexP == 0){

//   }

// },[context.indexP])
    
  return (
    <MainContent>
        <Overview>
          <OverviewButton
          style={{ borderBottom : context.isClicked1 ?
             context.indexP == 0 ? '4px solid #419EBB' : 
             context.indexP == 1 ? `4px solid  ${ThemeData.colors.venus}` :
             context.indexP == 2 ? `4px solid  ${ThemeData.colors.earth}` :
             context.indexP == 3 ? `4px solid  ${ThemeData.colors.mars}` :
             context.indexP == 4 ? `4px solid  ${ThemeData.colors.jupiter}` :
             context.indexP == 5 ? `4px solid  ${ThemeData.colors.saturn}` :
             context.indexP == 6 ? `4px solid  ${ThemeData.colors.uranus}` :
             context.indexP == 7 ? `4px solid  ${ThemeData.colors.neptune}` :
              null :
              null, paddingBottom :context.isClicked1? '16px' : '20px'}}
            onClick={() => {
              context.setIsActive1("1");
              context.setPlanetImg(true);
              context.setIsOpacity(false);
              context.setIsClicked1(true);
              context.setIsClicked2(false);
              context.setIsClicked3(false);
              context.setIsActive2("0.5");
              context.setIsActive3("0.5");

            }
          }
           
          >
            <OverviewLi opacity={context.isActive1}>OVERVIEW</OverviewLi>
          </OverviewButton>
          <OverviewButton
            style={{ borderBottom : context.isClicked2 ?
              context.indexP == 0 ? '4px solid #419EBB' : 
              context.indexP == 1 ? `4px solid  ${ThemeData.colors.venus}` :
              context.indexP == 2 ? `4px solid  ${ThemeData.colors.earth}` :
              context.indexP == 3 ? `4px solid  ${ThemeData.colors.mars}` :
              context.indexP == 4 ? `4px solid  ${ThemeData.colors.jupiter}` :
              context.indexP == 5 ? `4px solid  ${ThemeData.colors.saturn}` :
              context.indexP == 6 ? `4px solid  ${ThemeData.colors.uranus}` :
              context.indexP == 7 ? `4px solid  ${ThemeData.colors.neptune}` :
               null :
               null, paddingBottom :context.isClicked2? '16px' : '20px'}}
            onClick={() => {
              context.setIsActive2("1");
              context.setPlanetImg(false);
              context.setIsOpacity(false);
              context.setIsClicked2(true);
              context.setIsClicked1(false);
              context.setIsClicked3(false);
              context.setIsActive1("0.5");
              context.setIsActive3("0.5");
            }}
           
          >
            <OverviewLi opacity={context.isActive2}>Structure</OverviewLi>
          </OverviewButton>
          <OverviewButton
            style={{ borderBottom : context.isClicked3 ?
              context.indexP == 0 ? '4px solid #419EBB' : 
              context.indexP == 1 ? `4px solid  ${ThemeData.colors.venus}` :
              context.indexP == 2 ? `4px solid  ${ThemeData.colors.earth}` :
              context.indexP == 3 ? `4px solid  ${ThemeData.colors.mars}` :
              context.indexP == 4 ? `4px solid  ${ThemeData.colors.jupiter}` :
              context.indexP == 5 ? `4px solid  ${ThemeData.colors.saturn}` :
              context.indexP == 6 ? `4px solid  ${ThemeData.colors.uranus}` :
              context.indexP == 7 ? `4px solid  ${ThemeData.colors.neptune}` :
               null :
               null, paddingBottom :context.isClicked3? '16px' : '20px'}}
            onClick={() => {
              context.setIsActive3("1");
              context.setPlanetImg(true);
              context.setIsOpacity(true);
              context.setIsClicked3(true);
              context.setIsClicked2(false);
              context.setIsClicked1(false);
              context.setIsActive2("0.5");
              context.setIsActive1("0.5");
              
            }}
           
          >
            <OverviewLi opacity={context.isActive3}>Surface</OverviewLi>
          </OverviewButton>
        </Overview>
        <PlanetSummary/>
        
      </MainContent>
  )
}



const MainContent = styled.div`
  width: 100%;
  /* border: 1px dashed yellow; */
  display: block;
`;

const Overview = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ffffff2f;
  padding-left: 24px;
  padding-right: 24px;
  @media (width > 767px){
    display: none;
  }
`;
const OverviewLi = styled.li<any>`
  list-style: none;
  color: #ffffff;
  font-style: normal;
  font-weight: 700;
  font-size: 9px;
  line-height: 10px;
  text-align: center;
  letter-spacing: 1.92857px;
  text-transform: uppercase;
  font-family: ${ThemeData.fonts.spartan};
  opacity: ${(props) => props.opacity};
`;

const OverviewButton = styled.button<any>`
  background-color: transparent;
  border: none;
  padding-top: 20px;
  padding-bottom: 20px;
  cursor: pointer;
`;

