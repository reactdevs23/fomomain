import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer-container">
                <div className="footer-top">
                    <div className="link-group-item">
                        <h3>Distribution</h3>
                        <ul>
                            <li><a href="/">Americas </a></li>
                            <li><a href="/">Australia</a></li>
                            <li><a href="/">Europe</a></li>
                        </ul>
                    </div>
                    <div className="link-group-item">
                        <h3>Hard Copy</h3>
                        <ul>
                            <li><a href="/">Europe </a></li>
                            <li><a href="/">USA</a></li>

                        </ul>
                    </div>
                    <div className="link-group-item">
                        <h3>Coverage</h3>
                        <ul>
                            <li><a href="/">Market</a></li>
                            <li><a href="/">Tech </a></li>
                            <li><a href="/">Media</a></li>
                            <li><a href="/">Video</a></li>

                        </ul>
                    </div>
                    <div className="link-group-item">
                        <h3>Topics</h3>
                        <ul>
                            <li><a href="/">NFTs</a></li>
                            <li><a href="/">Crypto</a></li>
                            <li><a href="/">Monthly Movers</a></li>
                            <li><a href="/">Project Review</a></li>
                            <li><a href="/">Interview</a></li>

                        </ul>
                    </div>
                    <div className="link-group-item">
                        <h3>Team</h3>
                        <ul>
                            <li><a href="https://twitter.com/jonnft2" target="_blank" rel="noreferrer">JonNFT</a></li>
                            <li><a href="https://twitter.com/0xjaynfts" target="_blank" rel="noreferrer">0X_Jay</a></li>
                            <li><a href="https://twitter.com/Crypto_Slice" target="_blank" rel="noreferrer">Slice</a></li>
                            <li><a href="https://twitter.com/speeksUK" target="_blank" rel="noreferrer">Speeks</a></li>
                            <li><a href="https://twitter.com/mo_solah" target="_blank" rel="noreferrer">Mo Solah</a></li>
                        </ul>
                    </div>
                    <div className="link-group-item">
                        <h3>Special</h3>
                        <ul>
                            <li><a href="/">Video</a></li>
                            <li><a href="/">NFT Charting</a></li>
                            <li><a href="/">1:1 Artist</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className='d-flex align-items-center justify-content-between'>
                        <a href="/"><img className='logo' src="/images/logo.png" alt="" /></a>
                        <div className='d-flex align-items-center footer-social-group'>
                            <a href="https://twitter.com/MagFomo" target="_blank" rel="noreferrer"><img src="/images/tiktok.png" alt="" /></a>
                            <a href="https://twitter.com/MagFomo" target="_blank" rel="noreferrer"><img src="/images/twitter.png" alt="" /></a>
                            <a href="https://twitter.com/MagFomo" target="_blank" rel="noreferrer"><img src="/images/facebook.png" alt="" /></a>
                            <a href="https://twitter.com/MagFomo" target="_blank" rel="noreferrer"><img src="/images/instagram.png" alt="" /></a>
                            
                            
                            
                        </div>
                    </div>

                    <div className='footer-bottom-text '>
                        <p>Copyright © 2023. All Rights Reserved.</p>
                        <div className='link-group'>
                            <a href="/">Terms & condition</a>
                            <a href="/">Cookies </a>
                            <a href="/">Privacy policies</a>
                            <a href="/">About us</a>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
