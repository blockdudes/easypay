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

const WithdrawDialog = ({
  open,
  handleClose,
  transaction,
}: {
  open: boolean;
  handleClose: () => void;
  transaction: Transaction;
}) => {
  const [address, setAddress] = useState("");

  const handleWithdraw = () => {
    console.log("Withdraw", transaction, "to:", address);
    handleClose();
  };

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
