import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";

import { Transaction } from "../types/types";

import { transactionHistoryType } from "../types/types";
import { useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";

const WithdrawDialog = ({
  open,
  handleClose,
  transaction,
}: {
  open: boolean;
  handleClose: () => void;
  transaction: transactionHistoryType;
}) => {
  const [address, setAddress] = useState("");

  const { provider, signer, umbra, stealthKeyRegistry } = useAppSelector((state: RootState) => state.connectWallet);

  // const handleWithdraw = () => {
  //   // console.log("Withdraw", transaction, "to:", address);
  //   handleClose();
  // };


  const handleWithdraw = async () => {
    try {
      const tx: transactionHistoryType = transaction;
      console.log(tx.randomnumber);

      if (provider && signer && umbra && stealthKeyRegistry) {
        if (tx.type === "private") {
          const { spendingKeyPair } = await umbra.generatePrivateKeys(signer);
          const stealthKeyPair = await spendingKeyPair.mulPrivateKey(tx.randomnumber!);
          const stealthPrivateKey = stealthKeyPair.privateKeyHex;
          if (stealthPrivateKey) {
            console.log(stealthKeyPair.address);
            if (tx.token === "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE") {
              await umbra.withdraw(stealthPrivateKey, tx.token, address);
              
              let existingObjects: transactionHistoryType[] = JSON.parse(localStorage.getItem("scanPrivateData") || "[]");
              const findTx = existingObjects.find(obj => obj.randomnumber === tx.randomnumber);
              if (findTx) {
                findTx.iswithdrawn = true;
              }
              localStorage.setItem("scanPrivateData", JSON.stringify(existingObjects));
            } else {
              console.log("withdraw for token not supported");
            }
          } else {
            console.log("stealth private key not found");
          }
        } else {
          console.log("public")
        }
      } else {
        console.log("connect your wallet");
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Dialog
      open={open}
      handler={handleClose}
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <DialogHeader
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        Withdraw Funds
      </DialogHeader>
      <DialogBody
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <Typography
          variant="lead"
          color="black"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Enter the address to withdraw the funds to:
        </Typography>
        <Input
          value={address}
          labelProps={{
            className: "hidden",
          }}
          className="!border-app-gray"
          onChange={(e) => setAddress(e.target.value)}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          crossOrigin={undefined}
        />
      </DialogBody>
      <DialogFooter
        className="w-full grid grid-cols-4 justify-center items-center gap-4"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <div className="col-span-2" />
        <Button
          onClick={handleClose}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Cancel
        </Button>
        <Button
          onClick={handleWithdraw}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Withdraw
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default WithdrawDialog;
