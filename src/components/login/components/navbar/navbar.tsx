import * as React from 'react';

//Styles import
import './navbar-style.css';
export const Navbar: React.StatelessComponent<{}> = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-default">
            <a className="navbar-brand" href="#">
                <span ><img src={require('../../../../images/hb-logo2.png')} color="white" /></span></a>
        </nav>
    );
}
