import React from 'react'
import TopHeader from './TopHeader'
import MiddleHeader from './MiddleHeader'
import BottomHeader from './BottomHeader'

function Header() {
    return (
        <>
            <header className="header navbar-area">
                <TopHeader></TopHeader>
                <MiddleHeader></MiddleHeader>
                <BottomHeader></BottomHeader>
            </header>
        </>
    )
}

export default Header