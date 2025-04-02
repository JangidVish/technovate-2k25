import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // ✅ Import useNavigate
import styled from 'styled-components';
import "./Navbar.css";

const Header = styled.header`
  &.scroll-down {
    margin-top: 0;
    transform: translate3d(-50%, -120%, 0);
  }
`;

const Navbar = ({ reference, scrollToSection }) => {
  const [scrollDirection, setScrollDirection] = useState('');
  const [lastScroll, setLastScroll] = useState(0);
  const [activeLink, setActiveLink] = useState('home');
  const navigate = useNavigate();  // ✅ Initialize useNavigate

  useEffect(() => {
    const handleScroll = () => { 
      const currentScroll = window.pageYOffset;
      if (currentScroll <= 0) {
        setScrollDirection('');
        return;
      }

      if (currentScroll > lastScroll && scrollDirection !== 'down') {
        setScrollDirection('down');
      } else if (currentScroll < lastScroll && scrollDirection !== 'up') {
        setScrollDirection('up');
      }
      setLastScroll(currentScroll);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScroll, scrollDirection]);

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
    <div>
      <Header className={scrollDirection === 'down' ? 'scroll-down' : scrollDirection === 'up' ? 'scroll-up' : ''}>
        <div
          className={`links link1 ${activeLink === 'home' ? 'active' : ''}`}
          onClick={() => {
            handleSetActiveLink('home');
            scrollToSection(reference.home);
          }}
        >
          HOME
        </div>
        <div
          className={`links link2 ${activeLink === 'events' ? 'active' : ''}`}
          onClick={() => {
            handleSetActiveLink('events');
            scrollToSection(reference.events);
          }}
        >
          EVENTS
        </div>
        
        <div
          className={`links link4 ${activeLink === 'glimpse' ? 'active' : ''}`}
          onClick={() => {
            handleSetActiveLink('glimpse');
            scrollToSection(reference.glimpse);
          }}
        >
          Glimpse
        </div>
        <div
          className={`links link5 ${activeLink === 'teams' ? 'active' : ''}`}
          onClick={() => {
            handleSetActiveLink('teams');
            navigate("/teams");  // ✅ Navigate to Teams page
          }}
        >
          Teams
        </div>
      </Header>
    </div>
  );
};

export default Navbar;
