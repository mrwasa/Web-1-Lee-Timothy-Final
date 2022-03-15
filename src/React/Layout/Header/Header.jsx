import React from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { defaultMediaQueries, useMediaQuery } from 'React/common/useMediaQuery.js';

import Logo from './Logo.jsx';
import SiteTitle from './SiteTitle.jsx';
import Nav from '../Nav/Nav.jsx';

const Header = () => {

    return (
        <HeaderStyled className='Header'>
            <div className="row">
                <div className="brand">
                    <Logo />
                    <SiteTitle />
                </div>
                <div className="navigation">
                    <Nav />    
                </div>
            </div>
        </HeaderStyled>
    );
}

export default Header;

const HeaderStyled = styled.header`
    background-color: white;
    padding: 0px 10px;
    /* display: flex; */
    flex-wrap: wrap;
    justify-content: center;
    border-bottom: solid 1px black;

    .row {
        /* display: flex; */
        justify-content: center;
        align-items: center;
        width: 100%;


        .brand {
            /* display: flex; */
            justify-content: flex-start;
            color: black;
            margin: 5px 0px 0px 5px;
            background-color: white;
            height: auto;
            line-height: 30px;
        }
    }

    @media ${defaultMediaQueries.mdUp} {
        display: flex;
        .row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;

            .brand {
                display: flex;
            }

            .navigation {
                display: flex;
                justify-content: flex-end;
            }
        }
    }

`;