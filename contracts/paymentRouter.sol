pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Context.sol";
contract paymentRouter is Context {
    using SafeMath for uint256;
    event pay(string id , address from, address originFrom , address to , uint256 amount ,uint256 amountFinal, uint256 amountRouter , bool isPrepaid , uint256 time);
    event payToken(string id , address from, address originFrom , address to , uint256 amount ,uint256 amountFinal, uint256 amountRouter ,address token , bool isPrepaid , uint256 time);
    event withdraw(address from , address to , uint256 amount ,uint256 time);
    event withdrawToken(address from , address to , uint256 amount,address token ,uint256 time);
    uint256 public routerRateDecimail = 10000 ;

    bool internal locked = false;
    address public owner ;
    constructor() {
        owner = msg.sender;
    }
    function transfer(address to , uint256 amount , string memory id , uint routerRate) public payable
    {
        require(!locked);
        locked = true;
        bool isPre = true;
        require(msg.value >= amount , 'amount not enough');
        uint256 amountRouter = 0;
        uint256 amountFinal = amount;
        if(routerRate>0)
        {
            amountRouter = amount.mul(routerRate).div(routerRateDecimail);
            amountFinal = amount.sub(amountRouter);
            isPre=false;
        }
        payable(to).transfer(amountFinal);

        emit pay(id, msg.sender, msg.sender, to, amount,amountFinal, amountRouter, isPre, block.timestamp);
        locked = false;
    }

    function transferToken(address to , uint256 amount ,address token, string memory id ,uint routerRate) public
    {
        require(!locked);
        locked = true;
        bool isPre = true;
        uint256 amountRouter = 0;
        uint256 amountFinal = amount;
        if(routerRate>0)
        {
            amountRouter = amount.mul(routerRate).div(routerRateDecimail);
            amountFinal = amount.sub(amountRouter);
            isPre=false;
        }
        ERC20(token).transferFrom(_msgSender(), address(this), amount);

        ERC20(token).transfer(to, amountFinal);

        emit payToken(id, msg.sender, msg.sender, to, amount,amountFinal, amountRouter,token, isPre, block.timestamp);
        locked = false;
    }

    function withdraws(address to , uint256 amount ) public 
    {
        require(msg.sender == owner , 'permission deny');
        payable(to).transfer(amount);
        emit withdraw(msg.sender, to, amount, block.timestamp);
    }

    function withdrawTokens(address to ,address token, uint256 amount ) public 
    {
        require(msg.sender == owner , 'permission deny');
        ERC20(token).transfer(to, amount);
        emit withdrawToken(msg.sender, to, amount,token, block.timestamp);
    }
    
}