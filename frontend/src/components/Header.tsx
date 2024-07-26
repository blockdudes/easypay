import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { ConnectWalletButton } from "./ConnectWalletButton";
import { useNavigate } from "react-router-dom";

export const Header = ({
  isPublic,
  setDirection,
}: {
  isPublic: boolean;
  setDirection: (direction: "left" | "right") => void;
}) => {
  const navigate = useNavigate();

  const handleNavigation = (direction: "left" | "right") => {
    const path = isPublic ? "/private" : "/public";
    navigate(path);
    setDirection(direction);
  };

  return (
    <div className="h-24 w-full flex justify-between items-center px-10">
      <div className="flex justify-center items-center">
        <div className="text-4xl font-medium mr-5">
          {isPublic ? "Public" : "Private"}
        </div>
        <FaChevronLeft
          size={30}
          onClick={() => {
            console.log("left");
            return handleNavigation("left");
          }}
          className="mx-2 cursor-pointer"
        />
        <FaChevronRight
          size={30}
          onClick={() => {
            console.log("right");
            return handleNavigation("right");
          }}
          className="mx-2 cursor-pointer"
        />
      </div>
      <ConnectWalletButton />
    </div>
  );
};
