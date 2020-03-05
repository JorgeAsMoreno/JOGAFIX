import React from 'react'
import '../assets/styles/components/Header.scss'
import userIcon from '../assets/static/user-icon.png'

const Header = () => (
  <header className="header">
    <h3 className="header__title">JOGAFIX <b>Video</b></h3>
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src={userIcon} alt="" />
        <p>Perfil</p>
      </div>
      <ul>
        <li><a href="/">Cuenta</a></li>
        <li><a href="/">Cerrar Sesión</a></li>
      </ul>
    </div>
  </header>
)

export default Header