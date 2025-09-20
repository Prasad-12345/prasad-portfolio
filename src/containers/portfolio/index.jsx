import React, { useState } from 'react'
import PageHeaderContent from '../../components/pageHeaderContent'
import { BsInfoCircleFill } from 'react-icons/bs'
import YouTube from '../../images/YouTube-Logosu.jpg'
import Swiggy from '../../images/swiggy-1024x731.jpg'
import './style.scss'

const portfolioData = [
  {
    name : "Food Order",
    image : Swiggy,
    link : ''
  },
  {
    name : "Video Streaming Platform",
    image : YouTube,
    link : ''
  }
]

function Portfolio() {
  const [hoveredValue, setHouveredValue] = useState('')
  const handleHover = (currentItem) => {
    console.log(currentItem + '======')
    setHouveredValue(currentItem)
    console.log(hoveredValue)
  }

  return (
    <section id='portfolio' className='portfolio'>
      <PageHeaderContent herderText="My Portfolio" icon={<BsInfoCircleFill size={40}/>}/>
      <div className="portfolio_content">
        <div className='portfolio_content_cards'>
          {
            portfolioData.map((item, index) => (
              <div key={index} className='portfolio_content_cards_item'
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => handleHover(null)}
              >
                <div className='portfolio_content_cards_item_image_wrapper'>
                  <a href="">
                    <img src={item.image} alt="project_thumbnail" />
                  </a>
                </div>
                <div className='overlay'>
                  {
                    index === hoveredValue && (
                      <div className=''>
                        <p>{item.name}</p>
                        <button>Visit</button>
                      </div>
                    )
                  }
                </div>
              </div>
            )) 
          }
        </div>
      </div>
    </section>
  )
}

export default Portfolio
