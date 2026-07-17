
import React from 'react';
import { createRoot } from 'react-dom/client';
import GravatarCard from './components/gravatar-card';
import GravatarSearch from './components/gravatar-search';
import './style.scss';
 
const App = () => (
    <div className="gravatar-example">
        <h1>Hello, Gravatar!</h1>
        <GravatarSearch />
        <GravatarCard email="kubulee.kl@fork.do" />
    </div>
);
 
const container = document.getElementById( 'root' );
const root = createRoot( container );
root.render( <App /> );
