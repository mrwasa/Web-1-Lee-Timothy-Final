import React from 'react';
import styled from 'styled-components';

import Slideshow from '../Extra/Slideshow/Slideshow.jsx';
import Staff from '../Extra/Staff/Staff.jsx';
import Intro from './Intro.jsx';

const Home = () => {

    return (
        <HomeStyled className='Welcome'>
            <Intro />
        </HomeStyled>
    );
}

export default Home;

const HomeStyled = styled.div`
    
`;