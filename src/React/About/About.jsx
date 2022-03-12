import React from 'react';
import styled from 'styled-components';

import Tabbed from './Tabbed/Tabbed.jsx';

const About = () => {

    return (
        <AboutStyled className='About'>
            About 
            <Tabbed />
        </AboutStyled>
    );
}

export default About;

const AboutStyled = styled.div`
    
`;