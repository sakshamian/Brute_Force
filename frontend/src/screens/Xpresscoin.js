import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { selectToken, setToken } from '../slices/tokenSlice';
import { useState } from 'react';
import { GetBalance, SpendTokens } from '../web3/coinServices';

const TokenEarningRules = () => {
    return (
      <div className="token-earning-rules">
        <h2>Rules and Guidelines</h2>  
        <h5>How To Earn more Zip coins: </h5>
        <ul>
          <li>You can earn 4 coins per $15 spent and a maximum of 40 ZipCoins per order.</li>
          <li>Refer to your family members and friends and earn 5 ZipCoins.</li>
          <li>Complete 5 product reviews this month and earn 10 ZipCoins for meeting the challenge.</li>
          <li>Earn 2 ZipCoins by sharing purchases on social media.</li>
          <li>You can play Games on the Express App and win ZipCoins.</li>
          <li>You can check details on the Order History page or the ZipCoins Zone.</li>
        </ul>  
        <h5>How To Use Zip coins: </h5>
        <ul>
          <li>You can pay using ZipCoins for products on Express. Use the " ZipCoins Price" filter to find applicable products.</li>
          <li>Buy coupons & EGVs from the  ZipCoins Zone.</li>
          <li>Buy exclusive deals on  ZipCoins Zone using  ZipCoins.</li>
        </ul>  
        <h5>Validity: </h5>
        <p>ZipCoins will expire after one year from the date of credit. For e.g  ZipCoins credited on 20th August 2023 will expire on 30th June 2024.</p>
         
        <h5>Must Know: </h5>
        <p>ZipCoins will be credited once the Return Policy period of all items in your order is completed. You can check all transactions of ZipCoins by visiting your SuperCoin Zone.</p>
       <p>Once 'Rewards' are purchased from ZipCoins they cannot be cancelled or returned.</p>
  
        <h5>Fraud Prevention and Rules Violations:</h5>
        <p>Engaging in fraudulent activities or violating the established rules will result in penalties. Penalties may include the loss of earned tokens or suspension of accounts, as deemed appropriate by our team.</p>
  
        <h5>Dispute Resolution:</h5>
        <p>If users believe there has been an error in the allocation of earned tokens, a designated procedure for dispute resolution is in place. Please contact our support team for assistance.</p>
  
        <h5>Updates and Modifications:</h5>
        <p>These rules and guidelines may be subject to updates or modifications over time. Users will be informed of any changes that could impact their ability to earn tokens within our ecosystem.</p>
  
        <h5>Privacy and Data Protection:</h5>
        <p>We prioritize user privacy and data protection. Your data will be used in accordance with our privacy policy. Rigorous security measures are in place to safeguard your information.</p>
    
        <h5>Legal Considerations:</h5>
        <p>Earning tokens does not constitute a legal claim to any financial or material benefits. Tokens hold no intrinsic value outside of our designated ecosystem.</p>
      </div>
    );
  };
  
const Header = () => {
  return (
    
        <Container>
            <div >
            <LinkContainer to='/Coin-activites'>
            <div >
                <button style={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
            transition: "background-color 0.3s ease",
          }}> View coin activity </button>
                   
            </div>
        </LinkContainer>

    
    <div style={{padding:'20px'}}>
      <img style={{width:'100%',height:'100%'}} src='https://img.freepik.com/premium-vector/new-product-social-media-post-template_544391-80.jpg?w=1060' alt='hey'/>
    </div>
  </div>
</Container>
    
  );
};

const SuperCoinBalance = ({ coins }) => {
  return (
    <div style={{padding:'40px'}} >
 <h4 > 
  Coin Balance: <span style={{ color: 'orange' }}>{coins}</span>
  <img src="https://rukminim2.flixcart.com/lockin/32/32/images/super_coin_icon_22X22.png?q=90" alt="XCoin Icon" style={{ width: '16px', height: '16px', marginLeft: '5px' }} />
</h4>       </div>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>Zip Coins: Your Shopping Rewards</h2>
        <p>Love rewards? Zip Coins is here for you. Earn 4 Zip Coins for every 15$ spent.
        With Zip Coins, shop more, earn more!Members enjoy up to 40 Coins per order.
        Use your Zip Coins to pay for purchases or get vouchers from Gaana, Zomato, and more. Plus, buy products for just 1$.</p>

        <h2>Zip Coins: More Rewards, More Fun</h2>
        <p>Transform your Zip mart Plus Coins into Zip Coins, a reward system that offers even greater possibilities. Earn 4 Coins for every 15$ spent </p>
        <p>Maximize your rewards with up to 40 Coins per order. Leverage your Zip Coins for gift vouchers, memberships, or snag products starting from 1$. Dive into the world of enhanced rewards!</p>      </div>
    </footer>
  );
};

const ZipCoin = () => {
  const dispatch = useDispatch();

  const coins = useSelector(selectToken);
  
  const handleClick = async (num) => {
    await SpendTokens(dispatch, num);
    await GetBalance(dispatch);
  };

  useEffect(()=>{
    GetBalance(dispatch);
  },[]);

  const CouponPopup = ({ couponDetails, onClose }) => {
    return (
      <div className="coupon-popup-overlay">
        <div className="coupon-popup" style={{display:'flex'}}>
          <button className="close-button" onClick={onClose}>
            <span className="close-icon">&times;</span>
          </button>
          <div className="coupon-content">
            <div className="left-side">
              {/* Display coupon image */}
              <img src={couponDetails.image} alt="Coupon" style={{objectFit:'cover'}}/>
            </div>
            <div className="right-side">
              {/* Display coupon details */}
              <h3>{couponDetails.title}</h3>
              <p style={{color:'green'}}> {couponDetails.description} coins</p>
              {/* Additional details if needed */}
              <p>{couponDetails.additionalDetails}</p>
              <div className="terms-section">
                <h4>Key Terms & Conditions</h4>
                <ul>
                  <li>Discount applicable only on select products; check eligible products before claiming the Coupons</li>
                  <li>There will be no refunds of SuperCoins once Coupons is claimed</li>
                  <li>In case of part or full cancellation or return of the order, the discount and SuperCoins will be forfeited</li>
                  <li>For more details, please refer T&Cs</li>
                </ul>
              </div>
              <button className="claim-button" onClick={() => handleClick(couponDetails.description)}>Claim Now</button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Coupons = () => {
    const [selectedCoupon, setSelectedCoupon] = useState(null);
  
    const coupons = [
       { id: 1, title: '10% Off upto Rs.1000 on Domestic Flight Bookings.', description:40 ,image : 'https://media.istockphoto.com/id/935979488/vector/vector-gift-travel-voucher-template-flying-airplane-in-the-sky-banner-coupon-certificate.jpg?s=1024x1024&w=is&k=20&c=swcRqTX75nc24NmXOfTc0nZy9QUFz-DXXV36XDMNlUc=' },
       { id: 2, title: '12% Off upto Rs.200 on Big basket', description:10 ,image : 'https://img.freepik.com/premium-vector/grocery-store-discount-voucher-template-supermarket_606364-830.jpg?w=826' },
       { id: 3, title: 'Extra Flat 5000 Rs off on next purchases on Electronics with Savings Pass', description: '70',image :'https://previews.123rf.com/images/stacyt13/stacyt131606/stacyt13160600052/59590299-electronics-discount-voucher-templates-bright-sale-banner-with-kitchen-appliances.jpg' },
       { id: 4, title: 'Extra Rs. 5000 Off On Gaming Console', description:50 ,image :'https://www.shutterstock.com/image-vector/digital-voucher-on-smartphone-screen-600w-2284845657.jpg' },
       { id: 5, title: 'Rs.1500 Off on All Flight Bookings', description:10 ,image :'https://img.freepik.com/free-vector/cartoon-character-design_1150-46757.jpg?w=826&t=st=1692023622~exp=1692024222~hmac=829b842c940117ae1c9fc18b1c7bd93a6fbc96520a8042e1665277cc8cb72787'},
       { id: 6, title: 'Upto 70% Off on the next order on Uber Eats', description:15 ,image : 'https://media.istockphoto.com/id/842743080/vector/vector-design-gift-voucher-with-arrows-for-the-image.jpg?s=612x612&w=0&k=20&c=SCaqTcn-4GfE70TUHQSYKnW6oDTBfmGO0TRXGWKU3rY='}
    ];
  
    const openCouponPopup = (coupon) => {
      setSelectedCoupon(coupon);
    };
  
    const closeCouponPopup = () => {
      setSelectedCoupon(null);
    };
    return(
        <div className="redeem-coupons">
      <h2>Redeem Coupons</h2>
      <div className="coupon-slider ">
        {/* Add multiple coupon squares here */}
        <div className="coupon-slider">
          {coupons.map((coupon) => (
            <div
              className="coupon-square"
              key={coupon.id}
              onClick={() => openCouponPopup(coupon)}
            >
              <img src={coupon.image} alt="Coupon" />
            </div>
          ))}
        
        {/* Add more coupon squares as needed */}
    </div>
    </div>
    {selectedCoupon && (
          <CouponPopup couponDetails={selectedCoupon} onClose={closeCouponPopup} />
        )}
    </div>
  
    );
  };

  return (
    <div className="super-coins-page">
      <SuperCoinBalance coins={coins} />
      <Header />
      <Coupons />   
      <TokenEarningRules />
      <Footer />
    </div>
  );
};

export default ZipCoin;