// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract XKYC is Ownable{

    //customer details
    struct Customer{
        string cnxid;
        string email;
        string kycDocCID;
        string    verificationStatus; //pending, verified, rejected
    }

    //store customer details in mapping 
    mapping(address => Customer) public Customers;

    //array of verified addresses
    address[] verifiedMembers;

    //array of pending verifications
    address[] pendingVerifications;

    //array of rejected verifications
    address[] rejectedRequests;

    bool public locked;

    //chainlink pricefeed to check BNB price
    AggregatorV3Interface internal priceFeed;

    /**
     * Modifier to limit access to only the admin: 
     * @ONLYOWNER 
     */

    //add means to check that only those registered with CNX can do it

    /**
     * Modifier to prevent reentrancy in functions: nonReentrant
     */
    constructor(){
        //TODO: change the pricefeed address to that of the mainnet when changing to production:
        //BNB MAINNET feed address: 0x0567F2323251f0Aab15c8dFb1967E4e8A7D42aeE
        //current one is sepolia testnet pricefeed address for ETH/USD.
        priceFeed = AggregatorV3Interface(0x694AA1769357215DE4FAC081bf1f309aDC325306);
    }
    //events:
    //successfully submitted application
    //successfully changed customer verification status to..${status}


    //Customer functions: 
    //will be able to submit request for verification: add customer struct to mapping with address as key
    //will be able to view verification status

    //admin functions:
    //verify address
    //revoke verification
    //view all addresses and their statuses? or search for an address to view its status

    /**
     * Get price from feed in int256, amount charged will be as returned here
     */
    function getBNBprice() public view returns (int256){
        (uint80 roundID,
         int256 answer,
          uint256 startedAt, 
          uint256 timeStamp,
          uint80 answeredInRound) = priceFeed.latestRoundData();

        return answer;
    }

    function submitDetails(Customer memory details) public payable returns (bool){
        //will charge a fee of about 1.56USD in total, inclusive of gas
        //set gas limit = 0.29USD
        //fetch live price from chainlink, calculate using that price 
        details.verificationStatus = 'Unverified';
        Customers[msg.sender] = details;
        address payable owner = payable(owner());
        owner.transfer(msg.value); //send tx money to owner's wallet
    


    }
}