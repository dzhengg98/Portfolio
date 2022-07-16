import React from 'react';
import './about.css';
// import ME from '../../assets/ME.png';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

        <div className="about__content">
          <article className="about-article-1">
            <p className="about-paragraph">I am a software engineer that loves solving problems my own way. I have a creative mindset and programming provides me the path to exercise my imaginative and clever ideas. The idea that we can start from nothing and build a beautiful application from scratch is one of my favorite things about programming.</p>
          </article>
          <article className="about-article-2">
            <p className="about-paragraph">I am experienced in a wide range of technologies across the full stack including <span>React</span>, <span>Javascript</span>, <span>Rails</span>, <span>Ruby on Rails</span>, <span>Express</span>, <span>Node</span>, <span>MongoDB</span> and <span>PostgreSQL</span>. I love learning new technologies and diving into unique challenges and projects. I am constantly looking to expand my skills and always eager to pick up new technologies quickly.</p>
          </article>
          <article className="about-article-2">
            <p className="about-paragraph">Discovering new food is one of my passions. When I have some free time, I like to travel around New York City and experience and discover new food I have never tried before. One of the greatest things about New York is there is always new places with amazing food ready to be discovered.  Additionally, I also love to travel around the world and play/watch basketball.</p>
          </article>
        </div>

        <a href="#contact" className="btn btn-primary">Let's Chat</a>
      </div>
    </section>
  )
}

export default About;