// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

contract myContract{
    string public message;
    constructor (string memory _message){
        message=_message;
    }

    function updateMessage(string memory _message) public {
        message=_message;
    }

    function getMessage()public view returns(string memory){
        return message;
    }
}
