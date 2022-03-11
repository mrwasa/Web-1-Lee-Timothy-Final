import React from 'react';
import styled from 'styled-components';

const SiteTitle = () => {

    return (
        <SiteTitleStyled className='SiteTitle'>
            <h2>Timothy Lee</h2>
            <h3></h3>
        </SiteTitleStyled>
    );
}

export default SiteTitle;

const SiteTitleStyled = styled.div`
    color: #535252;
    text-align: left;

    h2 {
        margin: 0px;
        font-size: 30px;
    }
    h3{
        margin: 0px;
        font-size: 20px;
    }
`;