import UserProfileCard from "./Component/UserProfileCard";
import "./App.css";

function App() {
  return (
    <div>
      <h1 className="user-heading">Our Team</h1>
      <div className="app-container">
      
      <UserProfileCard
        name="Priti Jadeja"
        email="priti@gmail.com"
        profilePicture="https://i.pravatar.cc/150?img=47"
        role="Frontend Developer"
        location="Indore, India"
        phone="9876543210"
        experience="Fresher"
        skills="React, HTML, CSS, JavaScript"
        website="https://example.com"
      />

      <UserProfileCard
        name="Aman Verma"
        email="aman@gmail.com"
        profilePicture="https://i.pravatar.cc/150?img=12"
        role="UI Designer"
        location="Delhi, India"
        phone="9123456789"
        experience="2 Years"
        skills="Figma, CSS, React"
        website="https://example.com"
      />

      <UserProfileCard
        name="Neha Singh"
        email="neha@gmail.com"
        profilePicture="https://i.pravatar.cc/150?img=32"
        role="Backend Developer"
        location="Bhopal, India"
        phone="9012345678"
        experience="1 Year"
        skills="Node.js, MongoDB, Express"
        website="https://example.com"
      />
    </div>
    </div>
  );
}
export default App;