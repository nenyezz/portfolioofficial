import "./about.css";
import Me2 from './images/me22.jpg';

const About = () => {
    return (
        <div>
            <div className="a">
                <div className="a-left">
                    <div className="a-card bg"></div>
                    <div className="a-card">
                        <img src={Me2} alt="photo of chinenye obasi" className="a-img" />
                    </div>
                </div>
                <div className="a-right">
                    <div className="txt-ctc">
                    <h1 className="title">About Me</h1>
                    <b className="a-sub">
                        <p> As a front end developer, I have a passion for developing and creating modern websites and features. </p>
                    </b><br />
                    <b className="a-desc">
                    <p> As a self taught developer, Although I have my bachelor's degree in Mechanical Engineering, from the moment I wrote my first "Hello World", I've been passionate about web development and bringing designs to life with coding. I am versatile, I write clean code, I can multitask and learn quickly and I'm looking for the right opportunity to help me progress into a full stack role. </p> <br />
                    I develop functional, mobile-based, usable web applications with a combination of mark-up languages like HTML, CSS, SCSS, JavaScript, ReactJs, NextJs, ExpressJs, VueJs, Bootstrap, MaterializeCSS, Material UI and GraphQL. 
                    </b>
                    </div>
                    
                    <button className="ccb" ><a className="alink" href="https://drive.google.com/file/d/17v5fKZFH88zbPIsTGdm4IPTYm2zRK3Nk/view?usp=drivesdk">Resume</a></button>
                </div>
            </div>
        </div>
    )
}

export default About
