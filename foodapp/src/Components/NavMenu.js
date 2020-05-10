import React from 'react'
import { Link } from 'react-router-dom'
import './NavMenu.css'

const navButtonStyles = {
    textDecoration : 'none',
    color: 'crimson',
    fontWeight: 'bold',
    padding: 20,
    paddingBottom : 0,
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
        <div style={navStyle}>
        {navButtons.map(link => {
        return <Link to={link.Route} style={navButtonStyles} className="btn-hover">{link.Link}</Link>
    })}
    </div>
    )
}

const navStyle = {
    minHeight : '40px',
    display : 'flex',
    justifyContent : 'flex-start',
    margin: '0 auto',
    maxWidth : '80%',
    fontSize : '30px',
    marginBottom : '20px',
}

export default LinksPage