import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBox from './SearchBox'
const Navbar = () => {
    const [activeItem,setActiveItem] = useState(0);
    const [items] = useState(['Accueil','Store','Contact']);

    const handleItemClick =(index)=>{
        setActiveItem(index);
    }

    return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link className="navbar-brand" to="/" >Unistore Pro</Link>
                        <a className="navbar-brand pull-right hidden-sm hidden-md hidden-lg" href="#open-cart"> <i className="ion-bag"></i> 7 </a>
                    </div>

                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            {items.map((item, index)=>
                                <li key={index} className={activeItem === index ? 'active' : ''}>
                                    <Link 
                                          to={"/"+item}
                                          className={activeItem === index ? 'active' : ''}
                                          onClick={()=>{handleItemClick(index)}}  >
                                    {item}
                                </Link></li>
                            )}
                        </ul>
                    </div>


                    <SearchBox />
                </div>
            </nav>
    );
}

export default Navbar;