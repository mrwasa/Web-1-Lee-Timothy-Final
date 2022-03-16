import React from 'react';
import styled from 'styled-components';

const Intro = () => {

    return (
        <IntroStyled className='Intro'>
            <h1>Hello, I'm Tim</h1> 
            <h2>I am a passionate Designer dedicated to products, services, and interactive experiences.  </h2>
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
    background-color: #696969;
    text-align: center;
    padding-top: 100px;
    padding-bottom: 100px;


    h1 {
        font-size: 20px;
        color: black;
    }

    h2 {
        padding: 20px;
        width: 100%;
        max-width: 1200px;
        margin: auto;
        font-family: Source Sans Pro, Arial, sans-serif;
        text-align: center;
        font-size: 50px;
        color: white;
    }

    .inset {
        text-align: left;

        p {
            line-height: 150%;
        }
    }
`;