import React from 'react';
import './footer.scss';
import { Link } from 'react-router-dom';
const Footer = () => {

    const scrolltop = () => {
        window.scrollTo(0, 0)
    }
    return (
        <>
            <section className="main-footer">
                <footer class="footer">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-xl-10 col-lg-11 m-auto">
                                <div class="snd">
                                    <div className="sjndsd">
                                        <img src="\loot\Rectangle.png" alt="" className="img-fluid" />
                                        <h4>Meta <span>Districts</span></h4>
                                    </div>
                                    <h6>Copyright © 2021. All Rights Reserved By
                                        Meta Districts</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </section>
        </>
    )
}

export default Footer;
