// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;


contract Retailing {
    address public customer;
    address public owner;
    uint256 public value;


function paid(address buyer, uint256 value) public {
    require(value < 1);
     owner = msg.sender;
     customer = buyer;
}
} 