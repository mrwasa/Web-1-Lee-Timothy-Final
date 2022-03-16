import React from 'react';
import styled from 'styled-components';

const SiteTitle = () => {



    return (
        <SiteTitleStyled className='SiteTitle'>
            <h2>Timothy Lee</h2>
        </SiteTitleStyled>
    );
}

export default SiteTitle;

const SiteTitleStyled = styled.div`
    background-color: #DCDCDC;
    color: black;
    text-align: center;

    h2 {
        margin: 0px;
        font-size: 20px;
        font-weight: normal;
        font-family: "Source Sans Pro";
    }
`;