
import Web3 from 'web3'
import { contractAddress, abi } from '../utills/constant'
// import { useDispatch } from 'react-redux'

// import { useSelector } from 'react-redux';

export const MintNft = async (accountAd) => {
    try {
        const web3 = window.web3;
        let contract = new web3.eth.Contract(abi, contractAddress);
        const card = await contract.methods.price().call();
        console.log("card", card);
        // setCards(card[1])
        const mint = await contract.methods.mint(accountAd).send({
            value: card,
            from: accountAd
        }).then(() => { return true });

        return mint;
        // console.log(card[1])
        // console.log(card[1])
    } catch (error) {
        console.log("Error while fetching acounts: ", error);

    }
}
export const loadWeb3 = async () => {
    const getaddress = async () => {
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
                // accountAd = accounts[0];
                // setAccount(accountAd);
                // balanceOf()
                return accounts;
            }
            // imgFun();
        } catch (error) {
            console.log("Error while connecting metamask", error);
        }
    }
    return getaddress;
};

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