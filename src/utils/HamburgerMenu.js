import "./HamburgerMenu.css";

const HamburgerMenu = () => {
  const toggleBurgerMenu = () => {};

  return (
    <div className="hamburger-menu" onClick={toggleBurgerMenu}>
      <div className="burger"></div>
    </div>
  );
};

export default HamburgerMenu;
