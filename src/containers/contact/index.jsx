import React from 'react'
import PageHeaderContent from '../../components/pageHeaderContent'
import { BsInfoCircleFill } from 'react-icons/bs'
import './style.scss'

function Contact() {
  return (
    <section id='contact' className='contact'>
      <PageHeaderContent herderText="My Contact" icon={<BsInfoCircleFill size={40}/>}/>
      <div className='contact_content'>
        <h3 className='contact_content_header_text'>
          Let's Talk
        </h3>
        <div className='contact_content_form'>
          <div className='contact_content_form_controls_wrapper'>
            <div className='name_wrapper'>
              <input type="text" name='name'  className='input_name' required/>
              <label htmlFor="name"  className='name_label'>Name</label>
            </div>
            <div className='email_wrapper'>
              <input type="text" name='email'  className='input_email' required/>
              <label htmlFor="email"  className='email_label'>Email</label>
            </div>
            <div className='description_wrapper'>
              <textarea type="text" name='description'  className='input_description' rows={5} required/>
              <label htmlFor="description"  className='description_label'>Description</label>
            </div>
          </div>
        </div>
        <button>Submit</button>
      </div>
    </section>
  )
}

export default Contact
