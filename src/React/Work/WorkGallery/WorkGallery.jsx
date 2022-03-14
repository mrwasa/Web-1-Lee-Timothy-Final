import React from 'react';
import styled from 'styled-components';

import WorkGalleryItem from './WorkGalleryItem.jsx';

const WorkGallery = ({work, chosenCategory}) => {

    return (
        <WorkGalleryStyled className='WorkGallery'>
            {
                work
                .filter((work) => {
                    return (chosenCategory === 'All' || work.category === chosenCategory);
                })
                .map((work, idx) => {
                    return <WorkGalleryItem key={ idx } work= { work }/>
                })
            }
        </WorkGalleryStyled>
    );
}

export default WorkGallery;

const WorkGalleryStyled = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;