import React, { Component } from 'react'
import "./Layout.scss"
export default class Layout extends Component {
    render() {
        return (
            <div className="layout-container">
                <audio src="https://instrumentalfx.co/wp-content/upload/11/Pokemon-Theme-Song.mp3?_=3" autoPlay={true} hidden={true} loop={true}/>
            </div>
        )
    }
}
