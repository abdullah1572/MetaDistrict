import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import './banner.scss';
import '../chapter2/chapter2.scss'
import { useSelector } from 'react-redux'
import { useWeb3React } from '@web3-react/core'
// import Signature from '../../../SignMessage/Signature';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux'

const Chapter2 = () => {


    return (
        <>
            <div>
                <section className="chapter2" id="chaptertwo">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-xl-10 col-lg-11 m-auto">
                                <div className="shdsjxc">
                                    <div className="headerss">
                                        <h6 className="pb-2">Chapter # 1</h6>
                                        <h2>Gear Up </h2>
                                        <p>Mint addtional items</p>
                                    </div>
                                    <div className="downcardss mt-3">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-12">
                                                <div className="cardsstart">
                                                    <img src="\Loot\798447abb81031af7fbc9fc1184aaab1.jpeg" alt="" className="img-fluid" />
                                                    {/* <div className="downtext">
                                                        <h3>Khartoum</h3>
                                                        <h4>Population: <span>5989024</span></h4>
                                                    </div> */}
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-12">
                                                <div className="cardsstartsss">
                                                    <div className="downtext">
                                                        <h3>House (For Loot)</h3>
                                                        <p>House (For Loot) is the first and largest 3D interpretation of an entire category in Loot. Adventurers, builders, and artists are encouraged to reference House (For Loot) to further expand on the imagination of Loot.</p>
                                                    </div>
                                                    <div className="mint">
                                                        <button type="button">Mint</button>
                                                    </div>
                                                    <div className="main-sect">
                                                        <div className="vew">
                                                            <Link><h4>View Contract</h4></Link>
                                                        </div>
                                                        <div className="socials">
                                                            <i class="fab fa-twitter"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="chapter3" id="chapterthree">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-xl-10 col-lg-11 m-auto">
                                <div className="shdsjxc">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-12">
                                            <div className="header0-dowm">
                                                <h3>NFTs will earn the $MEST token for every transaction done in the city that they own on their NFT. </h3>
                                                <h5>
                                                    There will also be traits and rarities. Let’s say only 1% of the NFTs have Houston in it. And only 1% has New York, and 2% has Dallas. That NFT will be very rare since those cities won’t be on every NFT.
                                                </h5>
                                                <p>For Example: If you own the NFT that has Houston,Dallas,New York. That NFT will be worth more because it will receive more fees since the city and population is bigger. </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-12">
                                            <div className="imgsss">
                                                <img src="\Loot\header.png" alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Chapter2;
