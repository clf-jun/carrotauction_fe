import React from 'react'
import '../css/home.css';
import main_logo from '../images/main_logo.png';
import main_img from "../images/main_img.png";
import main_middle from "../images/main_middle.png";

const  Home = () => {
  return (
    <div className='home'>
      <div className='home-main-section-top'>
        <div className='home-main-top'>
          <div className='home-main-inner-right'>
            <div className='home-main-desc'>
              <h1>당신 근처의 경매</h1>
              <img className="main_logo" src={main_logo} alt=""></img>
              <p>이 웹사이트는 당근마켓과 아무런 연관이 없습니다. <br/> 학습용 제작이며 비상업성 웹사이트 입니다.</p>
              <div className='home-main-inner-start'>
                <a href='/login'>시작하기</a>
              </div>
            </div>
          </div>
          <div className='home-main-inner-left'>
            <div className='home-main-img'>
              <img className="main_img" src={main_img} alt=""></img>
            </div>
          </div>
        </div>
      </div>

        <div className='home-middle-section'>
          <div className='home-middle-wrapper'>

            <div className='home-middle-inner-left'>
              <div className='home-middle-img'>
                <img className="main_middle" src={main_middle} alt=""></img>
              </div>
            </div>

            <div className='home-middle-inner-right'>
              <div className='home-middle-desc'>
                <h1>원하는 물품의 가격을<br/> 마음껏 제안해보세요</h1>
                <p>더 이상 가격 제안에 눈치를 보지마세요. <br/>
                흥미로운 아이템들이 여러분을 기다리고 있습니다.<br/><br/>
                지금 바로 회원가입하고 마음것 입찰해보세요.<br/>
                </p>
              </div>
            </div>

          </div>
        </div>

        <div className='home-bottom'>
            <h1>아직 미정</h1>
        </div>
    </div>
  )
}

export default Home
