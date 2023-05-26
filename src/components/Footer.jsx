/*
import React from 'react'
import '../assets/Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
const Footer = () => {
  return (
    <footer className="footer">
      <div class="icon">
      <a href="icon-link"> <FacebookIcon style={{fontSize:20}} /></a>
      <a href="icon-link"><GitHubIcon style={{fontSize:20}} /></a>
      <a href="icon-link"> <InstagramIcon style={{fontSize:20}} /></a>
      <a href="icon-link"> <LinkedInIcon style={{fontSize:20}}/></a>
      <a href="icon-link"><EmailIcon style={{fontSize:20}}/></a>
   
  </div>
        <div className="text-center">
          All rights reserved <br />
        © 2020 Copyright:
        </div>

    </footer>
  )
}

export default Footer
*/

import React from 'react'
import NewLetter from './NewLetter'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Apple from '../assets/img/app-store.png'
import Google from '../assets/img/google-play.png'
import Visa from '../assets/img/visa.png'
import Paypal from '../assets/img/paypal.png'

const About_list=[
  'About Us',
  'Contact Us',
  'Terms & Conditions',
  'Privacy Policy'
]

const Account_list=[

]

const Footer = () => {
  return (
    <div className='Footer' id='Footer'>
        <div className="Footer__content">
          <div className="left">
            <div className="Footer__contact">
              <div className="title">
                Contact
              </div>
              <div className="details">
                <div className="detail">
                  <div className="key">
                    Address :
                  </div>
                  <div className="value">
                  Gueliz Marrakech Maroc
                  </div>
                </div>
                <div className="detail">
                  <div className="key">
                    Phone :
                  </div>
                  <div className="value">
                    +212652525252
                  </div>
                </div>
                <div className="detail">
                </div>
              </div>
              <div className="followUs">
                <div className="title">
                  Follow Us
                </div>
                <ul>
                  <li><a href='/'><FacebookIcon /></a></li>
                  <li><a href='/'><InstagramIcon /></a></li>
                  <li><a href='/'><YouTubeIcon /></a></li>
                  <li><a href='/'><PinterestIcon /></a></li>
                  <li><a href='/'><TwitterIcon /></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mid">
            <div className="About">
              <div className="title">
                About
              </div>
              <ul>
                {About_list.map((about)=>{
                  return <li key={about}><a href="/">{about}</a></li>
                })}
              </ul>
            </div>
            
          </div>
          <div className="right">
              <div className="title">
                Install App
              </div>
              <div className="desc">
                From App Store or Google Play
              </div>
                <ul>
                  <li><a href="/"><img src={Google} alt="" /></a></li>
                  <li><a href="/"><img src={Apple} alt="" /></a></li>
                </ul>
               

            </div>
        </div>
        <div className="Copyright">        
        2023 © Copyright Gueliz Marrakech – Company No. 328 1481
        </div>
    </div>
  )
}

export default Footer
