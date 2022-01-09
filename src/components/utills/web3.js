
import Web3 from 'web3'


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