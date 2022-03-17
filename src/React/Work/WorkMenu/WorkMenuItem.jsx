import React from 'react';
import styled from 'styled-components';

const WorkMenuItem = ({category, chosenCategory, chosenCategoryUpdate}) => {

    const clickHandler= () => {
        chosenCategoryUpdate(category);
    }

    const theClassName = (chosenCategory === category) ? 'WorkMenuItem active':'WorkMenuItem';

    return (
        <WorkMenuItemStyled className={ theClassName } onClick={ clickHandler }>
            { category }
        </WorkMenuItemStyled>
    );
}

export default WorkMenuItem;

const WorkMenuItemStyled = styled.div`
    width: 150px;
    font-size: 18px;
    border-bottom: solid 3px black;
    line-height: 40px;
    text-align: center;
    margin: 5px;
    cursor: pointer;

    &:hover {
        background-color: #eeeeee;
    }

    &.active {
        background-color: black;
        color: dodgerblue;
    }
`;