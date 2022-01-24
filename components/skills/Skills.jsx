import HTML from './img/icons8-html-5.svg';
import CSS from './img/icons8-css3.svg';
import Javascript from './img/icons8-javascript (1).svg';
import React from './img/icons8-react-native.svg';
import Mui from './img/icons8-material-ui.svg';
import Git from './img/icons8-github.svg';
import Xd from './img/icons8-adobe-xd.svg';
import Graph from './img/graphql.svg';
import Node from './img/nodejs-icon.svg';
import "./skills.css";

export const Skills = () => {
    return (
        <div className="skills">
        <h4 className="skill-header">My skills</h4>
        <div className="skill-wrapper">
            <img src={HTML} alt="html icon" loading="lazy" className="icon"/>
            <img src={CSS} alt="css icon" loading="lazy" className="icon"/>
            <img src={Javascript} alt="Javascript icon" loading="lazy" className="icon"/>
            <img src={React} alt="react icon" loading="lazy" className="icon"/>
            <img src={Mui} alt="material ui icon" loading="lazy" className="icon"/>
            <img src={Git} alt="github icon" loading="lazy" className="icon"/>
            <img src={Xd} alt="adobe xd icon" loading="lazy" className="icon"/>
            <img src={Graph} alt="adobe xd icon" loading="lazy" className="icon"/>
            <img src={Node} alt="adobe xd icon" loading="lazy" className="icon"/>
        </div>
    </div>
    );
}
