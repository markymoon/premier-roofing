import React, { Component } from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
// import logo from './premierlogo512.svg';
import './MainNav.scss'

export default class MainNav extends Component {
    render() {
        return (
            <div className="main-nav">
                <Navbar bg="light" expand="lg" fixed="top">
                    <Navbar.Brand href="/index">
                        <img 
                            src="../assets/images/branding/premierlogo512.svg" 
                            height='50'
                            className="d-inline-block" 
                            alt="Premier Roofing" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="mainMenu">
                        <Nav className="mr-auto">
                            <Nav.Link href="/index"       title="" className="">Home</Nav.Link>
                            <NavDropdown title="Our Company" id="our-company-dropdown">
                                <NavDropdown.Item href="/aboutUs"       title="" className="">About Us</NavDropdown.Item>
                                <NavDropdown.Item href="/testimonials"  title="" className="">Testimonials</NavDropdown.Item>
                                <NavDropdown.Item href="/references"    title="" className="">References</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="What We Do" id="what-we-do-dropdown">
                                <NavDropdown.Item href="/services"      title="Products">Services</NavDropdown.Item>
                                <NavDropdown.Item href="/products"      title="Products">Products</NavDropdown.Item>
                                <NavDropdown.Item href="/maintenance"   title="Maintenance">Maintenance</NavDropdown.Item>
                                <NavDropdown.Item href="/safety"        title="Safety">Safety</NavDropdown.Item>
                                <NavDropdown.Item href="/testfarm"      title="Test Farm">Test Farm</NavDropdown.Item>
                                <NavDropdown.Item href="" title=""></NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/gallery"     title="" className="">Gallery</Nav.Link>
                            <Nav.Link href="/contact"     title="" className="">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                    
                </Navbar>
                <div className="subtitle">Quality Commercial &amp; Industrial Roofing Since 1987</div>
            </div>
            
        )
    }
}