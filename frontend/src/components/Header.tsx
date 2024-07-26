import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { ConnectWalletButton } from "./ConnectWalletButton";

export const Header = ({ isPublic }: { isPublic: boolean }) => {
  return (
    <div className="h-24 w-full flex justify-between items-center px-10">
      <a
        href={isPublic ? "/private" : "/public"}
        className="flex justify-center items-center cursor-pointer"
      >
        <div className="text-4xl font-medium mr-5">
          {isPublic ? "Public" : "Private"}
        </div>
        <FaChevronLeft size={30} />
        <FaChevronRight size={30} />
      </a>
      <ConnectWalletButton />
    </div>
  );
};
