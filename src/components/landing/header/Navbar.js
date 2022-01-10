
import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import './navbar.scss';
import { Link } from 'react-router-dom';

import Web3 from 'web3'
import { contractAddress, abi } from '../../utills/constant'

const Navbar = () => {

    let accountAd;
    const [value, setValue] = useState("")
    const [account, setAccount] = useState("Connect Wallet");
    const [button, setButton] = useState("Bet Now!")
    const [buttonState, setButtonState] = useState(false)
    const [cards, setCards] = useState()
    const [comp, setComp] = useState(true)
    const [cardData, setCardData] = useState()
    const [withDraw, setWithDraw] = useState("Withdraw")
    const [mybalance, setMybalance] = useState("")
    const [cardList, setCardList] = useState([])
    const [total, setTotal] = useState()
    const [compWithdraw, setCompWithdraw] = useState(true)
    const [checkOut, setCheckOut] = useState(true)
    const [withDrawButton, setWithDrawButton] = useState("Checkout")
    const [cardImage, setCardImage] = useState("")
    const [indexes, setIndexes] = useState([])


    let accounts;
    const getAccounts = async () => {
        const web3 = window.web3;
        try {
            accounts = await web3.eth.getAccounts();
            return accounts;
        } catch (error) {
            console.log("Error while fetching acounts: ", error);
            return null;
        }
    };

    const loadWeb3 = async () => {
        let isConnected = false;
        const web3 = window.web3;
        try {
            if (window.ethereum) {
                window.web3 = new Web3(window.ethereum);
                await window.ethereum.enable();
                isConnected = true;
            } else if (window.web3) {
                window.web3 = new Web3(window.web3.currentProvider);
                isConnected = true;
            } else {
                isConnected = false;
                console.log("Metamask is not installed, please install it on your browser to connect.");
            }
            if (isConnected === true) {
                let accounts = await getAccounts();
                accountAd = accounts[0];
                setAccount(accountAd);
                // balanceOf()
            }
            // imgFun();
        } catch (error) {
            console.log("Error while connecting metamask", error);
        }
    };

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
                                            <Link to="/Minting" class="nav-link" href="sds">Minting</Link>
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
                                        <button className="nav-buttoo" type="button" onClick={loadWeb3}>{account}</button>
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
