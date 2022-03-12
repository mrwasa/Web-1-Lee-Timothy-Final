import React from 'react';
import styled from 'styled-components';

import Slideshow from './Slideshow/Slideshow.jsx';
import Staff from './Staff/Staff.jsx';

const Home = () => {

    return (
        <HomeStyled className='Welcome'>
            <h1>Welcome</h1> 
            <Staff />
            <Slideshow />
        </HomeStyled>
    );
}

export default Home;

const HomeStyled = styled.div`
    
`;