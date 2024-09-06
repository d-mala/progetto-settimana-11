import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Nav, Navbar, Form, FormControl, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo/logo.png';
import { performSearch } from '../store/actions';

function Sidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      dispatch(performSearch(searchQuery));
      navigate('/search');
    }
  };

  return (
    <Navbar bg="black" expand="lg" className="navbar fixed-left flex-column px-3" id="sidebar">
      <Navbar.Brand as={Link} to="/" className="mt-3 align-self-center">
        <Image src={logoImg} alt="Spotify Logo" width="131" height="40" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="flex-column w-100">
        <Nav className="flex-column w-100">
          <Nav.Link as={Link} to="/" className="nav-item nav-link d-flex align-items-center">
            <i className="bi bi-house-door-fill mr-2"></i>Home
          </Nav.Link>
          <Nav.Link as={Link} to="/library" className="nav-item nav-link d-flex align-items-center">
            <i className="bi bi-book-fill mr-2"></i>Your Library
          </Nav.Link>
          <Form className="input-group mt-3" onSubmit={handleSearch}>
            <FormControl 
              type="text" 
              placeholder="Search" 
              aria-label="Search" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button variant="outline-secondary" className="btn-sm h-100" type="submit">GO</Button>
          </Form>
        </Nav>
      </Navbar.Collapse>
      <div className="nav-btn mt-auto mb-3 w-100 px-3">
        <Button variant="light" className="signup-btn mb-2 w-100">Sign Up</Button>
        <Button variant="outline-light" className="login-btn mb-2 w-100">Login</Button>
        <div className="d-flex justify-content-center">
          <a href="/" className="mr-2">Cookie Policy</a> |
          <a href="/" className="ml-2">Privacy</a>
        </div>
      </div>
    </Navbar>
  );
}

export default Sidebar;