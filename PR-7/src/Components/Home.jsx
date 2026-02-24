import { useEffect, useState } from "react";
import { Card, Button, Row, Col, Container, Badge } from "react-bootstrap";
import { getStorageData, setStorageData } from "../services/storageData";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setProducts(getStorageData());
  }, []);

  const handleDelete = (id) => {
    const updatedData = products.filter((item) => item.id !== id);
    setProducts(updatedData);
    setStorageData(updatedData);
  };

  return (
    <Container className="mt-4">
      <Row>
        {products.length > 0 ? (
          products.map((product) => (
            <Col md={4} key={product.id} className="mb-4">
              <Card className="shadow-lg border-0 rounded-4 h-100">

                {/* Product Image */}
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={{ height: "200px", objectFit: "cover" }}
                />

                <Card.Body className="d-flex flex-column">

                  {/* Title + Category */}
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <Card.Title className="fw-bold fs-5 mb-0">
                      {product.title}
                    </Card.Title>

                    <Badge bg="secondary">
                      {product.category}
                    </Badge>
                  </div>

                  {/* Description */}
                  <Card.Text className="text-muted small">
                    {product.description}
                  </Card.Text>

                  {/* Price */}
                  <h5 className="fw-bold text-success mt-2">
                    ₹ {product.price}
                  </h5>

                  {/* Quantity */}
                  <p className="mb-2">
                    <strong>Quantity:</strong> {product.quantity}
                  </p>

                  {/* Buttons */}
                  <div className="mt-auto d-flex justify-content-between">
                    <Button
                      variant="outline-warning"
                      onClick={() => navigate(`/edit-product/${product.id}`)}
                    >
                      Edit
                    </Button>

                    <Button
                      variant="outline-danger"
                      onClick={() => handleDelete(product.id)}
                    >
                      Delete
                    </Button>
                  </div>

                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <h4 className="text-center">No Products Available</h4>
        )}
      </Row>
    </Container>
  );
};

export default Home;