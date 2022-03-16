import React from 'react';
import styled from 'styled-components';

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
        align-items: baseline;

        h2 {
            flex: 1;
            padding: 10px 0px 0px 0px;
            margin-left: 250px;
            margin-right: 0px;
            color: dodgerblue;
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
        color: dodgerblue;
    }

    hr {
        width: 50%;
    }
`;