import React from 'react';
import Header from '../../commponent/Header';
import Footer from '../../commponent/Footer';
const Layout = (props) =>{
    return (
        <div>
            <Header />
            {props.children}
            <hr className="offset-lg" />
            <hr className="offset-sm" />
            <Footer />
        </div>
    );
}

export default Layout;