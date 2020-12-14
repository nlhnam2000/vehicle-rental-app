import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import img1 from '../images/img2.png';
import img3 from '../images/worldmap.jpg';
import award from '../images/award.jpg';
import promo20 from '../images/promo20.jpg'
import promo30 from '../images/promo30.jpg'
import promo50 from '../images/promo50.jpg'
// const grid = {
//     display: 'flex', 
//     flexDirection: 'column'
// }; 

class Award extends React.Component {
    render() {
        return (
            <>
            <h1 className="award-title-1">PRIX</h1>
            <div className="award-item">
                <img src={award}></img>
                <div className="award-detail-1">
                    <div className="award-detail-text-1">
                    Avec la volonté d'encourager les gens à utiliser KD Moyen, nous avons lancé "KD Point". Après chaque voyage, vous recevrez 1 montant de KD Point en fonction de votre voyage, avec les points accumulés que vous pouvez utiliser pour échanger des cadeaux attrayants et des codes de réduction.
                    </div>
                    <div className="award-detail-text-2">
                    Vous souhaitez utiliser vos points pour payer l'intégralité du voyage? Si facile! Vous pouvez facilement personnaliser le nombre de points bonus à utiliser de manière flexible. Utilisez les points à votre façon.
                    </div>
                </div>
            </div>
            <h1 className="award-title-2">Le liste de récompensers</h1>
            <hr className="award-line"></hr>
            <div className="award-item-2">
                
                <img className="award-img1" src={promo20}></img>
                <div className="award-promo-1">
                        KD Point: 30<br/>
                        Si vous avez utilisé ces 5 codes, vous recevrez 1 code 30%        
                </div>
                <img className="award-img2" src={promo30}></img>
                <div className="award-promo-2">
                        KD Point: 50<br/>
                        Si vous avez utilisé ces 5 codes, vous recevrez 2 code 50%             
                </div>
                <img className="award-img3" src={promo50}></img>
                <div className="award-promo-3">
                        KD Point: 100<br/>
                        Si vous utilisez ces 10 codes, vous obtiendrez 1 réservation gratuite
                </div>
            </div>
            </>
        )
    }
}

export default Award; 