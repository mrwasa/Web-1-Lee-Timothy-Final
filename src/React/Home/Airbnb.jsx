import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

/* Scripts ---------------------------*/
import { defaultMediaQueries } from 'React/common/useMediaQuery.js';

const Airbnb = () => {

    return (
        <AirbnbStyled className='Airbnb'>
            <NavLink to={'/comingsoon' }>
                <img src="/assets/img/Work/UX/Airbnb_large.jpg" />
            </NavLink>
            <div className="title">
                <h2>UX Design - </h2>
                <h3>Airbnb</h3>
            </div>
            <p>Improving the experience of guests and hosts by evening out the balance between Airbnb's services for guests and hosts.</p>
            <hr></hr>
        </AirbnbStyled>
    );
}

export default Airbnb;

const AirbnbStyled = styled.div`
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
        justify-content: center;
        align-items: baseline;
        flex-wrap: wrap;

        h2 {
            margin: 20px 230px 0px 240px;
            font-family: "Raleway";
            color: white;
            text-align: left;
            font-size: 24px;
        }

        h3 {
            margin: 20px 200px 0px 200px;
            text-align: left;
            font-size: 50px;
        }
    }

    p {
        display: flex;
        justify-content: center;
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
            margin: 20px 450px 40px 520px;
            font-size: 18px;
            text-align: left;
        }
    }
`;