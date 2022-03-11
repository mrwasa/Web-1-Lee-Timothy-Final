import React from 'react';
import styled from 'styled-components';

import Logo from './Logo.jsx';
import SiteTitle from './SiteTitle.jsx';

const Header = () => {

    return (
        <HeaderStyled className='Header'>
            <div className="row">
                <Logo />
                <SiteTitle />
            </div>
        </HeaderStyled>
    );
}

export default Header;

const HeaderStyled = styled.header`
    background-color: white;
    padding: 20px 20px;
    display: flex;
    justify-content: left;

    .row {
        display: flex;
        width: 250px;
        align-items: center;

        .Logo {
            flex: 1;
            padding-right: 10px;
            display: flex;
            align-items: center;
        }

        .SiteTitle {
            flex: 4;
        }
    }
`;