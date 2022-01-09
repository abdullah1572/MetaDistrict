import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.scss';

const Navbar = () => {
    return (
        <>
            {/* <SideDrawer show={sidetoggle} click={() => setsidetoggle(true)} /> */}
            {/* <Backdrop show={sidetoggle} click={() => setsidetoggle(false)} /> */}
            <section className="main-navbar">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-10 col-lg-11 m-auto">
                            <nav className="navbar ptb20 navbar-expand-lg">
                                <NavLink to="/" className="navbar-brand">
                                    <div className="sjndsd">
                                        <img src="\loot\Rectangle.png" alt="" className="img-fluid" />
                                        <h4>Meta <span>Districts</span></h4>
                                    </div>
                                </NavLink>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span> <img src="\bluemoon-nft\hot-bid\navbar-m.png" alt="" className="img-fluid" /></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav mr-auto">
                                        <li class="nav-item active">
                                            <a class="nav-link " href="sds">Home <span class="sr-only">(current)</span></a>
                                        </li>

                                        <li class="nav-item">
                                            <a class="nav-link" href="sds">Minting</a>
                                        </li>
                                        {/* <li class="nav-item">
                                            <a class="nav-link" href="sas">Staking</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="sas">Dashboard</a>
                                        </li> */}
                                        {/* <li>
                                            <form className="form-inline formm-mm my-2 my-lg-0">
                                                <input className="form-control input-bbb mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                                <button className="btn search-barss  my-2 my-sm-0" type="submit" ><img src="\bluemoon-nft\hot-bid\search-bar-1.svg" alt="" className="img-fluid" /></button>
                                            </form>
                                        </li> */}
                                    </ul>
                                    <form className="form-inline my-2 my-lg-0">
                                        <button className="nav-buttoo" type="submit">Connect Wallet</button>
                                    </form>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Navbar;
