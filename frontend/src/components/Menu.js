import React, {useEffect} from 'react'; 
import '../App.css'; 
import { Link } from 'react-router-dom'; 

const navbarText = {
    color: 'black', 
    display: 'inline-block', 
    textAlign: 'center', 
    opacity: '1'
}

const Menu = () => {
    // sticky top navbar
    const [scrolled, setScrolled] = React.useState(false);
    const handleScroll = () => {
        if (window.scrollY > 200) {
            setScrolled(true); 
        }
        else {
            setScrolled(false); 
        }
    } 

    useEffect(() => {
        window.addEventListener('scroll', handleScroll); 
    })

    let navbarClass = ['navbar navbar-light navbar-expand-md']; 
    if (scrolled) {
        navbarClass.push('scrolled'); 
    }
    
    return (
        <div>
            <nav className={navbarClass.join(' ')}> 
                <button type="button" className="navbar-toggler" data-toggle="collapse"
                data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav m-auto list-unstyled">
                        <Link to={'/'}>
                            <li className="nav-link active" style={navbarText}>Acceuil</li>
                        </Link>
                        <Link to={'/home'}>
                            <li className="nav-link" style={navbarText}>Map</li>
                        </Link>
                        <Link to={'/'}>
                            <li className="nav-link" style={navbarText}>Link 1</li>
                        </Link>
                        <Link to={'/'}>
                            <li className="nav-link" style={navbarText}>Link 1</li>
                        </Link>
                        <Link to={'/'}>
                            <li className="nav-link" style={navbarText}>Link 1</li>
                        </Link>
                        <li className="nav-link dropdown" style={navbarText}>
                            <div className="dropdown-toggle" data-toggle="dropdown">
                                <i className="fa fa-user"></i>
                            </div>
                            <ul className="dropdown-menu">
                                <Link to={'/signin'}>
                                    <li className="dropdown-item">
                                        Sign in
                                    </li>
                                </Link>
                                <Link to={'/signup'}>
                                    <li className="dropdown-item">
                                        Sign up
                                    </li>
                                </Link>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Menu; 