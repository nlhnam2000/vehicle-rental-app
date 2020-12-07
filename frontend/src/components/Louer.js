import React from 'react'
import '../App.css'

class Louer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            placeholder: this.props.placeholder
        }
    }
    render() {
        return(<div className="content-sidebar">
            <div className="search">
                <form>
                    <input className="searchBox-Louer" type="text" placeholder={this.state.placeholder} />
                </form>
            </div>
            <div className="content-louer">
                Louer Transport
            </div>
        </div>)
    }
}

export default Louer