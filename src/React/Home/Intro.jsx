import React from 'react';
import styled from 'styled-components';

const Intro = () => {

    return (
        <IntroStyled className='Intro'>
            <h1>Hello, I'm Tim</h1> 
            <h2>I am a passionate Designer dedicated to products, services, and interactive experiences.  </h2>
            <div className="inset">
                <p>
                
                </p>
            </div>
        </IntroStyled>
    );
}

export default Intro;

const IntroStyled = styled.div`
    background-color: #DCDCDC;
    text-align: center;
    padding-top: 250px;

    h1 {
        font-family: "Source Sans Pro";
        font-size: 40px;
        color: dodgerblue;
    }

    h2 {
        padding: 20px;
        width: 100%;
        max-width: 1200px;
        margin: auto;
        font-family: Source Sans Pro, Arial, sans-serif;
        text-align: center;
        font-size: 50px;
        color: black;
    }

    .inset {
        text-align: left;

        p {
            line-height: 150%;
        }
    }
`;