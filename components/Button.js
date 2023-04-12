import React from 'react'

function NextBtn(props) {
    const { className, onClick } = props
    return (
        <div className={className} onClick={onClick}>
            <span class="carousel-control-next-icon icon-next-banner" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </div>
    )
}

function PrevBtn(props) {
    const { className, onClick } = props
    return (
        <div className={className} onClick={onClick}>
            <span class="carousel-control-prev-icon icon-prev-banner" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </div>
    )
}

export { NextBtn, PrevBtn }