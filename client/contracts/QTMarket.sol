//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "hardhat/console.sol";

contract QTMarket is ReentrancyGuard {
    using Counters for Counters.Counter;


    Counters.Counter private _tokenIds;

    address payable owner;

    uint256 listingPrice = 0.045 ether;

    constructor() {
        //set the owner
        owner = payable(msg.sender);
    }

    // structs can act like objects

    struct MarketToken {
        uint256 itemId;
        address nftContract;
        uint256 tokenId;
        address payable seller;
        address payable owner;
        uint256 pricePerDay;
        string[] datesBooked;
    }

    mapping(uint256 => MarketToken) private idToMarketToken;

    event MarketTokenMinted(
        uint256 indexed itemId,
        address indexed nftContract,
        uint256 indexed tokenId,
        address seller,
        address owner,
        uint256 pricePerDay,
        string[] datesBooked
    );
    // event for user booking real estate
    event newDatesBooked(
        address indexed nftContract,
        uint256 indexed itemId,
        string[] datesBooked,
        address renter
    );

    event sendTransferTo(address owner);

    event withdrawMoney(
        address indexed nftContract
    );

    // get the listing price
    function getListingPrice() public view returns (uint256) {
        return listingPrice;
    }

    function makeMarketItem(
        address nftContract,
        uint256 tokenId,
        uint256 pricePerDay,
        string[] memory datesBooked
    ) public payable nonReentrant {
        require(pricePerDay > 0, "Price must be at least one wei");
        require(
            msg.value == listingPrice,
            "Price must be equal to listing price"
        );

        _tokenIds.increment();
        uint256 itemId = _tokenIds.current();

        //putting it up for sale - bool - no owner
        idToMarketToken[itemId] = MarketToken(
            itemId,
            nftContract,
            tokenId,
            payable(msg.sender),
            payable(address(0)),
            pricePerDay,
            datesBooked
        );

        // NFT transaction
        IERC721(nftContract).transferFrom(msg.sender, address(this), tokenId);

        emit MarketTokenMinted(
            itemId,
            nftContract,
            tokenId,
            msg.sender,
            address(0),
            pricePerDay,
            datesBooked
        );
    }

    //Check day booking
    function checkBooking(uint256 id, string[] memory newBookings)
        private
        view
        returns (bool)
    {
        for (uint256 i = 0; i < newBookings.length; i++) {
            for (
                uint256 j = 0;
                j < idToMarketToken[id].datesBooked.length;
                j++
            ) {
                if (
                    keccak256(
                        abi.encodePacked(idToMarketToken[id].datesBooked[j])
                    ) == keccak256(abi.encodePacked(newBookings[j]))
                ) {
                    return false;
                }
            }
        }
        return true;
    }

    function addDatesBooked(address nftcontract, uint256 id, string[] memory newBookings)
        public
        payable
    {
        require(checkBooking(id, newBookings), "Already booked");
        for (uint256 i = 0; i < newBookings.length; i++) {
            idToMarketToken[id].datesBooked.push(newBookings[i]);
        }
        payable(owner).transfer(msg.value);
        emit newDatesBooked(
            nftcontract,
            id,
            newBookings,
            msg.sender
        );
    }

    function fetchMarketTokens() public view returns(MarketToken[] memory) {
        uint itemCount = _tokenIds.current();
        uint currentIndex = 0;

        // looping over the number of items created (if number has not been sold populate the array)
        MarketToken[] memory items = new MarketToken[](itemCount);
        for(uint i = 0; i < itemCount; i++) {
            if(idToMarketToken[i + 1].owner == address(0)) {
                uint currentId = i + 1;
                MarketToken storage currentItem = idToMarketToken[currentId];
                items[currentIndex] = currentItem; 
                currentIndex += 1;
            }
        } 
        return items; 
    }

    function sendTransfer(address payable _to) public payable {
       payable(_to).transfer(msg.value * 70 / 100);
       emit sendTransferTo(_to);
    }

    function getBalance() public view returns(uint) {
        return address(this).balance;
    }

    function withdrawMoneyTo(address nftContract) public payable {
        payable(owner).transfer(getBalance());
        emit withdrawMoney(nftContract);
    }
}
