import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import img1 from '../images/img2.png';
import img3 from '../images/worldmap.jpg';

const grid = {
    display: 'flex',
    flexDirection: 'column'
};

class Home extends React.Component {
    render() {
        return (
            <>
                <div className="home-item">
                    <div className="detail-text">
                        Bonjour mme, je m’appelle Nam, j’ai 18 ans,
                        je viens de NhaTrang, je suis vietnamien,
                        je suis étudiant de l’Universite de Science
                        à HCMville, j’étudie technologie informatique.
                        J’aime bien le sport, je peux jouer le
                        football, le badminton, le volleyball,...
                        j’aime jouer aux jeux videos, et j’aime aussi
                        le français. Je n’aime pas chanter ou danser.
                        Il y a 4 personne dans ma famille: mon père,
                        ma mere, mon petit frere et moi. Mon père est
                        méchanicien, ma mere est vendeuse, mon petit frere
                        est élève du college
                        </div>
                    <img src={img1} />
                </div>
                <div className="home-item">
                    <img src={img1} />
                    <div className="detail-text">
                        Bonjour mme, je m’appelle Nam, j’ai 18 ans,
                        je viens de NhaTrang, je suis vietnamien,
                        je suis étudiant de l’Universite de Science
                        à HCMville, j’étudie technologie informatique.
                        J’aime bien le sport, je peux jouer le
                        football, le badminton, le volleyball,...
                        j’aime jouer aux jeux videos, et j’aime aussi
                        le français. Je n’aime pas chanter ou danser.
                        Il y a 4 personne dans ma famille: mon père,
                        ma mere, mon petit frere et moi. Mon père est
                        méchanicien, ma mere est vendeuse, mon petit frere
                        est élève du college
                        </div>
                </div>
                <div className="home-item">
                    <div className="detail-text">
                        Bonjour mme, je m’appelle Nam, j’ai 18 ans,
                        je viens de NhaTrang, je suis vietnamien,
                        je suis étudiant de l’Universite de Science
                        à HCMville, j’étudie technologie informatique.
                        J’aime bien le sport, je peux jouer le
                        football, le badminton, le volleyball,...
                        j’aime jouer aux jeux videos, et j’aime aussi
                        le français. Je n’aime pas chanter ou danser.
                        Il y a 4 personne dans ma famille: mon père,
                        ma mere, mon petit frere et moi. Mon père est
                        méchanicien, ma mere est vendeuse, mon petit frere
                        est élève du college
                        </div>
                    <img src={img1} />
                </div>
                <div className="home-item grid">
                    <img src={img3} />
                    <img src={img3} />
                    <img src={img3} />
                    <img src={img3} />
                </div>
            </>
        )
    }
}

export default Home; 