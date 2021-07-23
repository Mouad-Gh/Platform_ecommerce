import React from 'react';
import Header from '../../component/Header';
import Footer from '../../component/Footer';
import ScriptTag from 'react-script-tag/lib/ScriptTag';
const Layout = (props) =>{
    return (
        <div>
            <Header />
            {props.children}
            <hr className="offset-lg" />
            <hr className="offset-sm" />
            <Footer />

            <ScriptTag  type="text/javascript" src="/assets/js/core.js" />
            <ScriptTag  type="text/javascript" src="/assets/js/carousel.js" />
            <ScriptTag  type="text/javascript" src="/assets/js/jquery.touchSwipe.min.js" />
            
        </div>
    );
}

export default Layout;