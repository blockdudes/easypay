import { Card, IconButton } from "@material-tailwind/react";
import { useState } from "react";
import { TbCopy, TbCopyCheck } from "react-icons/tb";

export const PublicAddressCard = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <Card
      className="w-full h-full flex flex-col justify-between shadow-2xl border-[1px] border-app-gray p-5"
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <div className="flex flex-col justify-start items-start gap-1">
        <div className="text-2xl font-semibold">Public Address</div>
        <div className="w-5/6 flex items-center gap-1">
          <div className="text-xl text-black font-light truncate">
            0x23nsja321msdann312jmsanda
          </div>
          <IconButton
            variant="text"
            color="gray"
            size="sm"
            onClick={handleCopy}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {copied ? <TbCopyCheck size={20} /> : <TbCopy size={20} />}
          </IconButton>
        </div>
      </div>
      <div className="flex gap-1">
        <div className="h-5 w-2/6 bg-app-yellow rounded-md" />
        <div className="h-5 w-4/6 bg-app-red rounded-md" />
      </div>
    </Card>
  );
};