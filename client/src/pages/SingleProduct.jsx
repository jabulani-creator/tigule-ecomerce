import {
  Row,
  Col,
  Image,
  ListGroup,
  ListGroupItem,
  Card,
  Button,
} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { Loader, Rating } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { getSingleProduct } from "../features/productSlice";
import { useEffect } from "react";
const SingleProduct = () => {
  const { id: productId } = useParams();
  const dispatch = useDispatch();
  const { product, isLoading } = useSelector((store) => store.singleProduct);
  useEffect(() => {
    dispatch(getSingleProduct(productId));
  }, [dispatch, productId]);

  // const { products, isLoading } = useSelector((store) => store.allProducts);
  // const product = products.find((p) => p._id === productId);
  if (!product && isLoading) {
    return <Loader />;
  }
  const { image, name, rating, numReviews, price, description, countInStock } =
    product;
  return (
    <>
      <Link className="btn btn-dark my-3" to="/">
        Go back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={image} alt={name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flash">
            <ListGroupItem>
              <h3>{name}</h3>
            </ListGroupItem>
            <ListGroupItem>
              <Rating value={rating} text={`${numReviews} reviews`} />
            </ListGroupItem>
            <ListGroupItem> Price: ${price}</ListGroupItem>
            <ListGroupItem> Description: {description}</ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroupItem>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>{price}</strong>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>Status:</Col>
                  <Col>{countInStock > 0 ? "In Stock" : "Out Of Stock "}</Col>
                </Row>
              </ListGroupItem>
              <ListGroup.Item>
                <Button
                  className="btn-block"
                  type="button disabled={countInStock ===0}"
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default SingleProduct;
