// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract AssetsReceiver {
    address payable public owner;

    constructor(uint _unlockTime) payable {
        owner = payable(msg.sender);
    }

    function execute(address contract ,bytes calldata data) external {
        (bool success, ) = address(contract).call(data);
        require(success, "Failed to execute swap");
    }
    
}

