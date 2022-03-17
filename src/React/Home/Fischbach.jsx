import React from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { defaultMediaQueries } from 'React/common/useMediaQuery.js';

const Fishbach = () => {

    return (
        <FishbachStyled className='Fishbach'>
            <img src="/assets/img/Work/ServiceDesign/fischbach_large.jpg" />
            <div className="title">
                <h2>Service Design - </h2>
                <h3>Fischbach Experience Center</h3>
            </div>
            <p>A new look at car dealerships: improving the car buying and financing experience in order to bring customers back to the showroom.</p>
            <hr></hr>
        </FishbachStyled>
    );
}

export default Fishbach;

const FishbachStyled = styled.div`
    background-color: #DCDCDC;
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
            margin: 20px 200px 0px 200px;
            font-family: "Raleway";
            color: dodgerblue;
            text-align: left;
            font-size: 24px;
        }

        h3 {
            margin: 20px 200px 0px 200px;
            text-align: center;
            font-size: 50px;
        }
    }

    p {
        display: flex;
        justify-content: center;
        margin: 20px 350px 40px 300px;
        font-size: 18px;
        text-align: center;
        color: dodgerblue;
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
            margin: 20px 350px 40px 570px;
            font-size: 18px;
            text-align: left;
        }
    }
`;