import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm"> Special Forces </span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img className="headerImg" alt="header" src="img/6.jpg" />
    </div>
  );
};

export default Header;
