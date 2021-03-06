import React, { useState, useRef, useEffect } from 'react'
import styled, { css } from 'styled-components/macro'
import ConectImgTitle from "./../assets/svg/conecttitle.svg"
import Teamhomeparalaxe1 from "./../assets/svg/teamhomeparalaxe1.svg"
import Teamhomeparalaxe2 from "./../assets/svg/teamhomeparalaxe2.svg"
import HomeTeamparalaxeimg from "./../assets/svg/HomeTeamparalaxeimg.svg"
import { TeamData } from '../data/TeamData';
import ArrowLeftIcon from "./../assets/svg/arowleft.svg"
import ArrowRighthIcon from "./../assets/svg/arowright.svg"
import SectionTitle from "./SectionTitle"
import Slider from "react-slick";
import Oconnect from "./../assets/svg/oconnect.svg"
import TeamInHubSectionIcone from "./../assets/svg/teaminhubsectionicone.svg";
import CarouselCenter from './CarouselCenter'
import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { useTranslation } from 'react-i18next'


const SectionTitletest = styled.div`
  color: #2755A1;
  display: flex;
  justify-content: center;
  position: relative;
  margin: .5vh 0 9vh 0;
h1{
  font-size: 5rem;
  font-weight: bold;
  text-transform: uppercase;
  font-family:"CeraRoundPro-Bold";
}
 img{
 position: absolute;
 width: 95px;
 left: 66vh;
 bottom: -1vh;
}
span{
 color: #95B71D;
}
`;

const TitleInAbout = styled.h1` 
  font-family:"CeraRoundPro-Bold";
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  margin:1.5vh 0 3vh 0;
  color:#2755A1;
  text-align:center;
  margin: .5vh 0 9vh 0;
`;
const TeamSectionContainer = styled.section` 
overflow:hidden;
padding:5rem 0;
height: 100%;
background-color:#EFEFEF;
position: relative;
/* .slick-track{
  display:flex;
align-items:center;
justify-content:space-around;
width:100%;
} */
/* .slick-slider{
position:relative ;
padding: 0 0 31vh 0;
}
.slick-slide{
position:relative ;
}

.slick-slide{
  width:200px !important;
  .teamslider{
  position:relative;
  width:200px !important;
}
  .teamloop{
    border-radius:50%;
background-color:rgba(39,85,161);
background-color:rgba(39,85,161,.77);
width:200px;
height: 200px;
position:absolute;
top:0;
bottom:0;
right:0;
left:0;
} */

 ul {
  padding-bottom: 10vh !important;
 }

.teamslider{
  display: flex;
    justify-content: center; 
.teamimg{
  position:relative;
width:200px;
}
.teamloop{
    border-radius:50%;
background-color:rgba(39,85,161);
background-color:rgba(39,85,161,.77);
width:200px;
height:200px;
position:absolute;
top:0;
bottom:0;
right:0;
left:0;
}
img {
filter: blur(4px);
-webkit-filter: blur(4px);
width:200px;
}
.teaminfo,.teamboder{
  display:none;
}

}

.BrainhubCarouselItem--active > .teamslider{
  /* width:250px ; */
  display:flex;
  width:100%;
justify-content:center;
.teamloop{
  display:none;
}
.teamboder{
  display:block;
  border-radius:50%;
  border:8px solid #95B71D;
width:250px;
height:250px;
position:absolute;
top:0;
bottom:0;
right:0;
left:0;
}


.teamimg{
  position:relative;
width:250px;
}

img{
 width:250px;
 filter: none;
-webkit-filter: none;
}
svg{
  width: calc(100% + 4px);
height: calc(100% + 4px);
position: absolute;
top: -2px;
left: -2px;
-webkit-transform: rotate(-90deg);
transform: rotate(-90deg);

}
.teaminfo{
  display:block;
  position:absolute;
  bottom:-30%;
    text-align:center;
    color:#95B71D;
h1{
 
  font-size:1.6rem;
  margin:1rem 0 .5rem 0;
  font-weight:bold;
}
p{
  font-size:1rem;
}
}
}
`;

const TeamSlide = styled.div` 
display:flex;
align-items:center;
justify-content:space-around;
width:100%;
`;
const TeamSlider = styled.div` 
display:flex;
height:100%;
margin: 8;
justify-content:center;
flex-direction:column;
position:relative;
h1{
  font-size:2rem;
  color:#95B71D;
  margin:1rem 0 .5rem 0;
  font-weight:bold;
}
p{
  font-size:1.5rem;
  color:#95B71D;
}
img {
filter: blur(4px);
-webkit-filter: blur(4px);
width:200px;
}
`;

const TeamSlideractive = styled.div` 
display:flex;
justify-content:center;
flex-direction:column;
position:relative;
text-align:center;
h1{
  font-size:2rem;
  color:#95B71D;
  margin:1rem 0 .5rem 0;
  font-weight:bold;
}
p{
  font-size:1.5rem;
  color:#95B71D;
}
img{
  border:10px solid #95B71D;
 width:300px;
}
`;
const TeamImg = styled.img` 
border-radius:50%;
`;
const SliderButtons = styled.div`
margin-top:13vh;
display:flex;
justify-content:center;
align-items:center;
`;
const arrowButton = css`
cursor:pointer;
z-index:10;
margin-right:1rem;
user-select:none;
transition:0.3s;
&:hover{
transform:scale(1.05);
}
`;

const PrevArrow = styled.img`
${arrowButton}
position:absolute;
bottom: 12%;
left:40%;
width: 60px;
@media (max-width:1199px) {
  bottom: 12%;
left:40%;
width: 50px;
}
@media (max-width:1199px) {
  bottom: 12%;
left:40%;
width: 50px;
}
@media (max-width:991px) {
  bottom: 12%;
left:30%;
width: 50px;
}
@media (max-width:900px) {
  bottom: 12%;
left:30%;
width: 50px;
}
@media (max-width:768px) {
  bottom: 12%;
left:20%;
width: 50px;
}
`;
const NextArrow = styled.img`
${arrowButton}
position:absolute;
bottom: 12%;
right:40%;
width: 60px;
@media (max-width:1199px) {
  bottom: 12%;
right:40%;
width: 50px;
}
@media (max-width:991px) {
  bottom: 12%;
right:30%;
width: 50px;
}
@media (max-width:900px) {
  bottom: 12%;
right:30%;
width: 50px;
}
@media (max-width:768px) {
  bottom: 12%;
right:20%;
width: 50px;
}
/* @media (max-width:500px) {
  display:none;
} */
`;
const TeamImgLoop = styled.div`
border-radius:50%;
background-color:rgba(39,85,161);
background-color:rgba(39,85,161,.77);
width:250px;
height: 250px;
position:absolute;
top:0;
bottom:0;
right:0;
left:0;
`;
const TeamInfo = styled.div`
    position:absolute;
    bottom: -11vh;
    right: 43px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
const TeamhomeparalaxeFirst = styled.img`
display:${({ about, ishub }) => (ishub ==="ishub"? 'none' : about ? 'none' :  'block')};
position:absolute;
top:0;
right:0;
width:220px;
@media (max-width:768px) {
  width: 115px;
}
@media (max-width:500px) {
  display:none;
}
`;

const Hubteamparalaxe = styled.img`
display:${({ about, home }) => (home ? 'none' : about ? 'none' :  'block')};
position:absolute;
top:0;
right:0;
width:220px;
@media (max-width:768px) {
  width: 115px;
}
@media (max-width:500px) {
  display:none;
}
`;
const TeamhomeparalaxeTwo = styled.img`
display:${({ about, ishub }) => (about ? 'none' : ishub ? 'none' : 'block')};
position:absolute;
bottom:0;
left:0;
width:450px;
@media (max-width:768px) {
  width: 115px;
}
@media (max-width:500px) {
  display:none;
}
`;

const HubTeamSectionHead = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
padding:12vh 45vh;
color:#2755A1;
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
    margin: 2.5vh 0 3vh 0;
    @media (max-width:768px){
  font-size: 2rem;
  margin: 2vh 0;
       }
  @media (max-width:360px){
  font-size: 1.8rem;

}
}
p{
}
`;
const TeamInHubSectionIcon = styled.img`
width:100px;
@media (max-width:768px){
width: 80px;
}
`;

function TeamSection({ initialSlide, about, ishub, hub,home,children}) {
  const { t} = useTranslation()

  const [current, setCurrent] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [active, setActive] = useState(0);
  const length = TeamData.length;
  const timeout = useRef(null);
  const [value, setValue] = useState(0);

  const onChange = value => {
  //setValue(value);
  setCurrentIndex(value)
  console.log("onchange" + value)
  }

  const nextSlide = (currentSlide) => {
    if (timeout.current) {
      clearTimeout(timeout.current)
    }
    setCurrent(current === length - 1 ? 0 : current + 1)
    return currentSlide();

  }

  const prevSlide = (currentSlide) => {
    if (timeout.current) {
      clearTimeout(timeout.current)
    }
    setCurrent(current === 0 ? length - 1 : current - 1)
    return currentSlide();

  }

  useEffect(() => {
    setActive((length - (TeamData % length)) % length) // prettier-ignore

  }, [length])

  if (!Array.isArray(TeamData) || TeamData.length <= 0) {
    return null;
  }

  /*  const indexOfLastProducts = currentPage * productsPerPage;
    const indexOfFirstProducts = indexOfLastProducts - productsPerPage;
    const currentProducts = products.slice(
      indexOfFirstProducts,
      indexOfLastProducts
    ); */



  function SampleNextArrow(props) {
    const { currentSlide, onClick } = props;
    console.log("bbb" + currentSlide)

    return (
      <NextArrow
        src={ArrowRighthIcon}
        onClick={() => { nextSlide(onClick); }}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { onClick, currentSlide } = props;
    console.log("bbb" + currentSlide)
    return (
      <PrevArrow
        src={ArrowLeftIcon}
        onClick={() => { prevSlide(onClick); }}
      />
    );
  }
  console.log(active)
  console.log("My" + current)

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,

    slidesToShow: 5,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: 0,
    focusOnSelect: false,
    slide: '<>',


  };
 
  return (
    <TeamSectionContainer>

      {
        ishub ? <HubTeamSectionHead>
          <TeamInHubSectionIcon className="" src={TeamInHubSectionIcone} alt="team Icone" />
          <h1>
            {t('notre')} {t('team')}
              </h1>
          <p>
            {hub.acf.description_team}
          </p>

        </HubTeamSectionHead> :

          about ? <div>
            <img src="" alt="" />
            <SectionTitle><h1>
            {t('notre')} {t('team')}
              </h1></SectionTitle>
          </div> :
            <SectionTitle>
              <h1>
                {t('n')}
            <span className="conectimg">
                  o
              <svg id="Grupo_729" data-name="Grupo 729" xmlns="http://www.w3.org/2000/svg" width="128.639" height="143.869" viewBox="0 0 128.639 143.869">
                    <path id="Caminho_661" data-name="Caminho 661" d="M-430.554,188.391l-17.435,20.484a16.525,16.525,0,0,1,3.358,10.076A16.6,16.6,0,0,1-461.3,235.473a16.594,16.594,0,0,1-16.522-16.666,16.594,16.594,0,0,1,16.668-16.522,16.519,16.519,0,0,1,8.618,2.455l17.52-21.039Z" transform="translate(481.135 -91.604)" fill="#95b71d" />
                    <path id="Caminho_662" data-name="Caminho 662" d="M-431.462,178.8l-21.067-19.376a16.519,16.519,0,0,1-10.7,3.855,16.594,16.594,0,0,1-16.522-16.668,16.594,16.594,0,0,1,16.666-16.522,16.6,16.6,0,0,1,16.522,16.668,16.506,16.506,0,0,1-2.053,7.926l21.737,19.993Z" transform="translate(479.75 -130.087)" fill="#95b71d" />
                    <path id="Caminho_663" data-name="Caminho 663" d="M-405.252,132.127a16.594,16.594,0,0,0-16.666,16.522,16.351,16.351,0,0,0,4.157,11.081l-10.953,13.414a64.927,64.927,0,0,1,6.514,4.568l10.953-13.325a13.261,13.261,0,0,0,5.851.928,16.593,16.593,0,0,0,16.666-16.522,16.594,16.594,0,0,0-16.522-16.666" transform="translate(517.369 -128.623)" fill="#95b71d" />
                  </svg>
                </span>
                {t('tre')} {t('team')}
          </h1>
            </SectionTitle>

      }
      <div style={{ maxWidth: '96%', height: '100%', zIndex: 10, marginLeft: 'auto', marginRight: 'auto', marginTop: 30,marginBottom: "15vh" }}>

        {/* <Slider {...settings}> */}
        <Carousel
          slidesPerPage={5}
          infinite
          centered
          clickToChange
          autoPlay={2000}
        animationSpeed={1000}
        stopAutoPlayOnHover={true}
       
        currentSlideIndex={currentIndex}
        onChange={onChange}
          arrowLeft={<PrevArrow src={ArrowLeftIcon} />
          }
          arrowRight={<NextArrow src={ArrowRighthIcon} />}
          addArrowClickHandler={true}

          offset={16}
          breakpoints={{
            500: {
              slidesPerPage: 1,
            },
            768: {
              slidesPerPage: 2,
            },
            1024: {
              slidesPerPage: 3,
              offset: 0,
            },
            
          }}
        >
          {
            hub.acf.team_member.map((team, index) => (

              <div className="teamslider" key={index}>
                <div className="teamimg">
                  <img src={team.image_team.url} alt={team.name_team} />
               {/*    <svg height="100%" width="100%">"
						<circle class="c1" cx="50%" cy="50%" r="48%" fill="transparent" style={{opacity: "1", strokeDashoffset: "130px", strokeDasharray:' 314px'}}></circle>
					</svg> */}
                  <div className="teamloop"></div>
                  <div className="teamboder"></div>
                </div>
                <div className="teaminfo">
                  <h1>{team.name_team}</h1>
                  <p>{team.poste_team}</p>
                </div>
              </div>
                 

              /* index === current && ( */
              /* currentSlide*/

              /*  index === current ? 
               <TeamSlideractive key={index}>
               <TeamImg src={team.image} alt={team.teamname}/>
               <TeamInfo>
                  <h1>{team.teamname}</h1>
                  <p>{team.poste}</p>
                  </TeamInfo>    
          </TeamSlideractive> : 
                 
             <TeamSlider key={index}>
                  <TeamImg src={team.image} alt={team.teamname}/>                 
                  <TeamImgLoop></TeamImgLoop>                                 
             </TeamSlider> */
              /* ) */
            ))
          }
        </Carousel>
      </div>
      {/* </Slider> */}
      {/*  <SliderButtons>
            <PrevArrow  onClick={prevSlide} src={ArrowLeftIcon}/>
            <NextArrow onClick={nextSlide} src={ArrowRighthIcon}/>
          </SliderButtons> */}
      <Hubteamparalaxe home={home} about={about} src={HomeTeamparalaxeimg} alt="" />
      <TeamhomeparalaxeFirst ishub={ishub} about={about} src={Teamhomeparalaxe1} alt="" />
      <TeamhomeparalaxeTwo ishub={ishub} about={about} src={Teamhomeparalaxe2} alt="" />

    </TeamSectionContainer>
  )
}



export default TeamSection