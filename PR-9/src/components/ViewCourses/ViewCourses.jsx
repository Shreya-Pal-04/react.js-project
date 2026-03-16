import { useSelector } from "react-redux";
import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ViewCourses.css";

const ViewCourses = () => {

  const courses = useSelector((state) => state.courses);

  return (
    <div className="container mt-4">

      <Row>

        {courses.map((course, index) => (

          <Col lg={3} md={4} sm={6} xs={12} key={index} className="mb-4">

            <Card className="course-card">

              <Card.Img
                variant="top"
                src={course.image}
                className="course-img"
              />

              <Card.Body className="course-body">

                <Card.Title className="course-title">
                  {course.title}
                </Card.Title>

                <p>{course.description.slice(0, 40)}...</p>

                <p><b>Price:</b> ₹{course.price}</p>

                <Button
                  as={Link}
                  to={`/course/${index}`}
                  variant="primary"
                >
                  View More
                </Button>

              </Card.Body>

            </Card>

          </Col>

        ))}

      </Row>

    </div>
  );
};

export default ViewCourses;