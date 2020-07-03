import React from 'react'
import Typewriter from 'typewriter-effect'
import Typist from 'react-typist'

const About = () => {
    return (
        <div id='about' className="container">
            <div className='valign-wrapper'>
                <h1 className='white-text'> <b>Nihar Darji</b> </h1>
            </div>
            
            <div className='valign-wrapper'>
                <h4 className='white-text'>
                    <Typewriter
                        options={{
                            strings: ['Software Developer', 'Full Stack Web Developer'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h4>
            </div>
            <div className='white-text valign-wrapper'>
                <h6>
                    <Typist>
                        Hi...!!! <br/>
                        I'm a Computer Science Graduate Student from Illinois Institute of Technology, Chicago.<br/>
                        I have worked as a Full stack Web Developer.<br/>
                        Keen and enthusiastic to seek and apply my knowledge in a challenging environment which will help me to explore my potential.
                    </Typist>
                </h6>
            </div>       
        </div>
    )
}

export default About
