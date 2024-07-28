import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">漫画道</div>
      <input type="text" placeholder="検索" className="search-bar" />
      <nav>
        <ul>
          <li><Link to="/">ホーム</Link></li>
          <li><Link to="/ranking">ランキング</Link></li>
          <li><Link to="/new">新着</Link></li>
          <li><Link to="/recommended">おすすめ</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
