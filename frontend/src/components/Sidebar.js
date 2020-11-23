import React from 'react'
import '../App.css'


class Sidebar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            display: 'Info-station'
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(e) {
        if (e.target.className === "Find-nearestStation") {
            this.setState(() => ({ display : 'Find-nearestStation' }))
        }
        if (e.target.className === "Info-station") {
            this.setState(() => ({ display : 'Info-station' }))
        }
        if (e.target.className === "Louer-Transport") {
            this.setState(() => ({ display : 'Louer-Transport' }))
        }
    }
    render() {
        if (this.state.display === 'Info-station') {
            return (<>
                <div className="header-sidebar">
                    <div className='option-menu'>
                        <div className="Info-station activate">Station</div>
                        <div className="Find-nearestStation" onClick={this.handleClick}>Trouver la plus proche station</div>
                        <div className="Louer-Transport" onClick={this.handleClick}>Louer</div>
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
                        <div className="Info-station" onClick={this.handleClick}>Station</div>
                        <div className="Find-nearestStation activate">Trouver la plus proche station</div>
                        <div className="Louer-Transport" onClick={this.handleClick}>Louer</div>
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
                        <div className="Info-station" onClick={this.handleClick}>Station</div>
                        <div className="Find-nearestStation" onClick={this.handleClick}>Trouver la plus proche station</div>
                        <div className="Louer-Transport activate">Louer</div>
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