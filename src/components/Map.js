import { useState } from "react";
import './css/Cards.css'
import Map1 from './img/maps/Chapter1S1.webp'
import Map2 from './img/maps/Chapter1S4.webp'
import Map3 from './img/maps/Chapter1S7.webp'
import Map4 from './img/maps/dddd.webp'
import Map5 from './img/maps/Chapter4S1.webp'




function Map() { 

const [source, setSource] = useState(Map1);
const [text, setText] = useState("Chapter 1 Season 1")

function handleClickOne() {
  setSource(Map1);
  setText("Chapter 1 Season 1")
}
function handleClickTwo() {
  setSource(Map2);
  setText("Chapter 1 Season 4")

}
function handleClickThree() {
  setSource(Map3);
  setText("Chapter 1 Season 7")

}
function handleClickFour() {
  setSource(Map4);
  setText("Chapter 2 Season 8")

}
function handleClickFive() {
  setSource(Map5);
  setText("Chapter 4 Season 1")

}
return (
  <div className="App-map">


    <div className='contents-map'>

    <div className="buttoncontainer">
      <button className="button1"  onClick={handleClickOne}>Map 1</button>
      <button className="button2" onClick={handleClickTwo}>Map 2</button>
      <button className="button3" onClick={handleClickThree}>Map 3 </button>
      <button className="button4" onClick={handleClickFour}>Map 4 </button>
      <button className="button4" onClick={handleClickFive}>Map 5 </button>
    </div>

      <img className= 'imgstyle' src = {source} alt= "hello"/>
      

    <div className="textCont"></div>
      <h1 className="texto">{text}</h1>
  

    </div> 
  </div>
);
}

export default Map;