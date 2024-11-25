import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    background: white;
    height: 78px;
    display: flex;
    justify-content: space-between;
    align-items: center; /* Align items vertically */
    padding: 0 2rem; /* Adjust as needed for spacing */
    z-index: 12;
    flex-wrap: wrap;

    /* Fixed positioning */
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;

    /* Box shadow for better visibility */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const NavLink = styled(Link)`
    color: #808080;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem; /* Adjust spacing */
    margin-left: 0; /* Ensure no extra margin pushes the logo */
    height: 100%;
    cursor: pointer;

    &.active {
        color: #000000;
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #808080;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #808080;
    padding: 10px 22px;
    color: #000000;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-left: 24px;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #808080;
    }
`;
