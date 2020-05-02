import React from 'react'
import { Link } from 'react-router-dom'

const navButtonStyles = {
    textDecoration : 'none',
    color: 'crimson',
    fontWeight: 'bold',
    padding: 20
}

const navButtons = [
    {
        "Link" : "F O O D",
        "Route" : "/"
    },
    {
        "Link" : "R E S T A U R A N T S",
        "Route" : "/restaurants"
    },
]

function LinksPage(){
    return (
        <div>
        {navButtons.map(link => {
        return <Link to={link.Route} style={navButtonStyles}>{link.Link}</Link>
    })}
    </div>
    )
}

export default LinksPage