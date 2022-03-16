import React from 'react';
import styled, {css} from 'styled-components';
import { NavLink } from 'react-router-dom';

/* Scripts ---------------------------*/
import { defaultMediaQueries } from 'React/common/useMediaQuery.js';

const MainMenu = ({showMenuUpdate}) => {

    const clickHandler = () => {
        showMenuUpdate(false);
    }

    return (
        <MainMenuStyled className='MainMenu'>
            <NavLink onClick={ clickHandler } to={ '/' } exact>Home</NavLink>
            <NavLink onClick={ clickHandler } to={ '/about' }>About</NavLink>
            <NavLink onClick={ clickHandler } to={ '/work' }>Work</NavLink>
            <NavLink onClick={ clickHandler } to={ '/UX' }>UX</NavLink>
            <NavLink onClick={ clickHandler } to={ '/homework' }>Homework</NavLink>
        </MainMenuStyled>
    );
}

export default MainMenu;

const MainMenuStyled = styled.div`
    a {
        display: block;
        color: white;
        margin: 5px 0px;
        background-color: #696969;
        height: 50px;
        line-height: 55px;
        text-decoration: none;
        text-align: center;

        text-transform: uppercase;
        font-weight: normal;

        &:hover{
            color: gray;
        }
        &.active {
            color: black;
        }

    }
    @media ${defaultMediaQueries.mdUp} {
        display: flex;
        justify-content: center;
        a {
            display: inline-block;
            width: 100px;
            margin: 0px 10px;
            font-size: 16px;
            border-radius: 5px;
        }
    }
`;