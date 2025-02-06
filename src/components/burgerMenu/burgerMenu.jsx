import { scaleRotate as Menu } from 'react-burger-menu';
import {NavLink} from "react-router-dom";
import { PiCodesandboxLogoLight, PiCircuitry, PiQrCode, PiMapPinSimpleArea, PiBookBookmarkLight } from "react-icons/pi";
import { FiPhoneCall, FiMail } from "react-icons/fi";
import './burgerMenu.css';
import LogoWhite from '../../assets/logo/logo-unicorn.svg';
import { useTranslation } from 'react-i18next';

const BurgerMenu = ({ closeMenu, isOpen, ...props }) => {
  const { t } = useTranslation();
    return (
        <Menu  isOpen={isOpen} {...props}>
          <div className='bm-logo'>
            <NavLink to="/" onClick={closeMenu} className='bm-logo-image'>
              <img src={LogoWhite} alt="Logo" />
            </NavLink>
          </div>
          <div>
            <NavLink to="/" className={({ isActive }) => isActive ? "bm-item-active" : ""} onClick={closeMenu}><PiCodesandboxLogoLight className='text-[2.1rem] mb-[-0.4rem] mr-[0.3rem]'/>{t("burgerMenuAbout")}</NavLink>
            <NavLink to="/services" className={({ isActive }) => isActive ? "bm-item-active" : ""} onClick={closeMenu}><PiCircuitry className='text-[2.1rem] mb-[-0.4rem] mr-[0.3rem]'/>{t("burgerMenuServices")}</NavLink>
            <NavLink to="/portfolio" className={({ isActive }) => isActive ? "bm-item-active" : ""} onClick={closeMenu}><PiQrCode className='text-[2.1rem] mb-[-0.4rem] mr-[0.3rem]'/>{t("burgerMenuPortfolio")}</NavLink>
            <NavLink to="/articles" className={({ isActive }) => isActive ? "bm-item-active" : ""} onClick={closeMenu}><PiBookBookmarkLight className='text-[2.1rem] mb-[-0.4rem] mr-[0.3rem]'/>{t("burgerMenuArticles")}</NavLink>
            <NavLink to="/contacts" className={({ isActive }) => isActive ? "bm-item-active" : ""} onClick={closeMenu}><PiMapPinSimpleArea className='text-[2.1rem] mb-[-0.4rem] mr-[0.3rem]'/>{t("burgerMenuContacts")}</NavLink>
          </div>
          <div className='bm-address'>
            <a href="mailto:info@it.0f.world"><FiMail className="text-[24px] mb-[-0.5] mr-[0.3rem]" /> info@it.0f.world</a>
            <a href="callto:+79278500916"><FiPhoneCall className="text-[24px] mb-[-0.5] mr-[0.3rem]" /> +7 927 850 0916</a>
          </div>
        </Menu>
    );
  };
  
  export default BurgerMenu;