import React from 'react';
import './techstack.css';
import { FaReact } from 'react-icons/fa';
import { SiRedux, SiJavascript, SiRubyonrails, SiHtml5, SiCss3, SiPostgresql, SiHeroku, SiSqlite, SiWebpack, SiJquery, SiGit, SiAmazonaws } from 'react-icons/si';
import { DiRuby, DiMongodb } from 'react-icons/di';
import scss from '../../assets/scss.png';
import mongoose from '../../assets/mongoose.png';
import express from '../../assets/express.png';
import sql from '../../assets/sql.jpeg';

const TechStack = () => {
  return (
    <section id="techstack">
      <h5>My Skills</h5>
      <h2>Tech Stack</h2>

      <div className="tech__container">
        <div className="tech">
          <div className="React">
            <div className="React-icon"><FaReact size={50}/></div>
            <span>React</span>
          </div>
          <div className="Redux">
            <div className="Redux-icon"><SiRedux size={50}/></div>
            <span>Redux</span>
          </div>
          <div className="Javascript">
            <div className="Javascript-icon"><SiJavascript size={50}/></div>
            <div className="white-div"></div>
            <span>Javascript</span>
          </div>  
          <div className="Rails">
            <div className="Rails-icon"><SiRubyonrails size={80}/></div>
            <span>Rails</span>
          </div>
        </div>
        <div className="tech">
          <div className="HTML5">
            <div className="HTML5-icon"><SiHtml5 size={40}/></div>
            <span>HTML5</span>
          </div>
          <div className="CSS3">
            <div className="CSS3-icon"><SiCss3 size={40}/></div>
            <span>CSS3</span>
          </div>
          <div className="Ruby">
            <div className="Ruby-icon"><DiRuby size={40}/></div>
            <span>Ruby</span>
          </div>  
          <div className="SCSS">
            <img className="SCSS-icon" src={scss} alt="scss icon"/>
            <span>SCSS</span>
          </div>
        </div>
        <div className="tech">
          <div className="MongoDB">
            <div className="MongoDB-icon"><DiMongodb size={50}/></div>
            <span>MongoDB</span>
          </div>
          <div className="Mongoose">
            <img className="Mongoose-icon" src={mongoose} alt="mongoose icon"/>
            <span>Mongoose</span>
          </div>
          <div className="ExpressJS">
            <img className="Express-icon" src={express} alt="express icon"/>
            <span>ExpressJS</span>
          </div>  
          <div className="PostgreSQL">
            <div className="PostgreSQL-icon"><SiPostgresql size={50}/></div>
            <span>PostgreSQL</span>
          </div>
        </div>
        <div className="tech">
          <div className="Heroku">
            <div className="Heroku-icon"><SiHeroku size={50}/></div>
            <span>Heroku</span>
          </div>
          <div className="SQL">
            <img className="SQL-icon" src={sql} alt="sql icon"/>
            <span>SQL</span>
          </div>
          <div className="SQLite3">
            <div className="SQLite3-icon"><SiSqlite size={50}/></div>
            <span>SQLite3</span>
          </div>  
          <div className="Webpack">
            <div className="Webpack-icon"><SiWebpack size={50}/></div>
            <span>Webpack</span>
          </div>
        </div>
        <div className="tech">
          <div className="jQuery">
            <div className="jQuery-icon"><SiJquery size={50}/></div>
            <span>jQuery</span>
          </div>
          <div className="Git">
            <div className="Git-icon"><SiGit size={50}/></div>
            <span>Git</span>
          </div>
          <div className="AWS">
            <div className="AWS-icon"><SiAmazonaws size={50}/></div>
            <div className="white-div"></div>
            <span>AWS</span>      
          </div>  
          <div className="none">
          </div>
        </div>
      </div>

    </section>
  )
}

export default TechStack;