import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CourseDetails = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const courses = useSelector((state) => state.courses);

  const course = courses[id];

  if (!course) {
    return <h2 className="text-center mt-5">Course Not Found</h2>;
  }

  return (

    <Container className="mt-5">

      {/* IMAGE + BASIC DETAILS */}
      <Row className="mb-5">

        <Col md={6}>
          <img
            src={course.image}
            alt={course.title}
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </Col>

        <Col md={6}>

          <h2>{course.title}</h2>

          <p>{course.description}</p>

          <hr />

          <p><b>Price:</b> ₹{course.price}</p>

          <p><b>Method:</b> {course.method}</p>

          <p><b>Duration:</b> {course.duration} hrs</p>

          <p><b>Rating:</b> ⭐ {course.rating}</p>

          <Button
            variant="primary"
            onClick={() => navigate(`/edit/${course.id}`)}
          >
            Edit
          </Button> &nbsp; &nbsp;
          <Button variant="danger">Delete</Button>

        </Col>

      </Row>


      {/* WHAT WILL YOU LEARN SECTION */}

      <Row>

        <Col md={12}>

          <h3>What you'll learn</h3>

          <div style={{
            background: "#f7f9fa",
            padding: "20px",
            borderRadius: "10px",
            marginTop: "10px"
          }}>

            <p>{course.learn}</p>

          </div>

        </Col>

      </Row>

    </Container>

  );
};

export default CourseDetails;