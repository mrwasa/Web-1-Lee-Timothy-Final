import React from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { defaultMediaQueries } from 'React/common/useMediaQuery.js';

const Roominate = () => {

    return (
        <RoominateStyled className='Roominate'>
            <img src="/assets/img/Work/UX/Roominate_large.jpg" />
            <div className="title">
                <div><h2>UX/App Design - </h2></div>
                <div><h3>Roominate</h3></div>
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
        justify-content: left;
        align-items: baseline;
        flex-wrap: wrap;

        h2 {
            margin: 20px 100px 0px 240px;
            font-family: "Raleway";
            color: white;
            text-align: left;
            font-size: 20px;
        }

        h3 {
            margin: 20px 100px 0px 200px;
            text-align: center;
            font-size: 50px;
        }
    }

    p {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px 250px 40px 250px;
        font-size: 18px;
        text-align: center;
        color: white;
    }

    hr {
        width: 50%;
    }
    @media ${defaultMediaQueries.mdUp} {
        .title {
        display: flex;
        justify-content: left;
        align-items: baseline;
        flex-wrap: wrap;

            h2 {
                margin: 20px 140px 0px 250px;
            }

            h3 {
                margin: 20px 100px 0px 0px;
                text-align: left;
            }
        }

        p {
            display: flex;
            margin: 20px 350px 40px 550px;
            font-size: 18px;
            text-align: left;
        }
    }
`;