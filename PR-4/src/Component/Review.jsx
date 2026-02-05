import { useState } from "react";
import "./Review.css";

function Review() {
  const [name, setName] = useState("");
  const [gmail, setGmail] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");
  const [error, setError] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const onlyLettersRegex = /^[A-Za-z\s]+$/;

    if (name === "") {
      setError("Name is required");
      return;
    }else if(name.trim().length < 3) {
        setError("Name must be at least 3 characters");
        return;
    }else if (!onlyLettersRegex.test(name)) {
        setError("Name should be only letters");
    }

    if (gmail === "") {
      setError("Gmail is required");
      return;
    }else if (!gmail.includes("@")) {
      setError("Enter valid gmail");
      return;
    }
    
    if (review === "") {
      setError("Review is required");
      return;
    }else if (review.trim().length < 10) {
        setError("Review must be at least 10 characters");
        return;
    }
    if (rating === "") {
      setError("Rating is required");
      return;
    }

    setData([
      ...data,
      { name, gmail, review, rating }
    ]);

    setName("");
    setGmail("");
    setReview("");
    setRating(0);
    setError("");
  };

  return (
    <div className="review-container">
      <h2>Customer Review</h2>

      <form onSubmit={handleSubmit} className="review-form">
        {error && <p className="error">{error}</p>}

        <input type="text"placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Enter gmail" value={gmail} onChange={(e) => setGmail(e.target.value)} />
        <textarea placeholder="Write review" value={review} onChange={(e) => setReview(e.target.value)}></textarea>
        <select value={rating} onChange={(e) => setRating(e.target.value)}>
            <option value="">Select Rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        <button type="submit">Submit</button>
      </form>

      <div className="review-list">
        {data.map((item, index) => (
          <div className="review-card" key={index}>
            <h4>Name: {item.name}</h4>
            <p className="gmail"> Gmail: {item.gmail}</p>
            <p>Review: {item.review}</p>
            <p>Rating: {item.rating}/5</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Review;