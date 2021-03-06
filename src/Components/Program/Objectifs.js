import React, { useContext } from 'react'
import styled from 'styled-components/';
import Objectifssvg from "./../../assets/svg/objectifssvg.svg";
import parse from "html-react-parser";
import Objectifsparalaximgtop from "./../../assets/svg/Objectifsparalaximgtop.svg";
import Objectifsparalaximgbottom from "./../../assets/svg/Objectifsparalaximgbottom.svg";
import { CurrentLangContext } from '../../Context/CurrentLangContext';



const ObjectifsSections = styled.section`
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

p {
margin: 0 0 2.5vh 0;
@media (max-width:360px){
  font-size: 0.8rem;

}
}

h3{
  margin:3vh;
}
.Objectiftitle{
  font-family:"CeraRoundPro-Bold";
  font-size: 3rem;
    font-weight: bold;
    text-transform: uppercase;
    margin: 2.5vh 0 3vh 0;
    @media (max-width:768px){
  font-size: 2rem;
  margin: 2vh 0;
  @media (max-width:360px){
  font-size: 1.8rem;

}

}
}

`;
const ObjectifsTitle = styled.h1`
background-color:#95B71D;
border-radius:20px;
padding:0.8rem 1rem;
color:#fff;
font-size: 1.7rem;
text-transform: uppercase;
margin: 2.5vh 0 3vh 0;
font-family:"CeraRoundPro-Bold";
@media (max-width:768px){
  font-size: 1rem;

}
@media (max-width:360px){
  font-size: 0.9rem;

}


`;
const Objectifsparalaxtop = styled.img `
position:absolute;
top:0;
left:0;
width: 399px;
@media (max-width:768px){
width: 200px;
}
@media (max-width:500px){
width: 190px;
}
`;
const Objectifsparalaxbottom = styled.img `
position:absolute;
bottom:0;
right:0;
width: 248px;
@media (max-width:768px){
width: 150px;
}
`;
const ObjectifsIcone = styled.img `
width: 100px;
@media (max-width:768px){
width: 80px;

}
`;


function Objectifs({program}) {
  const value = useContext(CurrentLangContext);
  const {currentLang} = value
  
  return (
    <ObjectifsSections>
      <Objectifsparalaxtop src={Objectifsparalaximgtop} alt=""/>
      <Objectifsparalaxbottom src={Objectifsparalaximgbottom} alt=""/>
      <ObjectifsIcone src={Objectifssvg} alt=""/>
      <h1 className="Objectiftitle">
      {currentLang=== "en" ?"Goals":"objEctifs"}
      </h1>
      <ObjectifsTitle>
      {currentLang=== "en" ?"GLOBAL Goals":"objectif GLOBAL"}

      </ObjectifsTitle>
      {parse(program.acf.objectif_global)}

      <ObjectifsTitle>
      {currentLang=== "en" ?"Specific objectives":"objectifs sp??cifiques"}
           
      </ObjectifsTitle>
      <h3>
      {currentLang=== "en" ?"The specific objectives associated with the program are:":"Les objectifs sp??cifiques associ??s au programme sont : "}

      </h3>
      
      {parse(program.acf.objectif_specifiques)}



    </ObjectifsSections>
  )
}

export default Objectifs
