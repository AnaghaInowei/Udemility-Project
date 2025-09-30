export default function Navbar() {
    return(
        <nav>
            <div className="logo">
                <img src="./src/assets/udeme-logo.png" alt="Udemility Logo"/>
                <p className="udeme">Udemility <br /> <span className="elect">Electrical Services</span></p>
            </div>
            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            {/* <a href="#" className="cta">Call Now</a> */}
            <button className="cta"><img src="./src/assets/phone.svg" alt="Phone icon" /> Call Now</button>
            
        </nav>
    );
    
}