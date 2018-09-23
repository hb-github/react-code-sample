import * as React from 'react';
import './navbar-style.css';
export const Navbar: React.StatelessComponent<{}> = () => {

    return (
        <nav className="navbar navbar-expand-sm navbar-default">
            <a className="navbar-brand" href="#">
                <span ><img src={require('../../../../images/hb-logo2.png')} color="white" /></span></a>
            {/* <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link 1</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link 2</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link 3</a>
                    </li>
                </ul> */}
        </nav>
    );

}
