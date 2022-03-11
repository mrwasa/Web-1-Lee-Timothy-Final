import React from 'react';
import styled from 'styled-components';

import Youtube from '../UX/Youtube/Youtube.jsx';

const UX = () => {

    return (
        <UXStyled className='UX'>
            <center>
                <h1>The Term UX</h1>
                <Youtube />
            </center>
        </UXStyled>
    );
}

export default UX;

const UXStyled = styled.div`
    
`;