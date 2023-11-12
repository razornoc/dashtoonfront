import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import anime from '../assets/img/anime.jpeg'
import cartoon from '../assets/img/cartoon.jpg'
import sueprhero from '../assets/img/superhero.jpg'
import { useState } from "react";


function Preference(props) {
  // const clickHandle=()=>{
  //   props.onDataFromChild(true);
  // }
  const Cartoon=()=>{
    props.choiceData("cartoon")
    props.onDataFromChild(true);
  }
  const Anime=()=>{
    props.choiceData("japaneseanimated")
    props.onDataFromChild(true);
  }
  const Superhero=()=>{
    props.choiceData("superhero")
    props.onDataFromChild(true);
  }
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <div>
         <section className="skill" id="skills">
        <div className="container" >
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Pick your poison</h2>
                        <p>chose the style of comic you want to create</p>
                        <div className="pick-style">
                            <div className="pick">
                                superhero comics
                                
                                <button onClick={Superhero} style={{color:'white'}}>
                                <div className="imgcont">
                                <img className="pickimg"src={sueprhero} alt="superhero"></img>
                                </div>
                                
                                </button>
                            </div>
                            <div className="pick">
                                anime/manga
                                
                                <button onClick={Anime} style={{color:'white'}}>
                                <div className="imgcont">
                                <img className="pickimg" src={anime} alt="anime"></img>
                                </div>
                                
                                </button>
                            </div>
                            <div className="pick">
                                cartoon
                                <button onClick={Cartoon} style={{color:'white'}}>
                                    <div className="imgcont">
                                    <img className="pickimg"src={cartoon} alt="cartoon"></img>
                                    </div>
                                
                                </button>
                            </div>
                        </div>
                        {/* <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Brand Identity</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Logo Design</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                        </Carousel> */}
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
    </div>
  )
}

export default Preference