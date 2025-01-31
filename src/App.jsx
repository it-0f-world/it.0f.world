import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import BurgerMenu from './components/burgerMenu/burgerMenu';
import style from './App.module.css';
import './assets/fonts/fonts.css';
import Main from "./pages/main/main";
import Services from "./pages/services/services";
import Portfolio from "./pages/portfolio/portfolio";
import Articles from "./pages/articles/articles";
import Contacts from "./pages/contacts/contacts";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className={style.root}>
      <BurgerMenu
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
        className={style.burger}
        isOpen={menuOpen}
        onStateChange={handleStateChange}
        closeMenu={closeMenu}
      />
      <div id="outer-container" className={style.app}>
        <main className={style.main} id="page-wrap">
          <Routes>
            <Route path="/" element={<Main closeMenu={closeMenu} />} />
            <Route path="/services" element={<Services closeMenu={closeMenu} />} />
            <Route path="/portfolio" element={<Portfolio closeMenu={closeMenu} />} />
            <Route path="/articles" element={<Articles closeMenu={closeMenu} />} />
            <Route path="/contacts" element={<Contacts closeMenu={closeMenu} />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;
