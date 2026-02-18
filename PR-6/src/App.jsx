import { useEffect, useState } from "react";
import "./App.css";
import { Button, Card, Form } from "react-bootstrap";
import generateUniqueId from "generate-unique-id";

const getSessionData = () => {
  return JSON.parse(sessionStorage.getItem("employees")) || [];
};
function App() {
  const initialState = {
    id: "",
      fullName: "",
    phone: "",
    address: "",
    position: "",
    salary: "",
    image: "",
  };
  const [formData, setFormData] = useState(initialState);
  const [employees, setEmployees] = useState(getSessionData());
  const [isEdit, setIsEdit] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.fullName) newErrors.fullName = "Full Name is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.position) newErrors.position = "Position title is required";
    if (!formData.salary) newErrors.salary = "Salary is required";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    if (!isEdit) {
      const newEmployee = {
        ...formData,
        id: generateUniqueId({ length: 6, useLetters: false }),
      };
      setEmployees([...employees, newEmployee]);
    } else {
      const updated = employees.map((emp) =>
        emp.id === formData.id ? formData : emp
      );
      setEmployees(updated);
      setIsEdit(false);
    }
    setFormData(initialState);
    setErrors({});
  };

  const handleDelete = (id) => {
    const updated = employees.filter((emp) => emp.id !== id);
    setEmployees(updated);
  };
  const handleEdit = (id) => {
    const record = employees.find((emp) => emp.id === id);
    if (record) {
      setFormData(record);
      setIsEdit(true);
      setErrors({});
    }
  };
  useEffect(() => {
    sessionStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  return (
    <div className="layout">

      <div className="left-panel">
        <h2>Employee Form</h2>
        <Form onSubmit={handleSubmit} noValidate>

          <Form.Group className="mb-3">
            <Form.Label>Full Name: </Form.Label>
            <Form.Control
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && <p className="error">{errors.fullName}</p>}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Phone Number: </Form.Label>
            <Form.Control
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <p className="error">{errors.phone}</p>}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Address: </Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
            {errors.address && <p className="error">{errors.address}</p>}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Position Title: </Form.Label>
            <Form.Control
              type="text"
              name="position"
              value={formData.position}
              onChange={handleChange}
            />
            {errors.position && <p className="error">{errors.position}</p>}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Salary: </Form.Label>
            <Form.Control
              type="number"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
            />
            {errors.salary && <p className="error">{errors.salary}</p>}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Profile Image URL: </Form.Label>
            <Form.Control
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
            />
          </Form.Group>

          <Button type="submit" variant="dark">
            {isEdit ? "Update" : "Add"} Employee
          </Button>

        </Form>
      </div>

      {/* RIGHT PANEL */}
      <div className="right-panel">
        <h2 align="center" md="3">Employee Information</h2>

        <div className="card-grid">
          {employees.map((emp) => (
            <Card className="emp-card" key={emp.id}>
              <Card.Img
                variant="top"
                className="emp-img"
                src={emp.image || "https://via.placeholder.com/300x200"}
              />
              <Card.Body>
                <Card.Title>{emp.fullName}</Card.Title>
                <Card.Text><strong>Phone:</strong> {emp.phone}</Card.Text>
                <Card.Text><strong>Address:</strong> {emp.address}</Card.Text>
                <Card.Text><strong>Position:</strong> {emp.position}</Card.Text>
                <Card.Text><strong>Salary:</strong> ₹{emp.salary}</Card.Text>

                <div className="btn-group-custom">
                  <Button variant="warning"size="sm"onClick={() => handleEdit(emp.id)}> Edit </Button>
                  <Button variant="danger" size="sm" onClick={() => handleDelete(emp.id)}> Delete </Button>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;