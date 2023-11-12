import meter1 from '../assets/img/meter1.svg'
import meter2 from '../assets/img/meter2.svg'
import meter3 from '../assets/img/meter3.svg'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import arrow1 from '../assets/img/arrow1.svg'
import arrow2 from '../assets/img/arrow2.svg'
import colorSharp from '../assets/img/color-sharp.png'
import { useRef } from 'react'
import { useState } from 'react'
import defaultimg from '../assets/img/defaultimg.jpg'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import './Slider.css'
import html2pdf from 'html2pdf.js';
import Loader from './Loader'
import { Download } from 'react-bootstrap-icons'

function Generate(props) {
  const choice = props.choice
  const [slideIndex, setSlideIndex] = useState(0)
  const [input, setInput] = useState('astronaut riding a horse')
  const [image10, setIamge10] = useState()
  const [load, setLoad] = useState(false)
  const [start,setStart]=useState(false)
  const [items, setItems] = useState([
    'https://img.freepik.com/premium-photo/purple-astronaut-with-purple-helmet-it_928869-2499.jpg',
    'https://img.freepik.com/premium-photo/purple-astronaut-with-purple-helmet-it_928869-2499.jpg',
    'https://img.freepik.com/premium-photo/purple-astronaut-with-purple-helmet-it_928869-2499.jpg',
    'https://img.freepik.com/premium-photo/purple-astronaut-with-purple-helmet-it_928869-2499.jpg',
    'https://img.freepik.com/premium-photo/purple-astronaut-with-purple-helmet-it_928869-2499.jpg',
    'https://img.freepik.com/premium-photo/purple-astronaut-with-purple-helmet-it_928869-2499.jpg',
    'https://img.freepik.com/premium-photo/purple-astronaut-with-purple-helmet-it_928869-2499.jpg',
    'https://img.freepik.com/premium-photo/purple-astronaut-with-purple-helmet-it_928869-2499.jpg',
    'https://img.freepik.com/premium-photo/purple-astronaut-with-purple-helmet-it_928869-2499.jpg',
    'https://img.freepik.com/premium-photo/purple-astronaut-with-purple-helmet-it_928869-2499.jpg',
  ])
  const [desc,setDesc]=useState(['your description','your description','your description','your description','your description','your description','your description','your description','your description','your description'])
  const [number, setNumber] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  const[currdesc,setCurrdesc]=useState()
  const nextSlide = () => {
    setItems((prevItems) => [...prevItems.slice(1), prevItems[0]])
    setNumber((prevItems) => [...prevItems.slice(1), prevItems[0]])
    setDesc((prevItems) => [...prevItems.slice(1), prevItems[0]])
  }
  const tooltip = (
    <Tooltip id="tooltip-bottom">click to donwload the comic strip that you have created</Tooltip>
  );
  const prevSlide = () => {
    setItems((prevItems) => [
      prevItems[prevItems.length - 1],
      ...prevItems.slice(0, -1),
    ])
    setNumber((prevItems) => [
      prevItems[prevItems.length - 1],
      ...prevItems.slice(0, -1),
    ])
    setDesc((prevItems) => [
      prevItems[prevItems.length - 1],
      ...prevItems.slice(0, -1),
    ])
  }
  const contentRef = useRef(null);
  const downloadpdf=()=>{
    const element = contentRef.current;
    html2pdf(element);
  }
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }
  const inputChange = (e) => {
    setInput(e.target.value)
  }
  const inputDesc=(e)=>{
    setCurrdesc(e.target.value)
  }
  const handlekeydown=(event)=>{
    if(event.key==='Enter'){
      query()
    }
    
  }
  async function query() {
    setLoad(true)
    setStart(true)
    const response = await fetch(
      'https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud',
      {
        headers: {
          Accept: 'image/png',
          Authorization:
            'Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({ inputs: input + 'in the style of' + choice }),
      }
    )
    const result = await response.blob()
    console.log(result)
    let imageurl = URL.createObjectURL(result)
    const newItems = [...items]
    newItems[1] = imageurl
    const newdesc=[...desc]
    newdesc[0]=currdesc
    setDesc(newdesc)
    setLoad(false)
    setItems(newItems)
    return result
  }
  return (
    <section className='skill' id='skills'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='generatecont' >
              <div className='skill-bx wow zoomIn'>
                <h2 style={{ height: '1' }}>Generate your</h2>
                <h1>{props.choice} comics</h1>
                <div className='genprompt'>
                  <div className='inps'>
                  <input
                    className='inp'
                    onChange={inputChange}
                    placeholder={`please write prompt for page ${number[0]}`}
                  />
                  <input
                    className='inp'
                    onChange={inputDesc}
                    placeholder={`please write the description inside of the image in page ${number[0]}`}
                  />
                  </div>
                  
                  <button class='pushable' onClick={query} onKeyDown={handlekeydown}>
                    <span class='shadow'></span>
                    <span class='edge'></span>
                    <span class='front'>Generate</span>
                  </button>
                  <OverlayTrigger placement="bottom" overlay={tooltip}> 
                  <button class='pushable' >
                    <span class='shadow'></span>
                    <span class='edge'></span>
                    <span class='front' onClick={downloadpdf}>Download</span>
                  </button>
                  </OverlayTrigger>
                </div>
                <div className='slidebtns'>
                      <button onClick={prevSlide}className='slidebtnp'>prev</button>
                      <button onClick={nextSlide}className='slidebtnn'>next</button>
                </div>
                <div className='cont'>
                  <div className='slide' >
                    {items.map((item, index) => (
                      <div
                      ref={contentRef}
                        key={index}
                        className='ite'
                        style={{
                          backgroundImage: `url(${
                            load === false
                              ? item
                              : 'https://img.freepik.com/free-photo/abstract-textured-backgound_1258-30707.jpg'
                          })`,
                        }}
                      >
                        {load && <Loader />}
                        <div className='content'>
                          {!load ? (
                            <div>
                              <div className='name'>Page {number[0]}</div>
                              <div>{desc[0]}</div>
                            </div>
                            
                            
                          ) : (
                            <div>loading...</div>
                          )}
                          {!start&&<div className='des'>
                            this is a dummy image which you can replace
                          </div>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className='background-image-left' src={colorSharp} alt='Image' />
    </section>
  )
}

export default Generate
