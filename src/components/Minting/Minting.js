import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import '../Minting/minting.scss'
import img1 from '../../Assets/Loot/article23-1.jpeg'
import img2 from '../../Assets/Loot/Metaverso_746x419.jpeg'
import img3 from '../../Assets/Loot/care1.webp'
import img4 from '../../Assets/Loot/decentraland_cover_Twitter_large_1637063730543.webp'

const Mintingn = () => {
    const owl_option = {
        nav: true,
        dots: false,
        dotsEach: false,
        loop: true,
        autoplay: false,
        navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1,
                // stagePadding: -100,
                margin: 15,
            },
            361: {
                items: 1,
                // stagePadding: -100,
                margin: 15,
            },
            600: {
                items: 1,
                // stagePadding: -100,
                margin: 15,
            },
            768: {
                items: 2,
                // stagePadding: -100,
                margin: 30,
            },
            1024: {
                items: 3,
                // stagePadding: -100,
                margin: 30,
            },
            1199: {
                items: 3,
                // stagePadding: -100,
                margin: 30,
            },
            1366: {
                items: 4,
                // stagePadding: -100,
                // padding: 20, 
                margin: 30,
            }
        },
    };
    return (
        <>
            <div className="djjsdjnds">
                <section className="minting">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-9 col-lg-10 m-auto">
                                <div className="row">
                                    <div className="col-lg-7 col-md-6 col-12">
                                        <div className="leftside">
                                            <h3>
                                                Metaestate Districts play to earn: Explore, mine, trade and govern.  various gameplays, such as, RPG, management, NFT collection, Battle, Auction, Breed and more
                                            </h3>
                                            <button type="button">MINT NFTs</button>
                                            <h1>Currently Minted : 47/20000</h1>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 col-md-6 col-12">
                                        {/* <div className="right-side"> */}
                                        <div className="img_wrapperss shadow-lg">
                                            <img src={img1} alt="" className="img-fluid" />
                                        </div>
                                        {/* </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="veiwyour">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-8 col-lg-10 m-auto">
                                <div className="row shadow-lg shshd">
                                    <div className='col-lg-6'>
                                        <div className="IMGASS ">
                                            <img src={img2} alt="" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className='col-lg-6'>
                                        <div className="abbnads">
                                            <h3>View Your Minted NFT's</h3>
                                            <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Enter Token ID Number To See The NFT" />
                                            <button>GET NFT</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="beakss">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-9 col-lg-10 m-auto">
                                <div className="headingss">
                                    <h3>Meta Districts</h3>
                                </div>
                                <div className="first-second ">
                                    <OwlCarousel className="slider-items owl-carousel ltf-owl" autoplaySpeed={5000}  {...owl_option}>
                                        <div className="item">
                                            <div className="card card-width ">
                                                <img src={img3} alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="card card-width">
                                                <img src="\loot\Decentraland_46.jpeg" alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="card card-width">
                                                <img src={img4} alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="card card-width">
                                                <img src="\loot\images (2).jpeg" alt="" className="img-fluid" />
                                            </div>
                                        </div>

                                        <div className="item">
                                            <div className="card card-width">
                                                <img src="\loot\images.jpeg" alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="card card-width">
                                                <img src="\loot\images (1).jpeg" alt="" className="img-fluid" />
                                            </div>
                                        </div>

                                    </OwlCarousel>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Mintingn;
