import React, { Component } from 'react'
import "./Layout.scss"
import PokemonTitle from '../../components/PokemonTitle/PokemonTitle'
export default class Layout extends Component {
    render() {
        return (
            <div className="layout-container">
                <PokemonTitle />
            </div>
        )
    }
}
