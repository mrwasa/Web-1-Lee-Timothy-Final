import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import Welcome from '../Welcome/Welcome.jsx'
import Services from '../Services/Services.jsx'
import Contact from '../Contact/Contact.jsx'
import UX from '../UX/UX.jsx'
import Homework from '../Homework/Homework.jsx';

const Main = () => {

    return (
        <MainStyled className='Main'>
            <div className="inset">
                <Switch>
                    <Route path='/' exact>
                        <Welcome />
                    </Route>
                    <Route path='/services'>
                        <Services />
                    </Route>
                    <Route path='/contact'>
                        <Contact />
                    </Route>
                    <Route path='/ux'>
                        <UX />
                    </Route>
                    <Route path='/homework'>
                        <Homework />
                    </Route>
                </Switch>
            </div>
        </MainStyled>
    );
}

export default Main;

const MainStyled = styled.main`
        
`;