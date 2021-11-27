import React,{useState} from 'react'
// COMPONENTES EXTERNOS
// ----  ROUTER  ----
import { Link } from "react-router-dom";
// ----  COMPONENTES
import { Header } from "./Header";
// ----  ICONS  ----
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from "react-icons";
// ----  DATA ----
import { NavBarData } from "./NavBarData";
// CSS
import '../styles/NavBar.css';

export const NavBar = () => {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)

    const [title, setTitle] = useState('ingresar titulo')
    const cambiarTitulo = (e) => { setTitle(e.target.innerText) }

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
          <div className="navbar">
            <div className="a-container">
                <Link to="#" className="menu-bars">
                  <FaIcons.FaBars onClick={showSidebar}/>
                </Link>
            </div>
            <div className="h-container">
                <Header src={'#'} titulo={title} saludo={false}/>
            </div>
          </div>
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
              <ul className='nav-menu-items' onClick={showSidebar}>
                  <li className="navbar-toggle">
                    <Link to="#" className="memu-bars">
                        <AiIcons.AiOutlineClose />
                    </Link>
                  </li>
                  {NavBarData.map((item,index)=>{
                    return (
                      <li key={index} className={item.cName}>
                        <Link to={item.path}>
                          {item.icon}
                          <span onClick={cambiarTitulo}>{item.title}</span>
                        </Link>
                      </li>
                    )
                  })}
              </ul>
          </nav>
        </IconContext.Provider>
        </>
    )
}
