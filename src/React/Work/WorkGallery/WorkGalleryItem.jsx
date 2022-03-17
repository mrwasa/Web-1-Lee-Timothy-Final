import React from 'react';
import styled from 'styled-components';

import { defaultMediaQueries } from 'React/common/useMediaQuery.js';

/* Components ---------------------------*/
import Lightbox from 'React/common/Lightbox/Lightbox.jsx';

const WorkGalleryItem = ({work}) => {

    const ActiveContent = () => {
        return (
            <>
                <img src={ work.image } alt={ work.title } />
                <h3>{ work.title } :: { work.category }</h3>
            </>
        );
    }
    const ModalContent = () => {
        return (
            <>
            <img src={ work.image } alt={ work.title } />
            <ul>
                <li><b>Category:</b> { work.category }</li>
                <b className='Coming'>Coming Soon</b>
            </ul>
            <p>{ work.description }</p>
            </>
        );
    }

    return (
        <WorkGalleryItemStyled className='WorkGalleryItem'>
            <Lightbox
                title={ work.title }
                activeContent={ <ActiveContent /> }
                modalContent={ <ModalContent /> }
            />
        </WorkGalleryItemStyled>
    );
}

export default WorkGalleryItem;

const WorkGalleryItemStyled = styled.div`
    width: 90%;
    padding: 5px;
    position: relative;

    @media ${defaultMediaQueries.mdUp} {
        width: 100%;
        padding: 5px;
    }

    @media ${defaultMediaQueries.lgUp} {
        width: 100%;
        padding: 5px;
    }

    .ActiveArea {
        img {
            width: 100%;
        }

        h3 {
            background-color: black;
            color: dodgerblue;
            margin: 0px;
            padding: 10px;

            font-size: 14px;
            font-family: Helvetica, Arial, sans-serif;

            position: absolute;
            left: 5px;
            right: 5px;
            bottom: 5px;

            @media ${defaultMediaQueries.mdUp} {
                font-size: 16px;
            }

            @media ${defaultMediaQueries.lgUp} {
                font-size: 24px;
            }
        }
    }
    
    .Light {
        img {
            width: 100%;
            display: block;
        }
        ul {
            padding: 15px;
            margin: 0px 0px 10px;
        }
        .Coming {
            padding: 10px 0px 0px 240px;
            font-size: 30px;
            text-align: center;
        }
        p{
            margin: 0px 0px 10px;
        }
    }
    
`;