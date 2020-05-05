import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import { CartButton } from './Button';
import styled from 'styled-components';

export function Navbar() {
  return (
    <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
      <Link to="/">
        <img src={logo} alt="Meechum" className="navbar-brand" />
      </Link>
      <ul className="navbar-nav align-items-center">
        <li className="nav-item ml-5">
          <Link to="/" className="nav-link">
            <h3>Products</h3>
          </Link>
        </li>
      </ul>
      <Link to="/cart" className="ml-auto">
        <CartButton>
          <span className="mr-2">
            <i className="fas fa-cart-plus" />
          </span>
          My Cart
        </CartButton>
      </Link>
    </NavWrapper>
  );
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
  }
`;
