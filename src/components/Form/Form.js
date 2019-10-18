import React, { Fragment } from 'react'

const Form = () => {
    return (
        <Fragment>
            <form action={(e) => e.preventDefault()}>
                <input type="text" name="" id=""/>
                <input type="button" value="Guess"/>
            </form>
        </Fragment>
    )
}

export default Form
