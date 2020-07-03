import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import resume from '../../resource/Nihar Darji.pdf'

const Navbar = () => {
    return (
        <div className="navbar-fixed">
            <nav className="grey darken-4">
                <a href="#!" data-target="mobile-nav" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                <div className="nav-wrapper">
                <ul>
                    <li className='right'><a href="https://www.linkedin.com/in/nihar2317/" target='_blank' rel="noopener noreferrer" className=" white-text"><i className="fa fa-linkedin small" aria-hidden="true"></i></a></li>
                    <li className='right'><a href="https://github.com/nihardarji" target='_blank' rel="noopener noreferrer" className=" white-text"><i className="fa fa-github small" aria-hidden="true"></i></a></li>
                </ul>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li><Link to='#about' scroll={el => el.scrollIntoView({behavior:'smooth', block: 'start'})}>About</Link></li>
                        <li><Link to='#education' scroll={el => el.scrollIntoView({behavior:'smooth', block: 'start'})}>Education</Link></li>
                        <li><Link to='#experience' scroll={el => el.scrollIntoView({behavior:'smooth', block: 'start'})}>Experience</Link></li>
                        <li><Link to='#projects' scroll={el => el.scrollIntoView({behavior:'smooth', block: 'start'})}>Projects</Link></li>
                        <li><Link to='#skills' scroll={el => el.scrollIntoView({behavior:'smooth', block: 'start'})}>Technical Skills</Link></li>
                        <li><Link to='#certifications' scroll={el => el.scrollIntoView({behavior:'smooth', block: 'start'})}> Certifications</Link></li>
                        <li><Link to='#contact' scroll={el => el.scrollIntoView({behavior:'smooth', block: 'start'})}> Contact</Link></li>
                        <li><a href={resume} target='_blank' rel="noopener noreferrer">Resume</a></li>
                    </ul>
                </div>
            </nav>
            <ul className="sidenav" id="mobile-nav">
                <li><Link to='#about' scroll={el => el.scrollIntoView({behavior:'smooth', block: 'start'})}>About</Link></li>
                <li><Link to='#experience' scroll={el => el.scrollIntoView({behavior:'smooth', block: 'start'})}>Experience</Link></li>
                <li><Link to='#projects' scroll={el => el.scrollIntoView({behavior:'smooth', block: 'start'})}>Projects</Link></li>
                <li><Link to='#skills' scroll={el => el.scrollIntoView({behavior:'smooth', block: 'start'})}>Technical Skills</Link></li>
                <li><Link to='#certifications' scroll={el => el.scrollIntoView({behavior:'smooth', block: 'start'})}> Certifications</Link></li>
                <li><Link to='#contact' scroll={el => el.scrollIntoView({behavior:'smooth', block: 'start'})}> Contact</Link></li>
            </ul>
        </div>
    )
}

export default Navbar
