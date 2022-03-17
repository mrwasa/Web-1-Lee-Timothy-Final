import React from 'react';
import styled from 'styled-components';

import Slideshow from '../Extra/Slideshow/Slideshow.jsx';
import Staff from '../Extra/Staff/Staff.jsx';
import Intro from './Intro.jsx';
import Roominate from './Roominate.jsx';
import Fischbach from './Fischbach.jsx';
import Airbnb from './Airbnb.jsx';
import HitMeUp from './HitMeUp.jsx';

const Home = () => {

    return (
        <HomeStyled className='Home'>
            <Intro />
            <Roominate />
            <Fischbach />
            <Airbnb />
            <HitMeUp />
        </HomeStyled>
    );
}

export default Home;

const HomeStyled = styled.div`
    
`;