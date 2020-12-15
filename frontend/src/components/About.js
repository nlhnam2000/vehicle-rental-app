import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import img1 from '../images/img2.png';
import img3 from '../images/worldmap.jpg';
import about_us from '../images/about_us.jpg'


// const grid = {
//     display: 'flex', 
//     flexDirection: 'column'
// }; 
class About extends React.Component {
    render(){
        return (
            <>
            <h1 className="about-title-1">À PROPOS DE NOUS</h1>
            <div className="about-item">
                <div className="about-detail-1">
                    <div className="about-img1">
                        <img src={about_us} />
                    </div>
                </div>
                <div className="about-detail-2">
                    
                    <h2 className="about-title-2">Notre histoire</h2> 
                    <hr className="about-line"></hr>
                    <div className="about-detail-text-1"> 
                    Partant de la volonté de réduire les émissions des véhicules tels que les motos, KD Moyen est né avec la volonté d'aider les habitants de la ville à se déplacer facilement et rapidement grâce aux moyens de transport. Utilisez des ingrédients propres à un prix raisonnable
                    </div>

                    <div className="about-detail-text-1"> 
                    Avec l'utilisation de KD Moyen, les gens peuvent non seulement contribuer à une forte réduction des émissions, mais peuvent également contribuer à améliorer la santé de chacun. De plus, chaque citoyen utilisant KD Moyen contribuera au fonds "Protection de l'environnement KD Moyen". A chaque utilisation, 10% de la location de voiture va à un fonds qui peut contribuer à protéger notre environnement.
                    </div>
                </div>
            </div>
            <div  className="about-item-2">
                <div className="about-detail-3">
                    <h2 className="about-title-3">Équipe de développeurs</h2>
                    <hr className="about-line2"></hr>
                    <div className="about-detail-text-2"> 
                    L'application KD Moyen est développée à partir d'un groupe d'étudiants 
                    de l'Université des Sciences Naturelles de Ho Chi Minh Ville avec le désir
                    d'aider les gens à comprendre la question de la protection de l'environnement.
                    </div>
                    <div className="about-detail-text-2"> 
                    Actuellement, l'application est encore en cours de développement et a reçu beaucoup
                    de soutien des étudiants et des enseignants. De plus, l'application a également reçu
                    beaucoup de financement afin qu'elle puisse continuer à croître rapidement
                    </div>
                </div>
                <div className="about-detail-4">
                    <div className="about-img2">
                        <img src={about_us} />
                    </div>
                </div>
            </div>
            <div className="about-item-3">
                <h2 className="about-title-4">Influence</h2>
                <hr className="about-line3"></hr>
                <div className="about-detail-text-3">
                    <h3 className="about-sub-title">La Ville</h3> 
                    L'utilisation des vélos et des scooters électriques a réduit le nombre de motos et les voitures de manière significative, ce qui contribue à réduire la congestion routière et la pollution de l'air, non seulement, les taux d'accidents de la circulation sont également diminué
                </div>
                <div className="about-detail-text-4">
                    <h3 className="about-sub-title">Les Personnes</h3> 
                    Sensibiliser tout le monde à la protection de l'environnement. Grâce à la réduction des émissions, la santé de chacun s'améliore. Et cela aide les enfants à sortir et à devenir plus actifs
                </div>
                <div className="about-detail-text-5">
                    <h3 className="about-sub-title">Planet</h3> 
                    La couche d'ozone se rétablit grâce à la réduction des émissions. De plus, il n'y a pas d'effet de serre qui empêche la glace de fondre et cause peu de changement climatique
                </div>
            </div>
            </>
        )
    }
}

export default About; 