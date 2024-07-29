import { Typography, Button, Card } from "@material-tailwind/react";
import WithdrawDialog from "./WithdrawDialog";
import { useState } from "react";
import { transactionHistoryType } from "../types/types";

export const TransactionDataTable = ({
  headers,
  transactions,
  onWithdraw,
}: {
  headers: string[];
  transactions: transactionHistoryType[];
  onWithdraw?: (transaction: transactionHistoryType) => void | undefined;
}) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedTransaction, setSelectedTransaction] =
    useState<transactionHistoryType | null>(null);

  const handleOpenDialog = (transaction: transactionHistoryType) => {
    setSelectedTransaction(transaction);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedTransaction(null);
  };

  return (
    <>
      {openDialog && selectedTransaction && (
        <WithdrawDialog
          open={openDialog}
          handleClose={handleCloseDialog}
          transaction={selectedTransaction}
        />
      )}
      <Card
        className="w-full h-full flex flex-col justify-between shadow-2xl border-[1px] border-app-gray p-5 overflow-y-auto"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <table className="h-full w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {headers.map((head) => (
                <th
                  key={head}
                  className="p-4 text-center border-b-[1px] border-app-gray"
                >
                  <div
                    className={`text-2xl text-bold ${onWithdraw ? "text-app-brown" : "text-app-blue"
                      } leading-none opacity-70`}
                  >
                    {head}
                  </div>
                </th>
              ))}
              {onWithdraw && (
                <th className="p-4 text-center border-b-[1px] border-app-gray"></th>
              )}
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction: transactionHistoryType, index: number) => {
              return (
                <tr key={index} className="h-20">
                  <td className="p-4 text-center">{index + 1}</td>
                  <td className="p-4 text-center">
                    <Typography
                      variant="small"
                      color="black"
                      className="font-normal"
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {transaction.sender.slice(0, onWithdraw ? 6 : 12)}...
                      {transaction.sender.slice(-(onWithdraw ? 6 : 12))}
                    </Typography>
                  </td>
                  <td className="p-4 text-center">
                    <Typography
                      variant="small"
                      color="black"
                      className="font-normal"
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {transaction.date}
                    </Typography>
                  </td>
                  <td className="p-4 text-center">
                    <Typography
                      variant="small"
                      color="black"
                      className="font-normal"
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {transaction.chain}
                    </Typography>
                  </td>
                  <td className="p-4 text-center">
                    <Typography
                      variant="small"
                      color="black"
                      className="font-normal"
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {transaction.asset}
                    </Typography>
                  </td>
                  <td className="p-4 text-center">
                    <Typography
                      variant="small"
                      color="black"
                      className="font-normal"
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {transaction.amount}
                    </Typography>
                  </td>
                  <td className="p-4 text-center">
                    <Typography
                      variant="small"
                      color="black"
                      className="font-normal"
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {transaction.txnhash.slice(0, onWithdraw ? 8 : 16)}...
                      {transaction.txnhash.slice(-(onWithdraw ? 8 : 16))}
                    </Typography>
                  </td>
                  {onWithdraw && (
                    <td className="p-4 text-center">
                      {
                        transaction.iswithdrawn ? (
                          <Typography
                            variant="small"
                            color="green"
                            className="font-normal"
                            placeholder={undefined}
                            onPointerEnterCapture={undefined}
                            onPointerLeaveCapture={undefined}
                          >Withdrawn</Typography>
                        ) : (
                          <Button
                            variant="gradient"
                            size="sm"
                            color="brown"
                            className="w-full text-sm py-2 mx-0 font-medium normal-case"
                            onClick={() => handleOpenDialog(transaction)}
                            placeholder={undefined}
                            onPointerEnterCapture={undefined}
                            onPointerLeaveCapture={undefined}
                          >
                            Withdraw
                          </Button>
                        )
                      }
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </>
  );
};
