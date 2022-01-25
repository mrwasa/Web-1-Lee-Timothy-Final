import React from 'react';
import styled from 'styled-components';

import Essay from './Essay.jsx';

const Essays = () => {
    return (
        <EssaysStyled>
            <h2>Essays</h2>
            <Essay q='S2. What is the difference between Git, Github and Heroku?' >
            Git is software known as a version control system that helps manage our project files known as repositories. It is a tool that helps keep track of all the changes we make on our projects, saves the changes and lets us go back to them if we need to. It also helps us collaborate with other team members more easily and efficiently. We can all work on the same project at the same time using Git without having to wait for the other person to finish their work as well as work on different branches at the same time. Git also makes it easy for us to merge all of our separate work. It helps us work faster, keep data integrity, and collaborate more easily.

GitHub is a service that hosts Git repositories on the web. It is a service for projects that use Git. While Git is local, GitHub is hosted on the web. It has all the functionalities of Git with some of its own features. It is a hub where you can store your repositories online so that it’s available for your team to access and work on with you. It provides social networking functionalities to connect with others and has a graphical interface.

Heroku is a cloud application platform that also uses the Git revision control system but also helps do more. While GitHub lets you edit repositories, Heroku lets you also build, deliver, monitor and scale. It’s a new way of building and deploying apps. You can also purchase your own server to host on Heroku.

            </Essay>
            <Essay q='S3. Explain the difference between HTML, CSS and JS.' >
            HTML is the standard language used to structure a web page and what it shows. It is the building blocks of any website. With HTML, you can create the structure and layout of a webpage as well as add some simple effects.

CSS is programming language that is used to design a web page. It is focused on giving the web page the desired appearance and style of the creator. It helps improve the overall look of the web page. It gives the webpage color, style, and visual appeal. 

JavaScript is programming language that determines how the page behaves when it is being used. JavaScript is responsible for the making the webpage interactive. It determines what happens when the user clicks, types, or moves in the webpage and also how it reacts to these actions.  

HTML is the skeleton of a webpage. It is the structure of the page and what it shows. CSS is the skin of the webpage. It determines how the page should look with colors and aesthetics. JavaScript is the central nervous system and the muscular system of the webpage. It determines how a page reacts and what it should do by the actions of the user. 

            </Essay>
            <Essay q='S4. What are Single Page Apps (SPAs)? How do they differ from traditional multi-page Web Sites?' >
                yet another
            </Essay>
        </EssaysStyled>
    )
}

export default Essays;

const EssaysStyled = styled.div`
    background-color: white;
    padding: 20px;
`;