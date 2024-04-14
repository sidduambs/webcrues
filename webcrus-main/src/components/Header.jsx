import React from 'react';
import { NavLink } from "react-router-dom";
import Navbar from './Navbar';
import styled from "styled-components";

const Header = () => {
    return (
        <MainHeader>
            <NavLink to='/'>
                <img src="./images/logo.png" alt="logo" className='logo'/>
            </NavLink>
            <Navbar />
        </MainHeader>
    );
};

const MainHeader = styled.header`
    padding: 0 5.0rem;
    height: 12rem;
    background-color: ${({ theme }) => theme.colors.bg};
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
        height: auto;
        max-width: 48%; /* Increase the maximum width of the logo */
        margin-top: 7.0rem; /* Adjust margin-top to move the logo slightly down */
    }
`;

export default Header;
