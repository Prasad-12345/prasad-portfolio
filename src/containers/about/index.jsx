import React from 'react'
import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeaderContent from '../../components/pageHeaderContent'
import './style.scss'
import { SiLaravel, SiReact, SiMysql, SiPostman } from 'react-icons/si';

const personalDetails = [
  {
    label : "Name",
    value : "Prasad Somvanshi"
  },
  {
    label : "Email",
    value : "prasadsomvanshi471@gmail.com"
  },
  {
    label : "Contact No.",
    value : "7798718310"
  }
]

const jobSummary = "Full Stack Developer with 2.8 years of hands-on experience in React.js and Laravel. Skilled in building scalable, efficient, and user-centric web applications. Known for quick learning, strong problem-solving abilities, and a proactive approach to development challenges. Passionate about leveraging modern technologies to drive both personal growth and organizational success. Always eager to explore and adopt new tools and frameworks to enhance productivity and performance.";

function About() {
  return (
    <section id='about' className='about'>
      <PageHeaderContent herderText="About Me" icon={<BsInfoCircleFill size={40}/>}/>
      <div className='about_content'>
        <div className="about_content_personal_wrapper">
          <h3>FullStack Developer</h3>
          <p>{jobSummary}</p>
          <h3 className='personal_information_header_text'>Personal Information</h3>
          <ul>
            {
              personalDetails.map((item, index) => (
                <li key={index}>
                  <span className='title'>{item.label} :</span>
                  <span className='value'>{item.value}</span>
                </li>
              ))
            }
          </ul>
        </div>
        <div className='about_content_services_wrapper'>
          <div className='about_content_services_wrapper_inner_content'>
            <div>
              <SiReact size={60} color='var(--yellow-theme-main-color)'/>
            </div>
            <div>
              <SiLaravel size={60} color='var(--yellow-theme-main-color)'/>
            </div>
            <div>
              <SiMysql size={60} color='var(--yellow-theme-main-color)'/>
            </div>
            <div>
              <SiPostman size={60} color='var(--yellow-theme-main-color)'/>
            </div>
          </div>
            
        </div>
      </div>
    </section>
  )
}

export default About
