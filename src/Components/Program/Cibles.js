import React, { useContext } from 'react'
import styled from 'styled-components/';
import Cibleparalaximgtop from "./../../assets/svg/cibleparalaximgtop.svg";
import Cibleparalaximgbottom from "./../../assets/svg/cibleparalaximgbottom.svg";
import CibleIcone from "./../../assets/svg/Cibleicone.svg";
import parse from "html-react-parser";
import { CurrentLangContext } from '../../Context/CurrentLangContext';




const CibleSection = styled.div `
background-color:#FFFFFF;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
color:#2755A1;
text-align:center;
padding:12vh 30vh;
position:relative;
@media (max-width:900px){
  padding:12vh 20vh;

}
@media (max-width:768px){
  padding:12vh 10vh;

}
@media (max-width:360px){
  padding:12vh 4vh;

}

h1{
  font-family:"CeraRoundPro-Bold";
  font-size: 3rem;
    font-weight: bold;
    text-transform: uppercase;
    margin: 2.5vh 0 1vh 0;
       @media (max-width:768px){
  font-size: 2rem;
  margin: 2vh 0;
       }
  @media (max-width:360px){
  font-size: 1.8rem;

}
}
.cibleslistes ul li{
  margin-top:1rem;
}

`;


const CibleparalaxImgtop = styled.img `
position:absolute;
top: 0;
left: 0;
width: 310px;
@media (max-width:900px){
width: 201px;
}
@media (max-width:500px){
width: 190px;
}

`;
const CibleparalaxImgbottom = styled.img `
position:absolute;
bottom: 0;
right:0;
width: 200px;
@media (max-width:768px){
width: 150px;
}

`;
const CibleVisionMissionIcon = styled.img `

width: 100px;
@media (max-width:768px){
width: 80px;

}
`;


function Cibles({program}) {
  const value = useContext(CurrentLangContext);
  const {currentLang} = value

  return (
    
      <CibleSection>
      <CibleparalaxImgtop src={Cibleparalaximgtop} alt=""/>
        <CibleparalaxImgbottom src={Cibleparalaximgbottom} alt=""/>
        <CibleVisionMissionIcon className="" src={CibleIcone} alt="Historic icon" />
        <h1>
  {currentLang=== "en" ?"targets":"cibles"}

        
       </h1>
       <div className="cibleslistes">
        {
          parse(program.acf.les_cibles_du_programmes)
        }
        </div>
      </CibleSection>
  )
} 

export default Cibles