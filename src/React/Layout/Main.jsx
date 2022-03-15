import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import Home from '../Home/Home.jsx'
import About from '../About/About.jsx'
import Work from '../Work/Work.jsx'
import UX from '../UX/UX.jsx'
import Homework from '../Homework/Homework.jsx';

const Main = () => {

    return (
        <MainStyled className='Main'>
                <Switch>
                    <Route path='/' exact>
                        <Home />
                    </Route>
                    <div className="inset">
                        <Route path='/about'>
                            <About />
                        </Route>
                        <Route path='/work'>
                            <Work />
                        </Route>
                        <Route path='/ux'>
                            <UX />
                        </Route>
                        <Route path='/homework'>
                            <Homework />
                        </Route>
                    </div>
                </Switch>
        </MainStyled>
    );
}

export default Main;

const MainStyled = styled.main`
        
`;