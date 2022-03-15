import React from 'react';
import styled from 'styled-components';

const Intro = () => {

    return (
        <IntroStyled className='Intro'>
            <h1>Hello, I'm Timothy</h1> 
            <h2>Lorem Ipsum</h2>
            <div className="inset">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et fugiat perferendis illo reprehenderit libero dolor ullam. Molestiae assumenda, ducimus nesciunt inventore nam voluptas, minus beatae expedita quas nobis sit tempora.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et fugiat perferendis illo reprehenderit libero dolor ullam. Molestiae assumenda, ducimus nesciunt inventore nam voluptas, minus beatae expedita quas nobis sit tempora.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et fugiat perferendis illo reprehenderit libero dolor ullam. Molestiae assumenda, ducimus nesciunt inventore nam voluptas, minus beatae expedita quas nobis sit tempora.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et fugiat perferendis illo reprehenderit libero dolor ullam. Molestiae assumenda, ducimus nesciunt inventore nam voluptas, minus beatae expedita quas nobis sit tempora.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et fugiat perferendis illo reprehenderit libero dolor ullam. Molestiae assumenda, ducimus nesciunt inventore nam voluptas, minus beatae expedita quas nobis sit tempora.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et fugiat perferendis illo reprehenderit libero dolor ullam. Molestiae assumenda, ducimus nesciunt inventore nam voluptas, minus beatae expedita quas nobis sit tempora.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et fugiat perferendis illo reprehenderit libero dolor ullam. Molestiae assumenda, ducimus nesciunt inventore nam voluptas, minus beatae expedita quas nobis sit tempora.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et fugiat perferendis illo reprehenderit libero dolor ullam. Molestiae assumenda, ducimus nesciunt inventore nam voluptas, minus beatae expedita quas nobis sit tempora.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et fugiat perferendis illo reprehenderit libero dolor ullam. Molestiae assumenda, ducimus nesciunt inventore nam voluptas, minus beatae expedita quas nobis sit tempora.
                </p>
            </div>
        </IntroStyled>
    );
}

export default Intro;

const IntroStyled = styled.div`
    background-color: lightgray;
    text-align: center;
    padding-top: 20px;


    h1 {
        font-size: 20px;
        color: black;
    }

    h2 {
        font-size: 70px;
        color: white;
    }

    .inset {
        text-align: left;

        p {
            line-height: 150%;
        }
    }
`;