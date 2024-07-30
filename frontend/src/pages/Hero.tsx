import { useEffect } from "react";
import { ConnectWalletButton } from "../components/ConnectWalletButton";
import { useActiveWalletConnectionStatus } from "thirdweb/react";
import { useAppDispatch } from "../app/hooks";
import { connectWallet } from "../app/features/connectWalletSlice";
import { Button, Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";

const Hero = () => {
  const dispatch = useAppDispatch();
  const connectionStatus = useActiveWalletConnectionStatus();

  useEffect(() => {
    if (connectionStatus === "connected") {
      console.log("connected");
      dispatch(connectWallet());
    } else {
      console.log("not connected");
    }
  }, [connectionStatus]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <motion.div
        className="h-24 fixed top-0 left-0 right-0 w-full flex justify-between items-center px-10 bg-white bg-opacity-70 backdrop-blur-md z-10"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
      >
        <Typography
          variant="h1"
          color="black"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Easypay
        </Typography>
        <div className="flex items-center gap-4">
          <Button
            variant="outlined"
            color="white"
            className="w-72 !bg-app-gradient rounded-full text-black font-normal"
            size="lg"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <div className="flex items-center justify-center gap-2">
              Launch app
            </div>
          </Button>
          <ConnectWalletButton />
        </div>
      </motion.div>
      <motion.div
        className="snap-y snap-mandatory overflow-y-scroll h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <motion.section
          className="snap-center snap-always"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ amount: 0.3 }}
        >
          <div className="h-screen flex items-center justify-between">
            <motion.div
              className="flex-1 flex flex-col justify-center items-center gap-4"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ amount: 0.3 }}
            >
              <Typography
                variant="h2"
                color="black"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Public Asset Management
              </Typography>
              <Typography
                variant="paragraph"
                color="black"
                className="w-96"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled
              </Typography>
            </motion.div>
            <motion.img
              src="/app-public-model.png"
              alt="hero"
              className="h-[800px] w-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ amount: 0.3 }}
            />
          </div>
        </motion.section>
        <motion.section
          className="snap-center snap-always"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ amount: 0.3 }}
        >
          <div className="h-screen flex items-center justify-between">
            <motion.img
              src="/app-private-model.png"
              alt="hero"
              className="h-[700px] w-auto"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ amount: 0.3 }}
            />
            <motion.div
              className="flex-1 flex flex-col justify-center items-center gap-4"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ amount: 0.3 }}
            >
              <Typography
                variant="h2"
                color="black"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Private Asset Management
              </Typography>
              <Typography
                variant="paragraph"
                color="black"
                className="w-96"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled
              </Typography>
            </motion.div>
          </div>
        </motion.section>
        <motion.section
          className="snap-center snap-always"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ amount: 0.3 }}
        >
          <div className="h-screen flex items-center justify-between">
            <motion.div
              className="flex-1 flex flex-col justify-center items-center gap-4"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ amount: 0.3 }}
            >
              <Typography
                variant="h2"
                color="black"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Private Transactions
              </Typography>
              <Typography
                variant="paragraph"
                color="black"
                className="w-96"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled
              </Typography>
            </motion.div>
            <motion.img
              src="/app-transaction-model.png"
              alt="hero"
              className="h-[700px] w-auto"
              initial={{ opacity: 0, scale: 1.2 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ amount: 0.3 }}
            />
          </div>
        </motion.section>
      </motion.div>
    </motion.div>
  );
};

export default Hero;