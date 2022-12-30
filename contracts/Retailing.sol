// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;


contract Retailing {
    address public customer;
    address public owner;


function paid(address buyer) public {
     owner = msg.sender;
     customer = buyer;
}
} 