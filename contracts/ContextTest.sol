// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract ContextTest {
    uint public value;
    address sender = msg.sender;
    function getSender() public view returns (address) {
        return sender;
    }
    function getGasPrice() public view returns (uint) {
        return tx.gasprice;
    }
    function getOrigin() public view returns (address) {
        return tx.origin;
    }
    function getBlockNumber() public view returns (uint) {
        return block.number;
    }
    function getContractBalance() public view returns (uint) {
        return address(this).balance;
    }
    
}