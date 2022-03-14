import React from 'react';
import styled from 'styled-components';

import WorkMenuItem from './WorkMenuItem.jsx';

const WorkMenu = ({categories, chosenCategory, chosenCategoryUpdate}) => {

    return (
        <WorkMenuStyled className='WorkMenu'>
                {
                categories.map((category, idx) => {
                    return <WorkMenuItem key={ idx } category={ category } chosenCategory={ chosenCategory } chosenCategoryUpdate={ chosenCategoryUpdate }/>
                })
            }
        </WorkMenuStyled>
    );
}

export default WorkMenu;

const WorkMenuStyled = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`;