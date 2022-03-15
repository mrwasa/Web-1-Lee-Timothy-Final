import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faHotTub,
} from '@fortawesome/free-solid-svg-icons';


const SiteLogo = () => {

    return (
        <SiteLogoStyled className='SiteLogo'>
            <img src="/assets/img/tllogo_small.png" width="50" height="50" />
        </SiteLogoStyled>
    );
}

export default SiteLogo;

const SiteLogoStyled = styled.div`
    color: #535252;
    width: 100%;
    height: 100%;

    .img {
        width: 50px;
        height: auto;
    }
`;