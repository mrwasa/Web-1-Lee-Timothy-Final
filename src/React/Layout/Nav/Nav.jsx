import React, { useState } from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { useMediaQueries, useMediaQuery } from 'React/common/useMediaQuery.js';

/* Components ---------------------------*/
import Hamburger from './Hamburger.jsx';
import MainMenu from './MainMenu.jsx';

const Nav = () => {

    const { media } = useMediaQuery();
    const [showMenu, showMenuUpdate] = useState(false);

    return (
        <NavStyled className='Nav'>
            {
                !media.mdUp &&
                <Hamburger showMenu={ showMenu } showMenuUpdate={ showMenuUpdate } />
            }
            {
                (media.mdUp || showMenu) &&
            <MainMenu showMenuUpdate={ showMenuUpdate }/>
            }
        </NavStyled>
    );
}

export default Nav;

const NavStyled = styled.nav`
    background-color: white;
    padding: 20px;
    display: flex;
    justify-content: flex-end;
    border: solid 1px black;
    color: white;
`;