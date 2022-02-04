import React from 'react';
import styled from 'styled-components';

import Essay from './Essay.jsx';

const Essays = () => {
    return (
        <EssaysStyled>
            <h2>Essays</h2>
            <Essay q='S2. What is the difference between Git, Github and Heroku?' >
                <ul>
                    <li>Git is software known as a version control system that helps manage our project files known as repositories. 
                        It is a tool that helps keep track of all the changes we make on our projects, saves the changes and lets us go back to them if we need to. 
                        It also helps us collaborate with other team members more easily and efficiently. We can all work on the same project at the same time using Git without having to wait for the other person to finish their work as well as work on different branches at the same time. 
                        Git also makes it easy for us to merge all of our separate work. It helps us work faster, keep data integrity, and collaborate more easily.</li>
                    <li>GitHub is a service that hosts Git repositories on the web. It is a service for projects that use Git. 
                        While Git is local, GitHub is hosted on the web. 
                        It has all the functionalities of Git with some of its own features. It is a hub where you can store your repositories online so that it’s available for your team to access and work on with you. 
                        It provides social networking functionalities to connect with others and has a graphical interface.</li>
                    <li>Heroku is a cloud application platform that also uses the Git revision control system but also helps do more. 
                        While GitHub lets you edit repositories, Heroku lets you also build, deliver, monitor and scale. It’s a new way of building and deploying apps. 
                        You can also purchase your own server to host on Heroku.</li>
                </ul>
            </Essay>
            <Essay q='S3. Explain the difference between HTML, CSS and JS.' >
                <ul>
                    <li>HTML is the standard language used to structure a web page and what it shows. It is the building blocks of any website. 
                        With HTML, you can create the structure and layout of a webpage as well as add some simple effects.</li>
                    <li>CSS is programming language that is used to design a web page. It is focused on giving the web page the desired appearance and style of the creator. 
                        It helps improve the overall look of the web page. It gives the webpage color, style, and visual appeal.</li>
                    <li>JavaScript is programming language that determines how the page behaves when it is being used. 
                        JavaScript is responsible for the making the webpage interactive. It determines what happens when the user clicks, types, or moves in the webpage and also how it reacts to these actions.</li>
                    <li>HTML is the skeleton of a webpage. It is the structure of the page and what it shows. CSS is the skin of the webpage. 
                        It determines how the page should look with colors and aesthetics. JavaScript is the central nervous system and the muscular system of the webpage. 
                        It determines how a page reacts and what it should do by the actions of the user.</li>
                </ul>
            </Essay>
            <Essay q='S4. What are Single Page Apps (SPAs)? How do they differ from traditional multi-page Web Sites?' >
                <p>Single Page Apps (SPAs) are apps that work in browsers that are loaded into one page and all interaction is carried out in that one page. 
                    This differs from the traditional multi-page website because multi-page websites have a large number of pages that get loaded every time the user interacts with the website. 
                    With SPAs, everything is loaded and done on a single page so that it increases performance, speed, and user experience. 
                    Instead of a full page being reloaded, SPAs allow just the necessary parts of the page to reload in the form of JSON files. 
                    MPAs had to refresh the entire page completely, but thanks to AJAX, refreshing only particular parts have become possible.</p>
                <p>MPAs are still more complex, with more levels, and are more difficult to develop than SPAs. 
                    However, they are better for SEO optimization and creating new and unique pages in a site. 
                    It also requires a smaller technology stack, and since it has been around longer, has more CMS solutions. SPAs may be easier for development, but it requires JavaScript to work and the download time might be slower because of its heavy framework that needs to be loaded. 
                    SPAs also seem less secure than MPAs.</p>
                <p>If you need to show a lot of different things or provide many different services and SEO is important, then you should probably use MPAs. 
                    If performance and management in limited web space is more of a preference, then SPAs would be better.</p>
            </Essay>
            <Essay q='S5. What is the difference between Web Designer, Front End Developer and Back End Developer?' >
                <ul>
                    <li><b>Web designer:</b> Web designers are responsible for the style and usability of a website. 
                    They work on the look at the feel of the website. They design what the website is going to look like and how users will interact with it. 
                    Some kinds of web designers include graphic designers, UX designers, UI designers, SEO specialists, content strategists and more. 
                    Web designers often use graphic editing software such as Adobe Photoshop, Core Draw, Sketch, Figma, Invision, etc. </li>
                    <li><b>Front-end Web Developer:</b> Front-end web developers are programmers who work on the client-side of the website and implement the designs made by the web designers. 
                    They work with the web designers, take their designs and ideas, and make them in to a fully-functioning website. 
                    While web designers are focused on the design of the website, front-end developers are focused on its function. 
                    They are making sure that the layout is right, the buttons and links do what they’re supposed to and that everything is working properly. 
                    Front-end developers use HTML, CSS, and Javascript as well as other languages, frameworks, and libraries. </li>
                    <li><b>Back-end Web Developer:</b> Back-end web developers work on the part of the website that isn’t seen or used by the user. 
                    They are focused on the server side of the website. When a website goes from static to dynamic, information is being transferred between the user and the server through the website. 
                    Back-end developers make sure that the data is being managed properly and the user is receiving the proper response. 
                    They work on the website’s data management, API function, accessibility and security. They work closely with front-end developers to make sure both sides are functioning together properly. 
                    Though back-end developers also use JavaScript, they also need to know other programming languages like Python, Ruby, PHP, and Java as well as frameworks and libraries. </li>
                    <li><b>Full-stack developer:</b> A full-stack developer is someone who knows how to develop both the front-end and back-end. 
                    They are strong enough in both to make a complete website, but are not specialized in either side, so they are good for smaller businesses or startups. </li>
                </ul>
            </Essay>
            <Essay q='S6. Distinguish the difference between Site Relative, Document Relative, and Absolute Paths.' >
                <ul>
                    <li><b>Document Relative Path:</b> The file path always starts from the location of the file or document we are working on. 
                    You can navigate using “./”,” ../” and so on. Using the ./’s you only need to type the location of the file relative to the starting point. 
                    In order to use the relative path, however, the file must exist in the same server or locally as the starting point file and you must be able to get to the file from the starting point. 
                    It can get confusing as the site becomes more complex.</li>
                    <li><b>Absolute Path:</b> Must type the entire URL to the file. Absolute paths are commonly used for content that is not located in the same domain or server as your linking file. 
                    It must be accessible from the server for it to work. Absolute paths should not be used when linking locally because links can break when moving the site to a different domain or cause trouble when moving around files in your site.</li>
                    <li><b>Site Relative Path:</b> Always starts from the root folder and must include all the folders related to the file. 
                    This path always starts with a “/” that indicates that it is starting from the root folder. It’s a little less confusing than document relative paths. 
                    You cannot link a file from a different domain or server like you can with absolute paths. 
                    Similar to document relative paths, the file must exist in the same server or locally as the document you are working on.</li>
                </ul>
            </Essay>
            <Essay q='S7. What is the difference between jpg, gif, png and SVG images?' >
                <ul>
                    <li> </li>
                </ul>
            </Essay>
        </EssaysStyled>
    )
}

export default Essays;

const EssaysStyled = styled.div`
    background-color: white;
    padding: 20px;
`;