import React from 'react';
import styled from 'styled-components';

const Roominate = () => {

    return (
        <RoominateStyled className='Roominate'>
            <img src="/assets/img/Work/UX/Roominate_large.jpg" />
            <div className="title">
                <h2>App Design - </h2>
                <h3>Roominate</h3>
            </div>
            <p>Making room rearrangements and decorating and easy and convenient experience with AR technology and a plethora of different furniture at the ready. </p>
            <hr></hr>
        </RoominateStyled>
    );
}

export default Roominate;

const RoominateStyled = styled.div`
    background-color: gray;
    padding-top: 100px;
    padding-bottom: 100px;

    img {
        max-width: 100%;
        height: auto;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }

    .title {
        display: flex;
        align-items: baseline;

        h2 {
            flex: 1;
            padding: 10px 0px 0px 0px;
            margin-left: 250px;
            margin-right: 0px;
            color: white;
            text-align: left;
            font-size: 24px;
        }

        h3 {
            flex: 4;
            padding: 10px 10px 0px 0px;
            margin-right: 250px;
            text-align: left;
            font-size: 50px;
        }
    }

    p {
        padding: 0px 0px 30px 0px;
        margin-left: 505px;
        margin-right: 500px;
        font-size: 18px;
        color: white;
    }

    hr {
        width: 50%;
    }

`;