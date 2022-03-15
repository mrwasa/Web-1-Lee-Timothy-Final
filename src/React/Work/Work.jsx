import React, { useState } from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { workData } from './workData.js';

/* Components ---------------------------*/
import WorkGallery from './WorkGallery/WorkGallery.jsx';
import WorkMenu from './WorkMenu/WorkMenu.jsx';

const Work = () => {

    const [chosenCategory, chosenCategoryUpdate] = useState('All');

    console.log('chosenCategory', chosenCategory);

    return (
        <WorkStyled className='Work'>
            <WorkMenu categories={ workData.categories } chosenCategory={ chosenCategory } chosenCategoryUpdate={ chosenCategoryUpdate }/>
            <WorkGallery work={ workData.work } chosenCategory={ chosenCategory } />
        </WorkStyled>
    );
}

export default Work;

const WorkStyled = styled.div`
    
`;