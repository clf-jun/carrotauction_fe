import React from 'react'
import '../css/Navbar.css';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
const Navbar = () => {

  return (
    <div className="navbar_container">
        <Link to="/" className="header_logo">
          <img className="logo" src={logo} alt=""></img>
        </Link>
        <nav className="menu_container">

          <Link to="/" className="menu_btn">
            소개
          </Link>

          <Link to="/list" className="menu_btn">
            상품 리스트
          </Link>

          <Link to="/writing" className="menu_btn">
            경매 글쓰기
          </Link>
          <Link to="/qna" className="menu_btn">
            자주묻는질문
          </Link>
        </nav>

        <form className='search_section'>
          <input type="search" className='search_input' placeholder='상품 검색하기' />
        </form>

        <div className="login_chat">
                <div className='noProfile'>
                  <Link to="/login" className="login">로그인</Link>
                  <Link to="/chat" className="chat">채팅하기</Link>
                </div>
        </div>


    </div>
  )
}

export default Navbar