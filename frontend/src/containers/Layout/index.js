import React from 'react';
import Header from '../../component/Header';
import Footer from '../../component/Footer';
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