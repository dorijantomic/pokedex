import React, { Component } from 'react'
import "./Layout.scss"
import PokemonCard from '../../components/PokemonCard/PokemonCard'

export default class Layout extends Component {
    render() {
        return (
            <div className="layout-container">
              <PokemonCard />
            </div>
        )
    }
}
