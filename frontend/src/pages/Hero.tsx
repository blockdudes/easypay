import { useEffect } from "react";
import { ConnectWalletButton } from "../components/ConnectWalletButton";
import { useActiveWalletConnectionStatus, useActiveAccount } from "thirdweb/react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks";

const Hero = () => {
    const connectionStatus = useActiveWalletConnectionStatus();
    const account = useActiveAccount();
    const navigate = useNavigate();

    // const dispatch = useAppDispatch();
    const publicOnBoardingData = useAppSelector(state => state.publicOnBoarding);
    
    console.log(publicOnBoardingData);

    useEffect(() => {
        if(connectionStatus === "connected") {
            if (!publicOnBoardingData.error && !publicOnBoardingData.loading) {
                navigate("/public")
            } else {
                navigate("/onboarding/public")
            }
        } else {
            console.log("wallet not connected");
        }
    }, [connectionStatus]);


    

    return (
        <div>
            Hero

            <ConnectWalletButton />
        </div>
    )
}

export default Hero