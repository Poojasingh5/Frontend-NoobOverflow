import React from "react";
import "antd/dist/antd.css";
import { style } from "./style.css";
import { Row, Col } from "antd";
import ProductInfo from "./ProductInfo";
import ProductImage from "./ProductImage";
import logo from "./logo.jpg";
const flags = [
  {
    id: 1,
    Prod_name: "C++",
    Seller_name: "ABC",
    category: "books",
    sell_price: "100",
    rent_price: "10",
    saleorrent: 0,
    desc: "good condition",
    image:
      "data:image/jpeg;base64,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",
  },
];

function DetailProductPage() {
  return (
    <div>
      <div class="header">
        <a href="/home" class="logo">
          <img class="chat-img" src={logo} alt="BUYLEND" />
        </a>
      </div>
      <div className="postPage" style={{ width: "85%", padding: "3rem 4rem" }}>
        <br />

        <Row gutter={[16, 16]}>
          <Col lg={12} xs={24}>
            <ProductImage flags={flags} />
          </Col>

          <Col lg={12} xs={24}>
            <ProductInfo flags={flags} />
          </Col>
        </Row>
      </div>
    </div>
  );
}
export default DetailProductPage;
