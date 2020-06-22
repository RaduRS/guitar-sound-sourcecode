import React from 'react'
import './homepage.styles.scss'

function Homepage() {
    return (
        <div className='homepage'>
            <div className='directory-menu'>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>GUITARS</h1>
                        <span className='subtitle'>SHOP NOW</span>
                    </div>
                </div>
                <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>BASSES</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
                </div>
                <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>AMPLIFIERS</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
                </div>
                <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>FX PEDALS</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
                </div>
                <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>ACCESSORIES</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Homepage
