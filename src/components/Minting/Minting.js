import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Minting/minting.scss'
import { useSelector } from 'react-redux'
import { useWeb3React } from '@web3-react/core'
// import Signature from '../../../SignMessage/Signature';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux'
import { HashLink } from 'react-router-hash-link';

const Mintingn = () => {
    
    return (
        <>
            <div className="djjsdjnds">
                <section className="minting">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-10 col-lg-11 m-auto">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-12">
                              <div className="leftside">
                                  <h3>
                                  Gbeaks metaverse play to earn: Explore, mine, trade and govern.  various gameplays, such as, RPG, management, NFT collection, Battle, Auction, Breed and more
                                  </h3>
                                  <button type="button">MINT NFTs</button>
                                  <h1>Currently Minted : 47/20000</h1>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12">
                            {/* <div className="right-side"> */}
                                <div className="img_wrapper">
                                <img src="\Loot\decentraland_cover_Twitter_large_1637063730543.webp" alt="" className="img-fluid" />
                                </div>
                            {/* </div> */}
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

export default Mintingn;
