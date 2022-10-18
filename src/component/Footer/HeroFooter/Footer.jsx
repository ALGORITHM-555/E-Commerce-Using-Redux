import React from 'react';
import BottomFooter from './BottomFooter';
import HeroFooter from './HeroFooter';
import MiddleFooter from './MiddleFooter';

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <HeroFooter></HeroFooter>
                <MiddleFooter></MiddleFooter>
                <BottomFooter></BottomFooter>
            </footer>
        </div>
    )
}

export default Footer
