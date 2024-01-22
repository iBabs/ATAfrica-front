import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCheck } from '@fortawesome/free-solid-svg-icons'
import './Graph.css'

function Cards({cardhead, bgcolo, summary, txt1, txt2, percent, color}) {
  return (
    <div className='Card' style={{
        backgroundColor:bgcolo,
        color:color
        }}>
        <h2>{cardhead} <FontAwesomeIcon icon={faArrowRight} className='icon' /></h2>
        <p className='pps'>{summary}</p>
        <div>
            <FontAwesomeIcon icon={faCheck} /> <span>{txt1}</span>
        </div>
        <div>
        <FontAwesomeIcon icon={faCheck} /> <span>{txt2}</span>
        </div>
        <div style={{
            backgroundColor:'white',
            padding:'1rem',
            borderRadius: '15px',
            marginTop:'1.5rem',
            color: 'black',
        }}
        >
            <p className="bigi">{percent}</p>
            <p>management fee</p>

        </div>
    </div>
  )
}

function CardSection(){
    return(
        <div className="cards"> 
        <Cards 
        cardhead='Premium Offer'
        bgcolo='#230B59'
        summary='Let your taxes pay you for a change.'
        txt1='we do it better'
        txt2='special aceess'
        percent='0.5%'
        color='white'
        />
        <Cards 
        cardhead='Normal Offer'
        bgcolo='#3C429C'
        summary='Get started with simple, low-fee financial tools.'
        txt1='we do it better'
        txt2='special aceess'
        percent='0.4%'
        color='#E7E2F2'
        />
        <Cards 
        cardhead='Extra Offer'
        bgcolo='#E7E2F2'
        summary='Just answer a few questions, and we’ll build you a personalized portfolio of low-cost index funds from up to 17 global asset classes.'
        txt1='we do it better'
        txt2='special aceess'
        percent='0.6%'
        color='#230b59'
        />
        </div>
    )
}

export default CardSection