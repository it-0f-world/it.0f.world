import { scaleRotate as Menu } from 'react-burger-menu';
import {NavLink} from "react-router-dom";
import { PiCodesandboxLogoLight, PiCode, PiQrCode, PiMapPinSimpleArea, PiBookBookmarkLight } from "react-icons/pi";
import { FiPhoneCall, FiMail } from "react-icons/fi";
import './burgerMenu.css';
import LogoWhite from '../../assets/logo/logo-unicorn.svg';

const BurgerMenu = ({ closeMenu, isOpen, ...props }) => {
    return (
        <Menu  isOpen={isOpen} {...props}>
          <div className='bm-logo'>
            <NavLink to="/" onClick={closeMenu} className='bm-logo-image'>
              <img src={LogoWhite} alt="Logo" />
            </NavLink>
          </div>
          <div>
            <NavLink to="/" className={({ isActive }) => isActive ? "bm-item-active" : ""} onClick={closeMenu}><PiCodesandboxLogoLight className='bm-item-icon'/> About us</NavLink>
            <NavLink to="/services" className={({ isActive }) => isActive ? "bm-item-active" : ""} onClick={closeMenu}><PiCode className='bm-item-icon'/> Services</NavLink>
            <NavLink to="/portfolio" className={({ isActive }) => isActive ? "bm-item-active" : ""} onClick={closeMenu}><PiQrCode className='bm-item-icon'/> Portfolio</NavLink>
            <NavLink to="/articles" className={({ isActive }) => isActive ? "bm-item-active" : ""} onClick={closeMenu}><PiBookBookmarkLight className='bm-item-icon'/> Articles</NavLink>
            <NavLink to="/contacts" className={({ isActive }) => isActive ? "bm-item-active" : ""} onClick={closeMenu}><PiMapPinSimpleArea className='bm-item-icon'/> Contacts</NavLink>
          </div>
          <div className='bm-address'>
            <a href="mailto:info@it.0f.world"><FiMail style={{ fontSize: '1.5em', marginBottom: '-.2em'}} /> info@it.0f.world</a>
            <a href="callto:+79278500916"><FiPhoneCall style={{ fontSize: '1.5em', marginBottom: '-.2em'}} /> +7 927 850 0916</a>
          </div>
        </Menu>
    );
  };
  
  export default BurgerMenu;