import React from 'react'
import SkillBar from 'react-skillbars'

const Skills = () => {
    const skills = [
        {type: "JavaScript", level: 95},
        {type: "Python", level: 85},
        {type: "Java", level: 85},
        {type: "C++", level: 75},
        {type: "C", level: 75},
        {type: "C#", level: 60}
    ]
    const technology = [
        {type: "ReactJs", level: 90},
        {type: "NodeJs", level: 95},
        {type: "ExpressJs", level: 95},
        {type: "AngularJs", level: 90},
        {type: "AWS", level: 60}
    ]
    const others = [
        {type: "MongoDB", level: 90},
        {type: "MySQL", level: 70},
        {type: "Git", level: 70},
        {type: "Docker", level: 50},
        {type: "Jenkins", level: 50}
    ]
    const color = {
        bar: '#00897b',
        title: {
          text: 'white',
          background: '#00695c'
        }
      }
    return (
        <div id='skills'>
        <div className='center'>
                <h1 className='white-text'>Technical Skills</h1>
        </div>
            <div className='row margin'>
                <h4 className='white-text center'> Languages </h4>
                <SkillBar skills={skills} colors={color}/>
                <div className='col s12 l6'>
                    <h4 className='white-text center'> Web Technologies </h4>
                    <SkillBar skills={technology} colors={color}/>
                </div>
                <div className='col s12 l6'>
                    <h4 className='white-text center'> Databases & Others </h4>
                    <SkillBar skills={others} colors={color}/>
                </div>                
            </div>
        </div>
    )
}

export default Skills
