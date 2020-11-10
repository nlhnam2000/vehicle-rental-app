import React, {useEffect} from 'react'; 
import '../App.css'; 
import { Link } from 'react-router-dom'; 

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
            </ul>
        </div>
    )
}

export default Menu; 