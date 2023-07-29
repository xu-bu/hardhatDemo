// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract GoerliNFT is ERC721URIStorage, Ownable {
    constructor() ERC721("QuickNode Sharks", "QNS") {}
    function mint(
        address _to,
        uint256 _tokenId,
        string calldata _uri
    ) external onlyOwner {
        _mint(_to,_tokenId);
        _setTokenURI(_tokenId,_uri);
    }

    function getMessage() external pure returns(string memory){
        return "test";
    }
}