import "./header.css";
import { Avatar, Badge } from "@mui/material";
import { NotificationsOutlined, Search } from "@mui/icons-material";

const Header = () => {
  return (
    <header className="header__container">
      <h3>TransMonitor</h3>
      <div className="header__search__container">
        <Search fontSize="small"/>
        <input className="header__search" placeholder="Search..." />
      </div>
      <nav className="header__nav">
        <a>Support</a>
        <a>FAQS</a>
        <div className="header__nav__notification">
          <Badge badgeContent={8} overlap="circular" color="primary">
            <NotificationsOutlined  />
          </Badge>
        </div>
        <div className="header__nav__avatar">
          <div className="header__nav__avatar__intro">
            <p className="header__nav__avatar__hello">Hello</p>
            <p className="header__nav__avatar__name">Oginni Mobolaji Richard</p>
          </div>
          <Avatar />
        </div>
      </nav>
    </header>
  );
};

export default Header;
