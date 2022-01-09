import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import './banner.scss';
import '../chapter1/chapter1.scss'
import { useSelector } from 'react-redux'
import { useWeb3React } from '@web3-react/core'
// import Signature from '../../../SignMessage/Signature';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux'

const Chapter1 = () => {


    return (
        <>
            <div>
                <section className="chapter1" id="chapterone">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-xl-10 col-lg-11 m-auto">
                                <div className="shdsjxc">
                                    <div className="headerss">
                                        <h6>THE QUEST BEGINS HERE</h6>
                                        <h2>Get  a Percent of Meta District</h2>
                                        <p>Meta District NFTs will launch soon! Each NFT will have three major cities on it.<br></br> 1,200 of the largest cities in the world.</p>
                                    </div>
                                    <div className="downcardss">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-6 col-12">
                                                <div className="cardsstart">
                                                    <img src="\Loot\unnamed-6.png" alt="" className="img-fluid" />
                                                    <div className="downtext">
                                                        <h3>Khartoum</h3>
                                                        <h4>Population: <span>5989024</span></h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 col-12">
                                                <div className="cardsstart">
                                                    <img src="\Loot\unnamed-5.png" alt="" className="img-fluid" />
                                                    <div className="downtext">
                                                        <h3>Taipei</h3>
                                                        <h4>Population: <span>2731208</span></h4>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="col-lg-4 col-md-6 col-12">
                                                <div className="cardsstart">
                                                    <img src="\Loot\unnamed-7.png" alt="" className="img-fluid" />
                                                    <div className="downtext">
                                                        <h3>Brussels</h3>
                                                        <h4>Population: <span>2095688</span></h4>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="shdsjxc sdvhdvh">
                                    <div className="headerss hddb">

                                        <h5>Sneak peak of NFTs will be released soon. Earn passive income in the Meta Estate world <br></br> off every transaction done. The bigger the city, the more valuable it is.</h5>

                                    </div>
                                    <div className="downcardss">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-6 col-12">
                                                <div className="cardsstart">
                                                    <img src="\Loot\unnamed-8.png" alt="" className="img-fluid" />
                                                    <div className="downtext">
                                                        <h3>Can Tho</h3>
                                                        <h4>Population: <span> 1,703,487</span></h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 col-12">
                                                <div className="cardsstart">
                                                    <img src="\Loot\unnamed-9.png" alt="" className="img-fluid" />
                                                    <div className="downtext">
                                                        <h3>Jakarta</h3>
                                                        <h4>Population: <span>10,915,346</span></h4>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="col-lg-4 col-md-6 col-12">
                                                <div className="cardsstart">
                                                    <img src="\Loot\unnamed-10.png" alt="" className="img-fluid" />
                                                    <div className="downtext">
                                                        <h3>Ningbo</h3>
                                                        <h4>Population: <span>4,263,843</span></h4>
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
            </div>
        </>
    )
}

export default Chapter1;
