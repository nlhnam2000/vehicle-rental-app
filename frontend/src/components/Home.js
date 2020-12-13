import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import img1 from '../images/img2.png';
import img3 from '../images/worldmap.jpg';

// const grid = {
//     display: 'flex', 
//     flexDirection: 'column'
// }; 

class Home extends React.Component {
    render() {
        return (
            <>
                
                <div className="home-item">
                    <div className="detail-text">
                        <h1>KD MOYEN</h1> 
                        <div className="detail-text-info">
                        Le logiciel supporte tout le monde en 
                        prenant le vélo et moto électrique </div>
                        <div>
                        <small>*Prend en charge les plates-formes Web</small>
                        </div>
                    </div>
                    <img className="about-img1" src={img1} />
                </div>
                <div className="home-item1">
                    <div className="ads"> 
                        <div className="ads1">
                        le prix convient à tout le monde
                        </div>
                        <div className="ads2">
                        Interface conviviale, facile à utiliser
                        </div>
                        <div className="ads3">
                        De nombreux véhicules sont adaptés au voyage
                        </div>
                    </div>
                    
                    <div className="detail-ads">
                        <h1 className="titleAds">Qu'est-ce que KD MOYEN?</h1>
                        <hr className="line-1"></hr>
                        <div class="detail-text-ads">
                        De nos jours, avec autant de voitures dans la ville 
                        qui rendent l'environnement de plus en plus polluant, 
                        l'utilisation de véhicules respectueux de l'environnement 
                        est essentielle.</div>
                        <div class="detail-text-ads">
                        KD Moyen a été créé pour encourager les gens à utiliser 
                        des matériaux propres pour aider à protéger l'environnement. 
                        Avec plus de 50 gares routières, voyager en véhicules 
                        KD Moyen est à la fois pratique et peut contribuer à la 
                        protection de l'environnement. </div>
                    </div>
                </div>
                <h1 className="title">Les fonctionalités</h1>
                <hr className="line"></hr>
                <div className="home-item2">
                    <div class="function1">
                        <div className="func1-detail top">
                        <h3>Trouvez une manière</h3>
                        <p>Expliquez aux utilisateurs les meilleures façons de passer entre 2 emplacements</p>
                        </div>
                        <div className="func1-detail">
                        <h3>Meilleur calcul des coûts</h3>
                        <p>Le système calculera pour trouver la méthode la plus économique</p>
                        </div>
                        <div className="func1-detail">
                        <h3>Rechercher des informations</h3>
                        <p>Rechercher des nombre de véhicules, type de véhicule sur chaque gare routière </p>
                        </div>
                    </div>
                    <div class="center-img">
                    <img src={img1}></img>
                    </div>
                    <div class="function2">
                        <div className="func2-detail top">
                        <h3>Afficher les temps d'attente</h3>
                        <p>Calculez combien de temps il faut attendre pour louer une voiture</p>
                        </div>
                        <div className="func2-detail">
                        <h3>Répondre aux commentaires</h3>
                        <p>Retour d'information fonctionnel sur la qualité des véhicules pour le centre d'opérations</p>
                        </div>
                        <div className="func2-detail">
                        <h3>Trouvez un arrêt</h3>
                        <p>Rechercher l'arrêt proche actuel, affiché visuellement sur la carte</p>
                        </div>
                    </div>
                </div>
                <h1 className="title">À propos de nous</h1>
                <hr className="line"></hr>
                <div className="home-item3">
                    <div className="info1">
                    Xuất phát từ ứng dụng phi lợi nhuận, BusMap đặt mục tiêu mang đến giá 
                    trị thiết thực nhằm nâng cao chất lượng đời sống người dân. 07 năm qua 
                    là chặng đường phát triển bởi tinh thần đổi mới sáng tạo, trách nhiệm 
                    đối với xã hội cùng ý chí kiên định “Vì một tương lai thông minh hơn”.
                    </div>
                    <div className="pic1">
                        <img src={img1}></img>
                    </div>
                    <div className="pic2">
                        <img src={img1}></img>
                    </div>
                    <div className="info2">
                        Je suis Khoa KD Moyen a été créé pour encourager les gens à utiliser 
                        des matériaux propres pour aider à protéger l'environnement. 
                        Avec plus de 50 gares routières, voyager en véhicules 
                        KD Moyen est à la fois pratique et peut contribuer à la 
                        protection de l'environnement.
                    </div>
                    <div className="info3">
                        Je suis Khang KD Moyen a été créé pour encourager les gens à utiliser 
                        des matériaux propres pour aider à protéger l'environnement. 
                        Avec plus de 50 gares routières, voyager en véhicules 
                        KD Moyen est à la fois pratique et peut contribuer à la 
                        protection de l'environnement.
                    </div>
                    <div className="pic3">
                        <img src={img1}></img>
                    </div>
                </div>
            </>
        )
    }
}

export default Home; 