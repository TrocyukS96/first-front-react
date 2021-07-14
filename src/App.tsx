import React from 'react';

import './App.css';

import Logo from './assets/images/logo.webp';
import MainImg from './assets/images/main/main-img.jpg';
import PersonImg from './assets/images/main/person-img.jpg';

function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img className="logo-img" src={Logo} />
      </header>
      <nav className="sidebar">
        <ul className="sidebarList">
          <li className="sidebarItem"><a className="sidebarLink" href="#">Profile</a> </li>
          <li className="sidebarItem"><a className="sidebarLink" href="#">Messages</a> </li>
          <li className="sidebarItem"><a className="sidebarLink" href="#">News</a> </li>
          <li className="sidebarItem"><a className="sidebarLink" href="#">Settings</a> </li>
        </ul>
      </nav>
      <main className="main">
        <img className="mainImg" src={MainImg} alt="main-image" />
        <div className="personBlock">
          <img className="person-img" src={PersonImg} alt="person-image" />
          <div className="personContent">
            <h3 className="personTitle">StanislavIT</h3>
            <div className="personData">
              <p className="personBirth">Date of birth:<span>29 of Jenuary</span></p>
              <p className="personCithy">City:<span>Molodechno</span></p>
              <p className="personEducation">Education:<span>University of civil protection</span></p>
              <p className="personSite">Web Site:<span>https://github.com/TrocyukS96</span></p>
            </div>
          </div>
        </div>
        <form className="persoLink" encType="multipart/form-data" action="#" >
          <h3 className="formTitle">
            My posts
          </h3>
          <div className="inputBlock">
            <textarea ></textarea>
          </div>
          <button className="formBtn">Send</button>
        </form>
        <div className="posts">
          <div className="newPost">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum fugit ducimus aperiam illum earum praesentium modi? Veritatis error perferendis blanditiis!
          </div>
          <div className="newPost">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, harum!
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
