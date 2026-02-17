import "./BlogDetails.css";
import { Row, Col, Button } from "react-bootstrap";

function BlogDetails() {
  return (
    <div className="blog-wrapper">

      <div className="container-fluid blog-breadcrumb">
        <p className="mb-0">
          <a href="#">Home</a> /
          <a href="#">Business Tips</a> /
          <span>Top Ice Cream Flavors To Sell This Year</span>
        </p>
      </div>
      <div className="container-fluid p-0">
        <img
          src="	https://wpbingo-jumys.myshopify.com/cdn/shop/articles/blog-1.jpg?v=1719804140"
          alt="Ice Cream"
          className="blog-hero"
        />
      </div>
      
      <div className="blog-content">

        <div className="category">Business Tips</div>

        <h1 className="blog-title">
          Top Ice Cream Flavors To Sell This Year
        </h1>

        <p className="author">
          By <span>Tung Hoang</span> on Jun 30, 2024
        </p>

        <div className="divider"></div>

        <p className="blog-text">
          sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Aenean commodo ligula eget dolor. Nulla facilisi. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. non, velit. Etiam rhoncus. Nunc interdum lacus sit amet orci. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisiVivamus aliquet elit ac nisl. Ut a nisl id ante tempus hendrerit.Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Aenean commodo ligula eget dolor. Nulla facilisi. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.
        </p>

        <p className="blog-text">
          Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Etiam rhoncus. Nunc interdum lacus sit amet orci. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi.
        </p>
        
        <div className="quote-box">
          <p>
           Vivamus aliquet elit ac nisl. Ut a nisl id ante tempus hendrerit. Phasellus accumsan cursus velitid ante tempus hendrerit. Donec interdum, metus et hendrerit aliquet”
          </p>
          <div className="quote-author">ROBERT SMITH</div>
        </div>

        <p className="blog-text">
          Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Aenean commodo ligula eget dolor. Nulla facilisi. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.
        </p>
        <p className="blog-text">
          Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Etiam rhoncus. Nunc interdum lacus sit amet orci. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi.
        </p>
        
        <div className="tags">
          <span>Beauty</span>
          <span>Hot</span>
          <span>Organic</span>
        </div>
        
        <div className="post-divider"></div>

        <div className="post-navigation">
          
          <div className="dot-wrapper">
            <div className="dot-circle">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="next-post">
            <p className="next-label">NEXT</p>
            <h3 className="next-title">
              The Art Of Crafting Gourmet Ice Cream
            </h3>
          </div>

        </div>
        <div className="post-divider"></div>     
        <div className="comment-section">
          <h2>Leave a comment</h2>

          <Row className="mt-5">
            <Col md={6} className="mb-4">
              <input type="text" placeholder="Name" className="custom-input"/>
            </Col>
            <Col md={6} className="mb-4">
              <input type="email" placeholder="Email" className="custom-input"/>
            </Col>
          </Row>

          <textarea rows="6" placeholder="Message" className="custom-textarea"></textarea>
          <Button className="post-btn">Post Comment</Button>

        </div>

        <button 
          className="scroll-top-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          TOP
        </button>
      </div>
    </div>
  );
}

export default BlogDetails;
