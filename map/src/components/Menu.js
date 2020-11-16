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

    let navbarClass = ['navbar']; 
    if (scrolled) {
        navbarClass.push('scrolled'); 
    }
    
    return (
        <div >
            <ul className={navbarClass.join(' ')}> 
                <Link to={'/'}>
                    <li className="nav-link active">Acceuil</li>
                </Link>
                <Link to={'/'}>
                    <li className="nav-link">Link 1</li>
                </Link>
                <Link to={'/'}>
                    <li className="nav-link">Link 1</li>
                </Link>
                <Link to={'/'}>
                    <li className="nav-link">Link 1</li>
                </Link>
                <Link to={'/'}>
                    <li className="nav-link">Link 1</li>
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
    )
}

export default Menu; 