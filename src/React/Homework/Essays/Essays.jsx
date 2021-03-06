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
                <ul>
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
                </ul>
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
                    <li><b>JPG:</b> Joint Photographic Experts Group is a raster graphic and is best used for photos or images with a lot of blends and gradients. It supports millions of colors.
                        They are good for taking RAW files and compressing them down to high quality photos that are smaller in data size. 
                        Saving and re-saving a JPG will degrade the image. They are also not good for flat colored images. </li>
                    <li><b>GIF:</b> Graphics Interchange Format is a raster graphic and is best for supporting animation but also good for line drawing, screenshots and fast loading images like logos and banners. 
                        They are better for flat colored images and support transparency even though it’s not recommended for transparent images. 
                        GIFs also only accommodate 256 colors. GIFs are lossless so it has all of it’s information intact.</li>   
                    <li><b>PNG:</b> Portable Networks Graphic is a raster graphic and is best for detailed web graphics like social media graphics or illustrations. It supports millions of colors and indexed colors.
                        It also supports transparency.They were made to replace the GIF. It’s lossless so it is larger than a JPG and it will slow your website’s loading speed, but it’s worth it because the quality of the image is better. 
                        The quality of the image will not degrade even if you save and re-save multiple times. PNGs also support transparent backgrounds.</li>   
                    <li><b>SVG:</b> Scalable Vector Graphics are best for logos, icons, and simple graphics. 
                        They are vector-based which means you can resize them to any size and it won’t lose its quality because they’re made, shaped, colored, mathematically; not pixels. 
                        SVG images are actually code so in order to upload them onto a site you need to copy and paste the code of the image instead of just uploading the image like with other image files.</li>  
                </ul>
            </Essay>
            <Essay q='S8. Define the following roles: Project Manager, Business Analyst, Scrum Master, UX designer, Web Developer/Engineer, Quality Assurance Tester, and DevOps.' >
                <ul>
                    <li><b>Project Manager:</b> A project manager is responsible for an entire project. They define the entire scope and goal of a project and organize a team that will complete the project on time. 
                        They also lead meetings and create schedules. But since the project manager is in charge of the whole project, they also have to do things outside of the team’s scope. 
                        Such as managing budgets, staying in communication with stakeholders, and managing risks.</li>
                    <li><b>Business Analyst:</b> Business analysts find ways for businesses to increase efficiency and strengthen their business processes. 
                        They analyze large datasets and identify the functional and technical needs and expectations of a business. They also need to understand the business’s strategies and goals and create a financial model that supports the business’s decisions. 
                        They are always in communication with others in the organization and makes sure that changes are made that will improve the business.</li>
                    <li><b>Scrum Master:</b> A role in a scrum team who makes sure that their team is successfully following Scrum principles in a project. 
                        A scrum master’s duties include fostering good communication and teamwork within the team, which also includes planning and facilitating meetings and stand-ups. 
                        Scrum masters also deal with issues in the team that prevent the team’s progress. Scrum masters only deal with scrum-related projects and team.</li>
                    <li><b>UX Designer:</b> A user experience designer focuses on the interaction between the user and the product. They focus on the development of the product which includes its design, usability, function and even how it is advertised to the user. 
                        They want to make sure that the product is usable, enjoyable and accessible. They work with users, development teams, and business stakeholders to make sure that the product is being improved or iterated to meet both user needs and business goals. 
                        UX designers conduct user research, determine the product infrastructure as well as design user flows and wireframes, create prototypes, and conduct user testing. 
                        UX designers make sure that the user wants to use the product your business is selling.</li>
                    <li><b>Web Developer/Engineer:</b> A web developer/engineer is a software developer who develops applications and software tools specifically for the internet such as websites, e-commerce, and mobile development. 
                        They design application functionality, develop network communication systems, and build user-friendly UI. They can work on the front-end, back-end of be full stack developers.</li>
                    <li><b>Quality Assurance Tester:</b> A quality assurance tester conducts software testing and assesses its quality. They are responsible for finding glitches and bugs in software. 
                        They review and analyze system specs, develop and execute strategies and test plans, analyze test results, evaluate the product code according to specifications, and help with troubleshooting issues. 
                        They ensure the quality of the product throughout its lifecycle.</li>
                    <li><b>DevOps:</b> Short for Development and Operations, DevOps bridges the gap and gives an agile relationship between software development, who develops the software, and IT operations, who deploy the software. 
                        It is used to help create and release regular updates to products more quickly and efficiently. DevOps engineers work with software developers, system operators and admins, IT operations staff and others to oversee and facilitate continuous code development and release. 
                        They manage IT projects, design and improve IT infrastructure, and check performance and security. They oversee the whole lifecycle of software development.</li>
                </ul>
            </Essay>
            <Essay q='S9. What is considered the right size for an image or video asset?' >
                <ul>
                    <p>Trick question, whatever size will give us the fastest download without compromising quality.</p>
                    <p>The correct image size depends on your layout. You can find out what image size you need by using things like a “page ruler” browser extension, inspecting the element from the browser, image size info extension, and others. </p>
                    <p>The optimal file size of an image should be no more than 200kb and inside content images should be 800-1500 pixels wide. </p>
                    <p>Background image and full width images should be between 1,500 and 2,500 pixels wide. The best is 1920 pixels wide and 1080 pixels high. The best ratio is 16:9 and should be at least 72 pixels per inch (ppi). </p>
                    <p>Slideshow gallery images should be 1500 pixels high because for a gallery they should all be the same height. </p>
                    <p>Vertical images shouldn’t be more than 1200 pixels high. </p>
                    <p>Header images should be 1,024 pixels wide.</p>
                    <p>Logo images are no larger than 320-500 pixels wide by 70-100 pixels high.</p>
                    <p>For retina options most images sizes stated above should be doubled.</p>
                    <p>For videos, make sure to check the bitrate. The bitrate should be about 80% of the available throughput on the network. So, for 4G you should stay below 7.2 MBPS. Videos should be compressed down to at least 720p. Also try not to have the file size bigger than 30mb if possible.</p>
                </ul>
            </Essay>
            <Essay q='S10. What does it mean for a company to be Agile? What are the pros and cons of being agile?' >
                <ul>
                    <p>Agile is a methodology and an iterative approach where cross-functional agile teams collaborate and work in small frequent increments where they can gather feedback and make changes if needed instead of waiting until the end. Agile is also self-organizing and the teams decide on plans, tasks, and how the work will get done. Teams are focused on collaboration with both teammates and customers and finding solutions for customer needs. During each iteration, the teams are able to change and modify their plans and work according to their results, thus being able to adapt as they go.</p>
                    <p>Since agile is self-organizing and teams work in short increments, there is no strict schedule and time management could be a problem if not managed properly. The constant changes during each iteration could also cause problems within the project or for other parts of the company. Since agile is a little looser, there is less documentation and can be unpredictable so a project could get off track. In order for agile to work smoothly, teams much be  well managed and consistent. </p>
                </ul>
            </Essay>
            <Essay q='S11. What are testing environments? What is the difference between Local, Dev, QA and Production?' >
                <ul>
                    <p>A testing environment is space where developers clone their application and set up their location and state for the purpose of testing it to find bugs and glitches. Setting up a test environment includes the hardware and the operating system the application will run on as well as the software itself. </p>
                    <p><b>Local:</b> An environment used usually by only one developer. It is small scale where you can test and debug as you are developing, without interfering with other developers. You can test the functionality of your code and make sure everything works properly before pushing it into a shared environment.</p>
                    <p><b>Dev:</b> A shared environment with other developers and other teams working on the same product. It is very unstable because changes are constantly being made by different teams and have many different components and services from within the application and outside. This environment is used by teams to make changes without breaking anything in the live environment. </p>
                    <p><b>QA:</b> A controlled and integrated environment where QA teams can control what changes are made in order to test them individually and see if they are working properly. In this environment, the application is near identical to the actual product so that when isolated changes are implemented and tested, we can see if it will work or break the actual product. </p>
                    <p><b>Production:</b> The environment where the latest version of the product and its updates are pushed live to the users. Ideally, all testing has been completed and all bugs and glitches have been found before reaching this environment. This environment contains the final version of the product. Though the final product is live, it doesn’t mean that testing cannot continue. There are many tests that can be conducted in this environment.</p>
                </ul>
            </Essay>
            <Essay q='S12. Function vs Form: When are web images considered part of the content (HTML) as opposed to part of the appearance (CSS)?' >
                <ul>
                    <p>An image is considered part of the content (HTML) if it is providing significant information, acting as link, or has some kind of meaning related to the content of the page. HTML images can have texts and titles attached to them for more detail and clarification. Because of this they are also better for SEOs. They should be used if they have a function such as thumbnails, galleries, cards, etc. If your image is an important part of your content, then it should be in HTML.</p>
                    <p>Images in CSS are used for background decoration. These images are solely there to enhance visuals and do not have any relation to the content. They are invisible to screen readers because they don’t have alt or titles. Embedded images are easier to position and control than HTML images and load faster. If your image is just there to make the page look nice, it should be in CSS.</p>
                </ul>
            </Essay>
            <Essay q="S13. What is the difference between ID's, Classes and Tags? How does Specificity play a role in the selection of HTML elements (both in CSS and JS)">
                <ul>
                    <p><b>ID:</b> Essentially a label. The ID attribute is used to give a unique ID for an HTML element. No two elements can have the same ID. It is used for a single element that appears on the page only once. The ID is used by both CSS and JavaScript to recognize a specific HTML element to manipulate it. Use # and the element name to make the ID.</p>
                    <p><b>Classes:</b> Also a label. The class attribute is used to give a class for an HTML element. Multiple elements can share the same class. Any element that has the same class name will be styled and manipulated the same using CSS and JavaScript. Use . and the class name to make the class. </p>
                    <p><b>Tags:</b> Used at the start and end of elements, tags determine how a web browser will format and display the HTML content. They are used to create HTML documents that browsers can read and distinguish from other content. Each tag has different properties. Tags are used with the tag name between <>, then content, followed by the tag name between </> to close. An HTML element can contain multiple tags.</p>
                    <p><b>Specificity</b> is used to determine which rule will be applied to an element. In the simplest situations usually when multiple rules are applied to the same element, the one that comes last will be used. But in more complex situations, the specificity value determines what is used for the element. The rule with the highest value will be applied to the element. </p>
                </ul>            
            </Essay>
            <Essay q="S14. What is a CSS Preprocessor? What are some examples? In React, what are styled components? How do Styled Components violate separation of concerns?">
                <ul>
                    <p><b>CSS preprocessor</b> is a program that helps you create CSS files that can be used in your HTML document, but also has additional things you can use. It makes using CSS cleaner and more organized as well as being able to do things like reuse pieces, access libraries, and help with cross browser compatibility. You can also use variables, loops, and if/else statements. Some examples of CSS preprocessors are <b>SASS, LESS, Stylus, and PostCSS</b>.</p>
                    <p><b>Styled-components</b> is a framework that lets you use CSS in JavaScript in React. Using tagged template literals in JavaScript, you can simply write CSS directly in your JavaScript code to style your React components. No separate CSS file is needed, which means no CSS preprocessor is needed either. You just need to install styled-components or any other CSS in JS framework from your terminal. </p>
                    <p><b>Separation of Concern</b> is a principle used to organize things according to what they are or related to. In coding this would mean separating all the JavaScript code from the HTML code and CSS code into separate files. It is meant to keep the code organized. Styled components, however, let you used CSS in JavaScript. So, CSS and JavaScript would be mixed together in one file and violating the separation of concern. Instead of following the separation of concern, React lets you group code together based on their relation to each other into components. Each component will have the JavaScript, HTML, and CSS that its related to all together so that it can be read at once instead of jumping from one file to another.</p>
                </ul>
            </Essay>
            <Essay q="S15. Final Project: Pick a Subject Matter">
                <ul>
                    <p>My subject matter wil be a portfolio/resume promoting my work as a UX designer. My clients will be recruiters and companies looking for UX designers to employ. The purpose of this is to promote my portfolio and show my resume in order to get a new job as a UX designer.</p>
                    <p>The reason why I chose this subject matter is related to the reason why I chose to take this class. I am currently in the process of changing careers completely and have been working on becoming a UX designer. I was told that learning coding will not only be beneficial as a UX designer since I will be working with many web developers, I also need to create a portfolio/website with my work to show for when I am looking for a job. So I decided that I would like to take this class to learn about coding and also be able to create my own website and portfolio. I was going to start working on my portfolio after completing this class, but the final project accelerated my plan and I will start working on it now for its subject matter.</p>
                </ul>
            </Essay>
            <Essay q="S16. What is the difference between Web Hosts, Domains, and FTP?">
                <ul>
                    <p><b>Domain:</b>Also known as a URL is the unique address for your website. It directs people to your website's location so that they can access it. </p>
                    <p><b>Web Host:</b>A space on a server that lets you store your website files so that users can access and view your website. It helps you create, store, and manage all your website content and gives it a space for people to go to.</p>
                    <p><b>FTP:</b>A File Transfer Protocol is used for file transfers from one system to another. It is used to download or upload your website files to your web hosting account and then to a client computer. The remote host uploads a file to a server and the local host downloads the file from the server.</p>
                </ul>
            </Essay>
            <Essay q="S17. What is a Package Manager (e.g. NPM, Composer)? How does it play a role in software development?">
                <ul>
                    <p>A <b>package manager</b> is a tool that seamlessly handles the installing, uninstalling, upgrading, configuring, and managing of software packages in a consistent manner. It is a system that manages your project's dependencies. </p>
                    <p>In software development, sometimes a project needs certain code to make something work. Instead of spending a lot of time and energy coding it yourself, dependencies can be used on the project. Dependencies are created by a third party to solve certain problems and can be used by anyone who needs it for their project. Reliable dependencies are often tested a lot and updated to make sure that it is cross-browser compatible and works on your system.</p>
                    <p>However, dependencies can be a hassle to install, update, and manage. So, a package manager is used to do all the heavy manual work you would have to do yourself when using a dependency. Such as finding all the correct package JS files and checking for vulnerabilities, downloading them and putting them in the right location, writing the code to include the package in your application, doing the same for all the sub-dependencies, removing it all if you decide you don’t want it anymore, and updating them when a newer version comes out. Package managers make using dependencies more convenient and easier. It also ensures that all team members are using same dependencies. And control over versioning, which will less likely break apps.</p>
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