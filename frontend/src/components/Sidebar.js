import React from 'react'
import '../App.css'
import station from '../images/station.svg'
import search from '../images/search-icon.svg'
import key from '../images/key.svg'
class Sidebar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            display: 'Info-station'
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(e) {
        if (e.target.className === "Find-nearestStation" || e.target.className === "search-name-menu-sidebar" || e.target.className === "Icon-Search") {
            this.setState(() => ({ display : 'Find-nearestStation' }))
        }
        if (e.target.className === "Info-station" || e.target.className === "Info-station-name-menu-sidebar" || e.target.className === "Icon-Info-station" ){
            this.setState(() => ({ display : 'Info-station' }))
        }
        if (e.target.className === "Louer-Transport" || e.target.className === "key-name-menu-sidebar" || e.target.className === "Icon-Key") {
            this.setState(() => ({ display : 'Louer-Transport' }))
        }
    }
    render() {
        if (this.state.display === 'Info-station') {
            return (<>
                <div className="header-sidebar">
                    <div className='option-menu'>
                        <div className="Info-station activate">
                            <img src={station} alt='station' className="Icon-Info-station"/>
                            <span className="Info-station-name-menu-sidebar">Station</span>
                        </div>
                        <div className="Find-nearestStation" onClick={this.handleClick}>
                            <img src={search} alt='search' className="Icon-Search" onClick={this.handleClick}/>
                            <span className="search-name-menu-sidebar" onClick={this.handleClick}>La plus proche station</span>
                        </div>
                        <div className="Louer-Transport" onClick={this.handleClick}>
                            <img src={key} alt='key' className="Icon-Key" onClick={this.handleClick}/>
                            <span className="key-name-menu-sidebar" onClick={this.handleClick}>Louer</span>
                        </div>
                    </div>
                    <div className="content-sidebar">
                        <div className="search">
                            <input className="search-box" type="text" placeholder="Trouver station..." />
                        </div>
                        <div className="content-Info-station">
                            Infomation
                    </div>
                    </div>
                </div>
            </>)
        }
        if (this.state.display === 'Find-nearestStation') {
            return (<>
                <div className="header-sidebar">
                    <div className='option-menu'>
                        <div className="Info-station" onClick={this.handleClick}>
                            <img src={station} alt='station' className="Icon-Info-station" onClick={this.handleClick}/> 
                            <span className="Info-station-name-menu-sidebar" onClick={this.handleClick}>Station</span>
                        </div>
                        <div className="Find-nearestStation activate">
                            <img src={search} alt='search' className="Icon-Search" onClick={this.handleClick}/>
                            <span className="search-name-menu-sidebar" onClick={this.handleClick}>La plus proche station</span>
                        </div>
                        <div className="Louer-Transport" onClick={this.handleClick}>
                            <img src={key} alt='key' className="Icon-Key" onClick={this.handleClick}/>
                            <span className="key-name-menu-sidebar" onClick={this.handleClick}>Louer</span>
                        </div>
                    </div>
                    <div className="content-sidebar">
                        <div className="search">
                            <input className="search-box" type="text" placeholder="Votre position..." />
                        </div>
                        <div className="content-Info-station">
                            La plus proche Station
                        </div>
                    </div>
                </div>
            </>)
        }
        if (this.state.display === 'Louer-Transport') {
            return (<>
                <div className="header-sidebar">
                    <div className='option-menu'>
                        <div className="Info-station" onClick={this.handleClick}>
                            <img src={station} alt='station' className="Icon-Info-station" onClick={this.handleClick}/>
                            <span className="Info-station-name-menu-sidebar" onClick={this.handleClick}>Station</span>
                        </div>
                        <div className="Find-nearestStation" onClick={this.handleClick}>
                            <img src={search} alt='search' className="Icon-Search" onClick={this.handleClick}/>
                            <span className="search-name-menu-sidebar" onClick={this.handleClick}>La plus proche station</span>
                        </div>
                        <div className="Louer-Transport activate" onClick={this.handleClick}>
                            <img src={key} alt='key' className="Icon-Key" onClick={this.handleClick}/>
                            <span className="key-name-menu-sidebar" onClick={this.handleClick}>Louer</span>
                        </div>
                    </div>
                    <div className="content-sidebar">
                        <div className="search">
                            <input className="search-box" type="text" placeholder="Trouver station..." />
                        </div>
                        <div className="content-Info-station">
                            Louer Transport
                        </div>
                    </div>
                </div>
            </>)
        }
    }
}
export default Sidebar