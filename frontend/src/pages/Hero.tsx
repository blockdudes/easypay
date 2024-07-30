import { useEffect } from "react";
import { ConnectWalletButton } from "../components/ConnectWalletButton";
import { useActiveWalletConnectionStatus, useActiveAccount } from "thirdweb/react";
import axios from "axios";

const Hero = () => {
    const connectionStatus = useActiveWalletConnectionStatus();
    const account = useActiveAccount();

    useEffect(() => {
        if(connectionStatus === "connected") {
            
        } else {
            console.log("wallet not connected");
        }
    }, [connectionStatus]);


    const onBoardingData = async () => {
        try {
            return (await axios.get(`http://localhost:3000/get-asset-receiver?owner=${account?.address}`)).data;
        }catch(error) {
            console.log(error);
        }
    }

    return (
        <div>
            Hero

            <button onClick={onBoardingData}>click me</button>

            <ConnectWalletButton />
        </div>
    )
}

export default Hero