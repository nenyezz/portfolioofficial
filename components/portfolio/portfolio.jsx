import "./portfolio.css";
import data from "./images/data.png"
import blog from "./images/react blog.png"
import chat from "./images/chat.png"
import quiz from "./images/quiz.png"
import covid from "./images/covid.png"
import fintech from "./images/fintech.png"

const Portfolio = () => {
    return (
        <div>
            <h2 className="ptitle">Portfolio</h2>
            <div className="container">
            <div className="card">
                <div className="card-header">
                <a className="plink" href="https://datastoragechi.netlify.app/"><img src={data} alt="data storage company" /></a>
                </div>
                <div className="card-body">
                    <div className="tags">
                    <span className="tag tag-blue">React</span>
                    <span className="tag tag-red">HTML</span>
                    <span className="tag tag-green">CSS</span>
                    </div>
                <h4 className="name">
                    Delta Homepage
                </h4>
                <p className="pdesc">
                A landing page website for a fictional data storage company using react, react router, hooks and styled components. 
                </p>
                <div className="links">
                <div><button> <a className="plink" href="https://datastoragechi.netlify.app/">View Live</a> </button></div>
                <div><button className="gbutton"> <a className="plink" href="https://github.com/nenyezz/data-storage-company-">Git repo</a> </button></div>
                </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                <a className="plink" href="https://eager-bassi-81a76d.netlify.app/"><img src={fintech} alt="fintech company" /></a>
                </div>
                <div className="card-body">
                <div className="tags">
                    <span className="tag tag-red">HTML</span>
                    <span className="tag tag-green">CSS</span>
                </div>
                <h4 className="name">
                Fintech Company Landing Page
                </h4>
                <p className="pdesc">
                A HTML and CSS landing page for a fintech company, fully responsive and well designed with a contact section.
                </p>
                <div className="links">
                <div><button> <a className="plink" href="https://eager-bassi-81a76d.netlify.app/">View Live</a> </button></div>
                <div><button className="gbutton"> <a className="plink" href="https://github.com/nenyezz/FinTech">Git repo</a> </button></div>
                </div>
                </div>
            </div>
            
            <div className="card">
                <div className="card-header">
                <a className="plink" href="https://elegant-morse-cd374c.netlify.app/"><img src={covid} alt="Covid tracker app" /></a>
                </div>
                <div className="card-body">
                <div className="tags">
                    <span className="tag tag-red">HTML</span>
                    <span className="tag tag-green">CSS</span>
                    <span className="tag tag-blue">React</span>
                    <span className="tag tag-purple">Mat.UI</span>
                    <span className="tag tag-purple">Gra.QL</span>
                </div>
                <h4 className="name">
                    Covid-19 Live Tracker app
                </h4>
                <p className="pdesc">
                    A react application displaying the number of live cases, deaths and recovered cases of covid in every country. Made using React, material UI, CSS, Covid API and Graph Ql for the bar chart.
                </p>
                <div className="links">
                <div><button> <a className="plink" href="https://elegant-morse-cd374c.netlify.app/">View Live</a> </button></div>
                <div><button className="gbutton"> <a className="plink" href="https://github.com/nenyezz/covid-tracker-application">Git repo</a> </button></div>
                </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                <a className="plink" href="https://wonderful-kepler-82522f.netlify.app/"><img src={chat} alt="chat application" /></a>
                </div>
                <div className="card-body">
                <div className="tags">
                    <span className="tag tag-blue">React</span>
                    <span className="tag tag-red">HTML</span>
                    <span className="tag tag-green">CSS</span>
                </div>
                <h4 className="name">
                    React Chat Application
                </h4>
                <p className="pdesc">
                    A chat app made using React chat engine API, react, styled components and CSS. A guide on how to log in is on the github readme.
                </p>
                <div className="links">
                <div><button> <a className="plink" href="https://wonderful-kepler-82522f.netlify.app/">View Live</a> </button></div>
                <div><button className="gbutton"> <a className="plink" href="https://github.com/nenyezz/react-chat-app">Git repo</a> </button></div>
                </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                <a className="plink" href="https://chiquizapp.netlify.app/"><img src={quiz} alt="quiz app" /></a>
                </div>
                <div className="card-body">
                <div className="tags">
                    <span className="tag tag-red">HTML</span>
                    <span className="tag tag-green">CSS</span>
                    <span className="tag tag-teal">JavaScript</span>
                </div>
                <h4 className="name">
                    Quiz Application
                </h4>
                <p className="pdesc">
                    A quiz application made with HTML, CSS and JavaScript with a timer for each question, immediate feedback on right or wrong answers and success page on completion.
                </p>
                <div className="links">
                <div><button> <a className="plink" href="https://chiquizapp.netlify.app/">View Live</a> </button></div>
                <div><button className="gbutton"> <a className="plink" href="https://github.com/nenyezz/quiz-app">Git repo</a> </button></div>
                </div>
                </div>
            </div>
                
            <div className="card">
                <div className="card-header">
                <a className="plink" href="https://materialuiblog.netlify.app/"><img src={blog} alt="react blog" /></a>
                </div>
                <div className="card-body">
                <div className="tags">
                    <span className="tag tag-blue">React</span>
                    <span className="tag tag-red">HTML</span>
                    <span className="tag tag-purple">Material UI</span>
                </div>
                <h4 className="name">
                   React Blog Website
                </h4>
                <p className="pdesc">
                    A blog website made using React and Material UI library with icons, cards and pagination.
                </p>
                <div className="links">
                <div><button> <a className="plink" href="https://materialuiblog.netlify.app/">View Live</a> </button></div>
                <div><button className="gbutton"> <a className="plink" href="https://github.com/nenyezz/material-ui-blog">Git repo</a> </button></div>
                </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Portfolio;


