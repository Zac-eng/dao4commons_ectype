// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "hardhat/console.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

/** 
* dao運用に特化したERC20
*/
contract DaoERC721 is ERC721,ReentrancyGuard{
    using Counters for Counters.Counter;
    // event IssuedMemberToken(address indexed sender, uint256 id);
    // event BurnedMemberToken(address indexed sender, uint256 id);

    address public owner;
    address public daoAddress;
    uint256 public priceWei;
    uint256 public salesAmount;
    bool public onSale;

    Counters.Counter private _tokenIdTracker;

    /** 
    * constructor
    */
    constructor(string memory name,string memory symbol,address _daoAddress,uint256 _priceWei) ERC721(name,symbol) {
        owner = msg.sender;
        daoAddress = _daoAddress;
        priceWei = _priceWei;
        onSale = false;
    }

    modifier onlyOwner(){
        require(owner == msg.sender);
        _;
    }

    /** 
    * トークンを販売する
    */
    function buy() public payable {
        require(onSale,"now not on sale.");
        require(msg.value==priceWei,"invalid transfering value.");
        _safeMint(msg.sender,_tokenIdTracker.current());
        _tokenIdTracker.increment();
        salesAmount += msg.value;
    }

    /** 
    * トークンセールの開始・終了を制御する
    */
    function controlTokenSale(bool _onSale) public onlyOwner {
        onSale = _onSale;
    }

    /** 
    * 収益を還元する
    */
    function withdraw() public onlyOwner {
        payable(daoAddress).transfer(salesAmount);
        salesAmount = 0;
    }

}
