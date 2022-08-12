const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("QTMarket", function () {
  it("Should mint and trade NFTs", async function () {
    // test to receive contract addresses
    const Market = await ethers.getContractFactory("QTMarket");
    const market = await Market.deploy();
    await market.deployed();
    const marketAddress = market.address;

    const NFT = await ethers.getContractFactory("NFT");
    const nft = await NFT.deploy(marketAddress);
    await nft.deployed();
    const nftContractAddress = nft.address;

    // test to receive listing price and auction price
    let listingPrice = await market.getListingPrice();
    listingPrice = listingPrice.toString();

    const auctionPrice = ethers.utils.parseUnits("100", "ether");
    // test datesBooked

    // test for minting
    await nft.mintToken("https-t1");
    await nft.mintToken("https-t2");

    await market.makeMarketItem(nftContractAddress, 1, auctionPrice, [], {
      value: listingPrice,
    });
    await market.makeMarketItem(nftContractAddress, 2, auctionPrice, [], {
      value: listingPrice,
    });

    // test for different addresses from different users - test accounts
    // return an array of however many addresses
    const [_, buyerAddress] = await ethers.getSigners();

    // create a market sale with address, id and price
    await market
      .connect(buyerAddress)
      .addDatesBooked(nftContractAddress, 1, ["27/02/2022", "30/02/2022"], {
        value: auctionPrice,
      });

    await market
      .connect(buyerAddress)
      .addDatesBooked(nftContractAddress, 1, ["30/02/2022", "31/02/2022"], {
        value: auctionPrice,
      });

    let a2 = await market
      .connect(buyerAddress)
      .addDatesBooked(nftContractAddress, 2, ["29/02/2022"], {
        value: auctionPrice,
      });
    console.log(a2);

    let balance = await market.getBalance();
    // const priceWidthraw = ethers.utils.parseUnits(balance.toString(), "ether");

    // let widthraw = await market.withdrawMoneyTo(nftContractAddress, {
    //   value: priceWidthraw,
    // });

    // console.log(widthraw);

    // console.log(balance);

    let items = await market.fetchMarketTokens();

    items = await Promise.all(
      items.map(async (i) => {
        // get the uri of the value

        const tokenUri = await nft.tokenURI(i.tokenId);
        let item = {
          pricePerDay: i.pricePerDay.toString(),
          tokenId: i.tokenId.toString(),
          seller: i.seller,
          owner: i.owner,
          tokenUri,
          datesBooked: i.datesBooked.toString(),
        };
        return item;
      })
    );

    // test out all the items
    console.log("items", items);
  });
});
