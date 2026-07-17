import React from 'react';
import { createRoot } from 'react-dom/client';
import GravatarCard from './components/gravatar-card';
import './style.scss';
 
const App = () => (
    <div className="gravatar-example">
        <GravatarCard email="sarahthompson@fork.do " />
    </div>
);
 
const container = document.getElementById( 'root' );
const root = createRoot( container );
root.render( <App /> );
