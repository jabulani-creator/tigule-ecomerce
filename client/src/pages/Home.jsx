import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { Loader, Product } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../features/allProducts/allProductsSlice";

const Home = () => {
  const { products, isLoading } = useSelector((store) => store.allProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <h1>Latest Product</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product {...product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Home;
