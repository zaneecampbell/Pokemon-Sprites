import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from '../src/components/LandingPage';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true; // updates material-ui typography automatically when next major release happens (Q1 2019)

const jsx = <LandingPage />;

ReactDOM.render(jsx, document.getElementById('app'));
