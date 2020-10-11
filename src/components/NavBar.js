import React from 'react';
import './NavBar.css';

const navItems = [
    {
        title : 'Home',
        link: '/home'
    },
    {
        title: 'About',
        link: '/about'
    }

]

const NavBar = () =>{
  
    return (
        <header className="header">
            <div className="fixed-top col-12">
                <div className="collapse" id="navbarToggleExternalContent">
                    <div className=" barra p-4 navbar-expand-md navbar-expand-lg navbar-dark col-12">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        {navItems.map((nav,index)=>(
                           <li className="items nav-item active" key={nav.title + index}><a className="nav-link" href={nav.link + index}>{nav.title}<span className="sr-only">(current)</span></a>
                           </li>
                        ))}
                        </ul>
                    </div>
                </div>
                
                <nav className="navbar navbar-transparent bg-transparent">
                    <button className="btn btn-outline-dark my-2 my-sm-0" type="submit" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                       <ion-icon name="menu-outline"></ion-icon>
                    </button>
                    
                    <div>
                        <a href="/administrador">
                            <button className="btn btn-outline-dark my-2 my-sm-0 mr-1" type="submit">Administrar</button>
                        </a>
                        <a href="register">
                            <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Log in</button>
                        </a>
                    </div>
                </nav>
            </div>

        </header>



    )
};


export default NavBar;

