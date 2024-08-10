import './About.css'
import mine from '../../assets/mine.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={mine} alt='' /> 
            </div>
            <div className="about-right">
                <div className="abot-para">
                    <p> Enthusiastic and skilled frontend developer with over 8 years of experience dedicated to creating userfriendly and visually appealing web applications.</p>
                    <p> Proficient in HTML5, CSS3, JavaScript, and modern
frontend frameworks and JavaScript Libraries, I consistently deliver high-quality code and exceptional user experiences.
My expertise extends beyond coding; I possess a strong capability for client handling and requirement
analysis, ensuring that I not only meet but exceed client expectations. </p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"> <p> HTML5 & CSS3 </p> <hr style={{width:"95%"}} /></div>
                    <div className="about-skill"> <p> Javascript </p> <hr style={{width:"60%"}} /></div>
                    <div className="about-skill"> <p> React.js </p> <hr style={{width:"60%"}} /></div>
                    <div className="about-skill"> <p> Next.js </p> <hr style={{width:"50%"}} /></div>
                    <div className="about-skill"> <p> Bootstrap </p> <hr style={{width:"90%"}} /></div>
                </div>
                </div>        
        </div>
        <div className="about-achievments">
                    <div className="about-achievment">
                        <h1> 10+  </h1>
                        <p> Years of Experience </p>
                    </div>
                    <hr />
                    <div className="about-achievment">
                        <h1> 50+ </h1>
                        <p> Projects Completed </p>
                    </div>
                    <hr />
                    <div className="about-achievment">
                        <h1> 15+  </h1>
                        <p> Happy Clients </p>
                    </div>
                </div>
    </div>
  )
}

export default About
