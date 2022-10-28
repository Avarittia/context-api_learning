import React, { useContext, useState } from "react";
import storeItems from "../data/data.json";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import StoreItems from "../component/StoreItems";
import Banner from "../component/Banner";
import StoreFooter from "../component/StoreFooter";
import CartContext from "../Context/CartContext";

const Store = () => {
  const {filterType} = useContext(CartContext)
  const [searchText, setSearchText] = useState("");

  // const [type, setType] = useState([storeItems]);

  // const filterType = (category) => {
  //   setType(storeItems => {
  //     return storeItems.filter((items) => items.category === category);
  //   });
  // };

  return (
    <>
      <Banner />
      <Container className="mt-5 p-5">
        {/* <Button onClick={()=>filterType("burger")}></Button> */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search"
            autoComplete="off"
          />
        </Form.Group>

        <h4 className="mt-5 text-primary outline-0">Foods We Offer</h4>
        <Row md={2} xs={1} lg={3} className="g-5">
          {storeItems
            .filter((value) => {
              if (searchText === "") {
                return value;
              } else if (
                value.name.toLowerCase().includes(searchText.toLowerCase())
              ) {
                return value;
              }
            })
            .map((item) => {
              return (
                <Col key={item.id}>
                  <StoreItems {...item} />
                </Col>
              );
            })}
        </Row>
      </Container>
      <StoreFooter/>
    </>
  );
};

export default Store;
