/*import React, { useState } from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #cccccc;
  padding: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    position: fixed;
    top: 0;
    left: ${props => props.isOpen ? '0' : '-100%'};
    width: 100%;
    height: 100%;
    transition: all 0.3s ease-in-out;
  }
`;

const Logo = styled.a`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  text-decoration: none;
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 3px;
    width: 25px;
    background-color: #333;
    margin-bottom: 5px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Menu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: 100%;
  }
`;

const MenuItem = styled.li`
  margin: 0 1rem;
`;

const NavLink = styled.a`
  font-size: 1.5rem;
  color: #333;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    color: #fff;
    padding: 1rem;
    text-align: center;
    width: 100%;

    &:hover {
      background-color: #d1bf2f;
      text-decoration: none;
    }
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <Nav isOpen={isOpen}>
      <Logo href="#">Logo</Logo>
      <Hamburger onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>
      <Menu>
        <MenuItem><NavLink href="#">Home</NavLink></MenuItem>
        <MenuItem><NavLink href="#">About</NavLink></MenuItem>
        <MenuItem><NavLink href="#">Contact</NavLink></MenuItem>
      </Menu>
    </Nav>
  );
};

export default Navbar;*/
import React, { useState } from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #f7f7f7;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Logo = styled.a`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  text-decoration: none;
`;

const MenuIcon = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    font-size: 2rem;
  }
`;

const MenuLinks = styled.ul`
  display: flex;
  list-style: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 64px;
    left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: 100%;
    height: 100vh;
    transition: all 0.3s ease-in-out;
    background-color: #f7f7f7;
  }
`;

const MenuItem = styled.li`
  margin-left: 2rem;

  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

const MenuLink = styled.a`
  color: #333;
  font-size: 1.5rem;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #d1bf2f;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <Logo href="/">Logo</Logo>
      <MenuIcon onClick={toggleMenu}>
        <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
      </MenuIcon>
      <MenuLinks isOpen={isOpen}>
        <MenuItem>
          <MenuLink href="/">Home</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="/">About</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="/">Services</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="/">Contact</MenuLink>
        </MenuItem>
      </MenuLinks>
    </Nav>
  );
};

export default Navbar;

export function CPNav(){
    return(
        <nav>        <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Contact</a></li>
      </ul></nav>

    )
}
export function Nav2(){
    return(
    <nav className="navbar">

    <div className="left">

        <h1>Navbar</h1>

    </div>

    <div className="right">

        <input type="checkbox" id="check"/>

        <label htmlFor="check" className="checkBtn">

            <i className="fa fa-bars"></i>

        </label>

        <ul className="list">

            <li><a href="#">Home</a></li>

            <li><a href="#">Gallery</a></li>

            <li><a href="#">Services</a></li>

            <li><a href="#">About Us</a></li>

            <li><a href="#">Contact Us</a></li>

        </ul>

    </div>

</nav>
)
}