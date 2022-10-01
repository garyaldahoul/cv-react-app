import React from "react";
import { Icon } from 'semantic-ui-react'

const Skills =()=>{

    return(
        <>
        <section id="skills-section">
            <h2>SKILLS</h2>
            <div className="sillsItem">
            <div>HTML</div>
            <i className="circle outline big icon"></i>
            <Icon.Group size='huge'>
    <Icon size='big' name='circle outline' />
    <Icon name='user' />
  </Icon.Group>
            <div>

           
            <span><i className="fas fa-circle"></i></span>
            <span><i className="fas fa-circle"></i></span>
           <span> <i className="fas fa-circle"></i></span>
           <span> <i className="fas fa-circle"></i></span>
          <span> <i className="far fa-circle"></i></span>
            </div>
          </div>
          <div className="sillsItem">
            <div>CSS</div>
            <div>
            <span><i className="fas fa-circle"></i></span>
            <span><i className="fas fa-circle"></i></span>
            <span><i className="fas fa-circle"></i></span>
            <span><i className="fas fa-circle"></i></span>
            <span><i className="far fa-circle"></i></span>
            </div>
          </div>
          <div className="sillsItem">
            <div>JavaScript</div>
            <div>
            <span><i className="fas fa-circle"></i></span>
            <span><i className="fas fa-circle"></i></span>
            <span><i className="fas fa-circle"></i></span>
            <span><i className="fas fa-circle"></i></span>
            <span><i className="far fa-circle"></i></span>
          </div>
          </div>
          <div className="sillsItem">
          <div>React</div>
            <div>
                <span><i className="fas fa-circle"></i></span>
                <span><i className="fas fa-circle"></i></span>
                <span><i className="fas fa-circle"></i></span>
                <span><i className="fas fa-circle"></i></span>
                <span><i className="far fa-circle"></i></span>
          </div>
          </div>
          <div className="sillsItem">
            <div>C#</div>
          <div>
          <span><i className="fas fa-circle"></i></span>
          <span><i className="fas fa-circle"></i></span>
          <span><i className="far fa-circle"></i></span>
          <span><i className="far fa-circle"></i></span>
          <span><i className="far fa-circle"></i></span>
          </div>
        </div>
          <div className="sillsItem">
            <div>PHP</div>
            <div>
            <span><i className="fas fa-circle"></i></span>
            <span><i className="far fa-circle"></i></span>
            <span><i className="far fa-circle"></i></span>
            <span><i className="far fa-circle"></i></span>
            <span><i className="far fa-circle"></i></span>
          </div>
          </div>
          
        </section>
        </>
    )
}

export default Skills;