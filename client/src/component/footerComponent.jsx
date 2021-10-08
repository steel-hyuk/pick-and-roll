import React from 'react'
import styled from 'styled-components'

import { FaFacebookSquare,FaPinterestSquare,FaGithub,FaTwitter } from 'react-icons/fa';

const FooterComponent = () => {

  return (
    <Main>
      <div className='void'></div>
      <footer className='container'>
        <ul className='foote_bottom'>
          <li><a href='#'>Privacy</a></li>
          <li><a href='#'>Terms&Conditions</a></li>
          <li><a href='#'>Services</a></li>
          <li><a href='#'>About us</a></li>
          <li><a href='#'>Story</a></li>
        </ul>
        <p className='text'>Copyright @2021 | Designed by 경기남부연합</p>
        <ul className='social'>
          <li><a href='#'><FaFacebookSquare /></a></li>
          <li><a href='#'><FaPinterestSquare /></a></li>
          <li><a href='#'><FaGithub /></a></li>
          <li><a href='#'><FaTwitter /></a></li>
        </ul>
      </footer>
    </Main>
  )
}

const Main=styled.div`
  position: relative;
  display: flex;
  min-height: 70vh; flex-direction: column; 
  .void { flex: 1; }

  .container {
    border-top: solid 0.7mm #E7E9EB;
  }
  p { 
    padding-bottom: 0px; 
    margin-bottom: 4px;
    text-align: center;
  }

  .foote_bottom {
	  list-style-type: none;
	  padding: 0px;
	  display: table;
	  margin-top: 5px;
	  margin-right: auto;
	  margin-bottom: 5px;
	  margin-left: auto;
  }
  .foote_bottom li { 
    display: inline;
  }
  .foote_bottom li a { 
    color: #4b3add; 
    margin: 0 7px;
  }
  .social { 
    display: table; 
    margin: 15px auto 0 auto; 
    padding-left: 3px;
    list-style-type: none;  
  }
  
  .social li { 
    padding-left: 20px; 
    padding-top: 10px; 
    float: left; 
  }
  .social li a { 
    color: #1f1818; 
    border: 1px solid #CCC; 
    padding: 8px;
    border-radius: 50%;
  }
`

export default FooterComponent
