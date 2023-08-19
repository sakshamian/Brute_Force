import React from "react";
import {
  Row,
  Col,
  Table,
} from "react-bootstrap";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { useSelector} from "react-redux";
import { useGetMyOrdersQuery } from "../slices/ordersApiSlice";
import { selectToken } from "../slices/tokenSlice";
// import { useGetUserDetailsQuery } from "../slices/usersApiSlice";

const SuperCoinBalance = ({ coins }) => {
    return (
        <Row>
        
      <div style={{padding:'40px'}}>
      <h4>
  ZipCoin Balance: <span style={{ color: 'orange' }}>{coins}</span>
  <img src="https://rukminim2.flixcart.com/lockin/32/32/images/super_coin_icon_22X22.png?q=90" alt="XCoin Icon" style={{ width: '14px', height: '16px', marginLeft: '5px' }} />
</h4>    
  </div>
      <div >
      <img style={{width:'91%',height:'100%'}} src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1690301873/Croma%20Assets/CMS/LP%20Page%20Banners/2023/ZipCare/HP%20Highlights%20and%20Rotating/Zipcare_Homepagerotating_Desktop_bfpb4y.png?tr=w-2048' alt='hey'/>

        </div>
        </Row>
    );
  };
  const CoinAct = () => {
    const coins= useSelector(selectToken);
    const { data: orders, isLoading, error } = useGetMyOrdersQuery();

    return (
        <Row>
      <div className="super-coins-page">
        
        <SuperCoinBalance coins={coins} />

        
      </div>
      <Col md={11}>
        <h2 style={{marginTop:'30px'}}>Recent Transactions</h2>
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error?.data?.message}</Message>
        ) : (
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Transaction Date</th>
                <th>Coins</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order.orderItems[0].name}</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>+{Math.min(Math.floor(order.totalPrice % 15 * 4),40)}</td>
                </tr>
              ))}
              <tr>
                <td>Welcome Bonus</td>
                <td>2023-08-18</td>
                <td>+10</td>
              </tr>
            </tbody>
          </Table>
        )}
      </Col>
      </Row>
    );
  };
  
  export default CoinAct;