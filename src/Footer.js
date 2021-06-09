import React from 'react';

function Footer(){

    const year=new Date().getFullYear();
    return(
        <footer className="foot">
        <h3 className="Footer">copyright (c) {year}</h3>
        </footer>
    )
}

export default Footer;