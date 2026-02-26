import { useEffect, useState } from "react";
import { Card, Button, Row, Col, Container, Badge } from "react-bootstrap";
import { getStorageData, setStorageData } from "../services/storageData";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [order, setOrder] = useState("asc");
  const navigate = useNavigate();

  useEffect(() => {
    setProducts(getStorageData());
  }, []);

  const handleDelete = (id) => {
    const updatedData = products.filter((item) => item.id !== id);
    setProducts(updatedData);
    setStorageData(updatedData);
  };
  const filteredProducts = products.filter((product) =>
  product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

let sortedProducts = [...filteredProducts];

if (sortBy) {
  sortedProducts.sort((a, b) => {
    let valueA = a[sortBy];
    let valueB = b[sortBy];

    if (sortBy === "price" || sortBy === "quantity") {
      valueA = Number(valueA);
      valueB = Number(valueB);
    } else {
      valueA = valueA.toString().toLowerCase();
      valueB = valueB.toString().toLowerCase();
    }

    if (order === "asc") {
      return valueA > valueB ? 1 : -1;
    } else {
      return valueA < valueB ? 1 : -1;
    }
  });
}

  return (
    <Container className="mt-4">
      <div className="mb-4 text-center">
  <div className="mb-4 d-flex justify-content-center align-items-center gap-3">

  <input
    type="text"
    placeholder="Search product..."
    className="form-control w-50"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />

  <select
    className="form-control w-20"
    style={{ maxWidth: "180px" }}
    value={sortBy}
    onChange={(e) => setSortBy(e.target.value)}
  >
    <option value="">Sort By</option>
    <option value="title">Title</option>
    <option value="category">Category</option>
    <option value="price">Price</option>
    <option value="quantity">Quantity</option>
  </select>
  <select
  className="form-control w-10"
  style={{ maxWidth: "150px" }}
  value={order}
  onChange={(e) => setOrder(e.target.value)}
>
  <option value="asc">Ascending</option>
  <option value="desc">Descending</option>
</select>

</div>
</div>
      <Row>
        {products.length > 0 ? (
          sortedProducts.map((product) => (
            <Col md={4} key={product.id} className="mb-4">
              <Card className="shadow-lg border-0 rounded-4 h-100">
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={{ height: "200px", objectFit: "contain" }}/>

                <Card.Body className="d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <Card.Title className="fw-bold fs-5 mb-0">
                      {product.title}
                    </Card.Title>

                    <Badge bg="secondary">
                      {product.category}
                    </Badge>
                  </div>
                  <Card.Text className="text-muted small">
                    {product.description}
                  </Card.Text>
                  <h5 className="fw-bold text-success mt-2">
                    ₹ {product.price}
                  </h5>
                  <p className="mb-2">
                    <strong>Quantity:</strong> {product.quantity}
                  </p>
                  <div className="mt-auto d-flex justify-content-between">
                    <Button variant="outline-warning"onClick={() => navigate(`/edit-product/${product.id}`)}>Edit</Button>
                    <Button variant="outline-danger"onClick={() => handleDelete(product.id)}>Delete</Button></div>
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