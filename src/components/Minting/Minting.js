import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import './banner.scss';
import '../main-banner/banner.scss'
import { useSelector } from 'react-redux'
import { useWeb3React } from '@web3-react/core'
// import Signature from '../../../SignMessage/Signature';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux'
import { HashLink } from 'react-router-hash-link';

const Mintingn = () => {
    // useEffect(() => {
    //     window.scrollTo(0, 0)
    //   }, [])
    // const lightMode = useSelector((state) => state.themereducer.lightMode)
    // const context = useWeb3React();
    // const { account, activate, deactivate } = context;
    // const { userSign } = Signature(account);

    // const history = useHistory();
    // const UserSignWindow = async () => {
    //     const tx = await userSign();
    //     if (tx) {
    //         history.push('/createnft');
    //     }
    //     else {
    //         console.log("tx==========", tx)
    //         // history.push('/')
    //         toast.error("Sign Wallet First")
    //     }
    // }

    return (
        <>
            <div className="djjsdjnds">
                <section className="main-banners ptb ">
                    <div className="sndsjdb"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">

                                <div className="inner-content text-center ">
                                    <h2>META DISTRICTS</h2>
                                    <h3 className="snsb">NFTs for the Meta State Metaverse. Owning these NFTs will give you tokens by holding. You’ll earn a percent of each transaction done in the Metaverse.</h3>
                                    <p className="shbshjbf">By owning these NFTs you’ll earn a percent of all the real estate transactions done in that Meta Verse city. </p>
                                    <p className="ajdjdw">You can also think about how valuable they are based on adoption of where most transactions might take place first. For instance we’re USA based so US cities might be more valuable on your NFT as well.</p>
                                    <div className="socials">
                                        <div className="oness">
                                            <div className="SAND">
                                                <i class="fab fa-twitter"></i>
                                            </div>
                                        </div>
                                        <div className="oness">
                                            <div className="SAND">
                                                <i class="fab fa-discord"></i>
                                            </div>
                                        </div>
                                        <div className="oness">
                                            <div className="SAND">
                                                <i class="fab fa-telegram-plane"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="navb ">
                    <div className='hbjbz'>
                        <div className="ahsjab">
                            <HashLink to="#chapterone">
                            <h4>
                                Get Percent
                            </h4>
                            </HashLink>
                            
                        </div>
                        <div className="ahsjab">
                        <HashLink to="#chaptertwo">
                            <h4>
                                Gear Up
                            </h4>
                            </HashLink>
                        </div>
                        <div className="ahsjab">
                        <HashLink to="#chapterthree">
                            <h4>
                                Traits
                            </h4>
                            </HashLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mintingn;
