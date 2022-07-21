import Web3Modal from 'web3modal';
function login() {

    const web3Modal = new Web3Modal()

    const connection = await web3Modal.connect()

    const provider = new ethers.providers.Web3Provider(connection)

    const signer = await provider.getSigner()

    const signerAddress = await signer.getAddress();

    return signerAddress;
}