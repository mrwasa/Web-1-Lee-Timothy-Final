import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import SiteLogo from 'React/common/SiteLogo.jsx';

const Logo = () => {

    return (
        <LogoStyled className='Logo'>
            <NavLink to={ '/' } exact><SiteLogo /></NavLink>
        </LogoStyled>
    );
}

export default Logo;

const LogoStyled = styled.div`
    background-color: #DCDCDC;
    width: 100%;
    height: 100%;
`;