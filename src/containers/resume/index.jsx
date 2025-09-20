import React from 'react'
import PageHeaderContent from '../../components/pageHeaderContent'
import { BsInfoCircleFill } from 'react-icons/bs'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'
import { data } from './utils';
import './style.scss'
import { MdWork } from 'react-icons/md';

function Resume() {
  return (
    <section id='resume' className='resume'>
      <PageHeaderContent herderText="My Resume" icon={<BsInfoCircleFill size={40}/>}/>
      <div className='timeline'>
        <div className='timeline_experience'>
          <h3 className='timeline_experience_header_text'>
            Experience
          </h3>
          <VerticalTimeline
            layout={'1-column'}
            lineColor='var(--yellow-theme-main-color)'
          >
            {
              data.experience.map((item, index) => (
                <VerticalTimelineElement key={index} className='timeline_experience_vertical_timeline_element'
                contentStyle={{
                  background : 'none',
                  color: 'var(--yellow-theme-sub-text-color)',
                  border : '1.5px solid var(--yellow-theme-main-color)'
                }}
                icon={<MdWork/>}
                iconStyle={{
                  background : "#181818",
                  color : 'var(--yellow-theme-main-color)'
                }}
                >
                  <div className='vertical_timeline_element_title_wrapper'>
                    <h3 className='vertical_timeline_element_title'>
                      {item.title}
                    </h3>
                    <h4 className='vertical_timeline_element_subtitle'>
                      {item.subTitle}
                    </h4>
                  </div>
                  <p className='vertical_timeline_element_title_wrapper_description'>{item.description}</p>
                </VerticalTimelineElement>
              ))
            }
          </VerticalTimeline>
        </div>
        <div className='timeline_education'>
          <h3 className='timeline_education_header_text'>
            Education
          </h3>
          <VerticalTimeline
              layout={'1-column'}
              lineColor='var(--yellow-theme-main-color)'
            >
              {
                data.education.map((item, index) => (
                  <VerticalTimelineElement key={index} className='timeline_experience_vertical_timeline_element'
                  contentStyle={{
                    background : 'none',
                    color: 'var(--yellow-theme-sub-text-color)',
                    border : '1.5px solid var(--yellow-theme-main-color)'
                  }}
                  date='2020 - present'
                  icon={<MdWork/>}
                  iconStyle={{
                    background : "#181818",
                    color : 'var(--yellow-theme-main-color)'
                  }}
                  >
                    <div className='vertical_timeline_element_title_wrapper'>
                      <h3 className='vertical_timeline_element_title'>
                        {item.title}
                      </h3>
                      <h4 className='vertical_timeline_element_subtitle'>
                        {item.subTitle}
                      </h4>
                    </div>
                    <p className='vertical_timeline_element_title_wrapper_description'>{item.description}</p>
                  </VerticalTimelineElement>
                ))
              }
            </VerticalTimeline>
        </div>
      </div>
    </section>
  )
}

export default Resume
