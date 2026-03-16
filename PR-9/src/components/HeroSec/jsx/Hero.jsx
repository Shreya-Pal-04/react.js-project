import "../css/Hero.css";
import udemy from "../img/udemy.jpg";

const hero = () => {
    return(
        <div className="hero">
            <img src={udemy} alt="udemy picture" style={{ width: '100%', display: 'flex', alignItems: 'center' }} />
            <br />
            <br />
            <h2 style={{fontSize:'30', margin:'0px 70px'}}>Skills to transform your career and life</h2>
            <p style={{fontSize:'17.45px', color:'oklch', margin:'0px 70px',marginBottom:'50px', paddingTop:'10px'}}>From critical skills to technical topics, Udemy supports your professional development.</p>
        </div>
    )
};

export default hero;