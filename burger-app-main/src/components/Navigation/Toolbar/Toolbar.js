import React from 'react';
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo'

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div>MENU</div>
        <Logo/>
        <div>...</div>


    </header>
);

export default toolbar;