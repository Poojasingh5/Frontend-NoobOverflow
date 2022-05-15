import React from 'react'
import { Descriptions } from 'antd';
import chat from './chat.png';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { style } from './style.css';
import { Row, Col } from 'antd';

function ProductInfo({ flags }) {

  let x = flags[0].saleorrent;
  let rent = "NOT AVAILABLE ON RENT";
  if (x > 0)
    rent = " AVAILABLE ON RENT";
  return (
    <div>

      <div class="card">

        <h2><u>Product Info</u></h2>
        <h3>Name: {flags[0].Prod_name}</h3>
        <p class="price">{flags[0].sell_price}</p>
        <p>Description: {flags[0].desc}</p>
        <p></p>
      </div>
      <div class="card">

        <h2><u>Seller Detail</u></h2>

        <h4>Name: {flags[0].Seller_name}</h4>

        <p><button>
          <Row gutter={[16, 16]} >
            <Col lg={8} xs={24}>
              <Router>
                <div>
                  <Link to="/chat">
                    <img class="chat-img" src={chat} alt="Chat with Seller" />
                  </Link>

                </div>
              </Router>
            </Col>
            <Col lg={12} xs={24}>
              <div class="seller-chat">
                Chat with Seller Directly!!
              </div>
            </Col>
          </Row>
        </button></p>
      </div>

      <br />



    </div>
  )
}

export default ProductInfo
