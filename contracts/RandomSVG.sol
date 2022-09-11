//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@chainlink/contracts/src/v0.8/VRFConsumerBaseV2.sol";

contract RandomSVG is ERC721URIStorage, VRFConsumerBaseV2 {

    constructor(address _VRFCoordinator, address _LinkToken, bytes32 _keyHash, uint256 _fee) 
    VRFConsumerBase(_VRFCoordinator, _LinkToken) 
    ERC721("RandomSVG", "rsNFT") 
    {
        fee = _fee;
        keyHash = _keyHash;
    }
}