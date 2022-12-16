import React from 'react'
import styled from 'styled-components'
import Nav from 'react-bootstrap/Nav'
import  CartWidget  from './CartWidget'
import {device} from '../breakpoints'
import {Link} from 'react-router-dom'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useCart } from '../context/cartContext'

const Navbar = () => {
  const { productsTotal } = useCart()


  const NavBarContainer = styled.nav`
    background-color: #d0dede;
    width: 100%;
    text-shadow: 2px 2px 8px #6c757d;
    border-bottom: 1px solid #bebebe;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    position: relative;
    border-bottom: 1px solid #bebebe;

    @media only screen and ${device.lg}{
      flex-direction: row;
    }
  `
  const BrandName = styled.a`
    font-family: 'Rock Salt', curave;
    color: #6c757d;
    font-size: 1.2rem;
    line-height: 40px;
    margin-bottom: 0px;
    padding: 0;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #6c757d;
      text-shadow: 2px 2px 2px black;
    }

    a {
      text-decoration: none;
      color: #6c757d;
    }

    @media only screen and ${device.lg}{
      font-size: 2rem;
      padding: 10px 0 10px 50px;  
      line-height: 80px;
    }
  `

  const NavContainer = styled(Nav)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    font-family: 'Rock Salt', cursive;
    font-size: 0.8rem;
    line-height: 40px;
    border-top: 1px solid #bebebe;

    @media only screen and ${device.lg}{
      font-size: 1.3rem;
      border-top: 0px;
    }
    
  `

  const NavItem = styled(Nav.Item)`
    a {
      color: #6c757d;
      text-decoration: none;
      margin-right: 20px;
      
      &:hover {
        color: #6c757d;
        text-shadow: 2px 2px 2px black;
      }

      @media only screen and ${device.lg}{
        margin-right: 60px;
      }
    }
  `

  const BtnContainer = styled.div`
    position: absolute;
    top: 20px;
    right: 2px;

    @media only screen and ${device.lg}{
      top: 40px;
      right: 50px;
    }
  `

  const NavDropdownItem = styled(NavDropdown.Item)`
  text-align: center;

    a {
      margin-right: 0;
      text-align: center;
    }

    @media only screen and ${device.lg}{
      margin-right: 0px;
    }
  `

  return (
    <NavBarContainer>
     <BrandName>
        <Link to={'/'}>Renée Shoes</Link>
     </BrandName>
     <NavContainer>
        <NavItem>
          <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdownItem><Link to="/category/1">Zapatos</Link></NavDropdownItem>
              <NavDropdownItem><Link to="/category/2">Carteras</Link></NavDropdownItem>
              <NavDropdownItem><Link to="/">Ver Todos</Link></NavDropdownItem>
          </NavDropdown>
        </NavItem>
        <NavItem>
          <Link to={'/about'}>Nosotros</Link>
        </NavItem>
        <NavItem>
          <Nav.Link href="/">Login</Nav.Link>
        </NavItem>
      </NavContainer>
      {productsTotal > 0 && 
        <BtnContainer>
          <CartWidget />
        </BtnContainer>
      }
    </NavBarContainer>
  )
}

export default Navbar