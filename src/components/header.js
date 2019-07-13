import React from 'react'

import '../style/header/header.css';
import {log} from "../utils/utils";

export default class Header extends React.Component{
    constructor(props) {
        super(props);
        log("header", "init");

        this.logo_src = 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Shadowsocks_logo.png';
    }

    render() {
        return (
            <header className='header'>
                <div className='header-wrap'>
                    <div className='brand-wrap'>
                        <a href="/" className='logo-box'>
                            <img src={this.logo_src} className='logo-img' alt=""/>
                        </a>
                        <span className='brand-text'>SSR Share</span>
                    </div>
                </div>

            </header>
        );
    }
}
