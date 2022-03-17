import React from 'react';
import styled from 'styled-components';

const HitMeUp = () => {

    return (
        <HitMeUpStyled className='HitMeUp'>
            <h1>Hit Me Up</h1>
            <div className="links">
                <div><a href="mailto:uxtimlee@gmail.com" target="_blank">Email</a></div>
                <div><a href="https://www.linkedin.com/in/tim-lee-26481281" target="_blank">LinkedIn</a></div>
                <div><a href="https://www.instagram.com/invites/contact/?i=y44qenyzxpv2&utm_content=hqwd4" target="_blank">Instagram</a></div>
                <div><a href="http://www.facebook.com/mrwasa" target="_blank">Facebook</a></div>
            </div>

        </HitMeUpStyled>
    );
}

export default HitMeUp;

const HitMeUpStyled = styled.div`
    background-color: #DCDCDC;
    padding-top: 350px;
    padding-bottom: 350px;
    line-height: 10px;

    h1 {
        text-align: center;
        font-family: "Raleway";
        font-size: 60px;
    }

    .links {
        display: flex;
        justify-content: center;
    }

    .links > div {
        margin: 20px;
        padding: 10px;
    }

    a {
        color: dodgerblue;
        width: 100px;
        height: 30px;
        font-size: 18px;
        text-decoration: none;
    }

    a:visited {
        color: dodgerblue;
        text-decoration: none;
    }

    a:active {
        color: dodgerblue;
        text-decoration: none;
    }
`;