import React from 'react'
import Home from '../components/home'

export default class extends React.Component {
    state = {
        language: 'EN'
    }

    render() {
        return (
            <div >
                <Home />
            </div>
        )
        
    }
}