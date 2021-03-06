import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
@import url('https://fonts.googleapis.com/css2?family=Montserrat');

@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates');


  @font-face {
    font-family: 'CeraRoundPro-Bold';
    src: url('CeraRoundPro-Bold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
    
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family:'Montserrat Alternates',sans-serif; 
  scrollbar-color: #454a4d #202324;
}


 svg:hover path {
 background-color: #fff;
}


body,html {
  
  
  font-family:"Montserrat Alternates" , "CeraRoundPro-Bold", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* align-items: center; */
  /* background-color: #fff; */
  /* overflow: hidden; */
}

a{
  text-decoration: none;
  
}

.homesectiontitle {
  color: #2755A1;
  display: flex;
  justify-content: center;
  position: relative;
  margin: .5vh 0 9vh 0;
}
.homesectiontitle h1{
  font-size: 5rem;
  font-weight: bold;
  text-transform: uppercase;
}
.homesectiontitle img{
 position: absolute;
 width: 95px;
left: 51vh;
bottom: -1vh;

}
.homesectiontitle span{
 color: #95B71D;
}

.App{
  display: flex;
  flex-direction: column;
}

.cls-2 *{
  fill: #2755a1;
}
.cls-2:hover *{
  fill: #fff;
}

/* Alert */
.loadingg {
  width: 100%;
  background-color: #202324;
  height: 100vh;
  z-index: 999;
}
.loading {
  display: block !important;
  padding: 1rem;
}
.success {
  color: #20a020;
}
.danger {
  color: #a02020;
}
.alert {
  padding: 1rem;
  border: 0.1rem solid transparent;
  border-radius: 0.5rem;
}
.alert-info {
  color: #2020a0;
  background-color: #e0e0ff;
}
.alert-danger {
  color: #a02020;
  background-color: #ffe0e0;
}
.alert-success {
  color: #20a020;
  background-color: #eeffe0;
}



/* Animations */
@keyframes slideInFromLeft {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(0);
  }
}

@keyframes slideInFromRight {
  0% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(0);
  }
}

@keyframes slideInFromTop {
  0% {
    transform: translateY(-100%);
  }

  100% {
    transform: translateX(0);
  }
}

@keyframes slideInFromBottom {
  0% {
    transform: translateY(100%);
  }

  100% {
    transform: translateX(0);
  }
}

/* Define css class for global loading message to cover 
   screen during axios operations */

   .loading-indicator:before {
    content: '';
    background: #000000cc;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
}

.loading-indicator:after {
    content: 'Chargement...';
    position: fixed;
    width: 100%;
    top: 50%;
    left: 0;
    z-index: 1001;
    color:white;
    text-align:center;
    font-weight:bold;
    font-size:1.5rem;        
}

`