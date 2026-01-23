import "./UserProfileCard.css";

function UserProfileCard({
  name,
  email,
  profilePicture,
  role,
  location,
  phone,
  skills,
  experience,
  website
}) {
  return (
    <div className="profile-card">
      <img src={profilePicture} alt="Profile" className="profile-img" />

      <h2>{name}</h2>
      <p className="email">{email}</p>

      <div className="info">
        <p><strong>Role:</strong> {role}</p>
        <p><strong>Location:</strong> {location}</p>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Experience:</strong> {experience}</p>
        <p><strong>Skills:</strong> {skills}</p>
      </div>

      <a href={website} target="_blank" className="profile-link">
        Visit Portfolio
      </a>
    </div>
  );
}
export default UserProfileCard;