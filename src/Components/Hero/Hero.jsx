import './Hero.css'
import image from '../../assets/mine.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className="hero">
        <img src={image} alt="Mine" />
        <h1> <span>I am Aiswarya,</span><br/> frontend developer based in UAE </h1>
        <p> Enthusiastic and skilled frontend developer with over 8 years of experience dedicated to creating userfriendly and visually appealing web applications.    </p>
        <div className="hero-action">
            <div className="hero-connect">
              <AnchorLink className='anchor-link' offset={50} href='#contact'> Connect With Me </AnchorLink>
            </div>
            <div className="hero-resume">
                My Resume
            </div>
        </div>
    </div>
  )
}

export default Hero
