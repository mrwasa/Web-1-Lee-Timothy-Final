/*---------------------------
| IE 11 Support
---------------------------*/
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

/*---------------------------
| React and 3rd Party Libraries
---------------------------*/
import React from 'react';
import ReactDOM from 'react-dom';

/*---------------------------
| Components
---------------------------*/
import Homework from './React/Homework.jsx';

/*---------------------------
| Global Styles
---------------------------*/
import 'React/common/styles/normalize.css';
import 'React/common/styles/global.scss';

/*---------------------------
| Render to DOM
---------------------------*/
ReactDOM.render(<Homework />, document.getElementById('root'));