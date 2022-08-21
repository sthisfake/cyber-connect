declare var window: any


function ConnectButton() {
    // Check function if MetaMask is installed
    const isMetaMaskInstalled = () => {
      const { ethereum } = window;
      return Boolean(ethereum && ethereum.isMetaMask);
    };
  
    const handleOnClick = async () => {
      if (isMetaMaskInstalled()) {
        // Request to connect to MetaMask
        try {
          const accounts = await window.ethereum.request({
            method: "eth_requestAccounts"
          });
          alert(`Connected with: ${accounts[0]}`);
        } catch (error) {
          console.error(error.message);
        }
      } else {
        alert("Please install MetaMask.");
      }
    };
  
    return (
      <button className="connectButton" onClick={handleOnClick}>
        Connect wallet
      </button>
    );
  }
  
  export default ConnectButton;
  