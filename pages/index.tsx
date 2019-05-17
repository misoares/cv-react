import React from 'react'
import Link from 'next/link'
import Navbar from '../components/navbar'
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