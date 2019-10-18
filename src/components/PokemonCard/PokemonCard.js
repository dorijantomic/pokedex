import React, { Fragment } from 'react'
import PokemonImage from '../PokemonImage/PokemonImage'
import PokemonTitle from '../PokemonTitle/PokemonTitle'
import PokedexProgress from "../PokedexProgress/PokedexProgress"
import Form from '../Form/Form'

const PokemonCard = () => {
    return (
        <div className="pokemon-card-container">
            <PokemonTitle />
            <PokemonImage />
            <Form />
            <PokedexProgress />
        </div>
    )
}

export default PokemonCard
