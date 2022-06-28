import React from 'react';
import ai from '../../assets/ai.png';
import './Header.css';

const Header = (props) =>{
  const content = props.contents;

return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">{content.bannerHead} &apos;</h1>
        <p>
        {content.bannerText} <br/><br/>
        <b>Contract Adress :</b> 0xFA99777BD5A641f2065050646a70C8B22C11715E
        </p>
      </div>
  
      <div className="gpt3__header-image">
        <img src={ai} alt='milennium token' />
      </div>
    </div>
  );
}  
export default Header;