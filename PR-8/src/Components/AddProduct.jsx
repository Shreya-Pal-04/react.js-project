import { useState } from "react";
import { Button, Form, Col, Container, Row, Card } from "react-bootstrap";
import generateUniqueId from "generate-unique-id";
import { getStorageData, setStorageData } from "../services/storageData";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();

  const initialState = {
    id: "",
    title: "",
    description: "",
    price: "",
    category: "",
    image: "",
    quantity: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
  let newErrors = {};

  if (!formData.title.trim()) {
    newErrors.title = "Title is required";
  }

  if (!formData.category) {
    newErrors.category = "Category is required";
  }

  if (!formData.price) {
    newErrors.price = "Price is required";
  }

  if (!formData.quantity) {
    newErrors.quantity = "Quantity is required";
  }

  if (!formData.description.trim()) {
    newErrors.description = "Description is required";
  }

  if (!formData.image.trim()) {
    newErrors.image = "Image URL is required";
  }

  return newErrors;
};
  const handleSubmit = (e) => {
  e.preventDefault();

  const validationErrors = validate();
  setErrors(validationErrors);

  if (Object.keys(validationErrors).length > 0) {
    return;
  }

  const newProduct = {
    ...formData,
    id: generateUniqueId({ length: 6, useLetters: false }),
  };

  let data = getStorageData();
  data.push(newProduct);
  setStorageData(data);

  navigate("/");
};

  return (
    <Container className="mt-5 mb-5">

      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-lg p-4 rounded-4">
            <Card.Body>
              <h3 className="text-center mb-4 fw-bold">
                Add New Product
              </h3>

              <Form onSubmit={handleSubmit}>
                <Row>

                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        name="title"
                        placeholder="Enter product title"
                        value={formData.title}
                        onChange={handleChange}
                      />
                      {errors.title && (
  <small className="text-danger">{errors.title}</small>
)}
                    </Form.Group>
                  </Col>
                  <Col md={6}>
  <Form.Group className="mb-3">
    
    <Form.Select
  name="category"
  value={formData.category}
  onChange={handleChange}
>
  <option value="">Select Category</option>
  <option value="Grocery">Grocery</option>
  <option value="Vegetables">Vegetables</option>
  <option value="Fruits">Fruits</option>
  <option value="Electronic">Electronic</option>
  <option value="Clothing">Clothing</option>
</Form.Select>
    {errors.category && (
      <small className="text-danger">
        {errors.category}
      </small>
    )}
  </Form.Group>
</Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="number"
                        name="price"
                        placeholder="Enter price"
                        value={formData.price}
                        onChange={handleChange}
                      />
                      {errors.price && (
  <small className="text-danger">{errors.price}</small>
)}
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="number"
                        name="quantity"
                        placeholder="Enter quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                      />
                      {errors.quantity && (
  <small className="text-danger">{errors.quantity}</small>
)}
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="description"
                    placeholder="Enter product description"
                    value={formData.description}
                    onChange={handleChange}
                  />
                  {errors.description && (
  <small className="text-danger">{errors.description}</small>
)}
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Control
                    type="text"
                    name="image"
                    placeholder="Enter image URL"
                    value={formData.image}
                    onChange={handleChange}
                  />
                  {errors.image && (
  <small className="text-danger">{errors.image}</small>
)}
                </Form.Group>
                <div className="text-center">
                  <Button type="submit" variant="warning"className="px-5 py-2 rounded-pill fw-bold">Add Product</Button>
                </div>
                <div className="mb-3">
                  <br/>
                  <Button variant="outline-secondary"size="sm"onClick={() => navigate("/")}>← Back</Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AddProduct;