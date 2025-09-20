import React from 'react'
import PageHeaderContent from '../../components/pageHeaderContent'
import { BsInfoCircleFill } from 'react-icons/bs'
import { skillsData } from './utils'
import { Line } from 'rc-progress'
import './style.scss'

function Skills() {
  return (
    <section id='skills' className='skills'>
      <PageHeaderContent herderText="My Skills" icon={<BsInfoCircleFill size={40}/>}/>
      <div className="skills_content_wrapper">
        {
          skillsData.map((item, index) => (
            <div key={index} className='skills_content_wrapper_inner_content'>
              <h3 className='skills_content_wrapper_inner_content_categoty_text'>{item.label}</h3>
              <div className='progress_bar'>
                {item.data.map((skillItem, index) =>(
                  <div className='progress_bar_wrapper' key={index}>
                    <p>{skillItem.skillName}</p>
                    <Line 
                      percent={skillItem.percentage}
                      strokeWidth="2"
                      strokeColor="var(--yellow-theme-main-color)"
                      trailWidth="2"
                      strokeLinecap='square'
                    />
                  </div>
                ))}
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Skills
