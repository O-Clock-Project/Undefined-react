/**
 * Import
 */
import React from 'react';
import {
  FaFacebookSquare, FaTwitterSquare, FaInstagram, FaDiscord,
} from 'react-icons/fa';

/**
 * Local import
 */
// Composants

// Styles et assets
import './footer.sass';

/**
 * Code
 */
const Footer = () => (
  <footer id="footer">
    <div className="footer-text">2018 &copy; The Hub for <a href="https://oclock.io/">O'Clock</a></div>
    <div className="footer-text">-</div>
    <a href="https://www.facebook.com/Oclock.io/"><FaFacebookSquare className="footer-icons" /></a>
    <a href="https://twitter.com/Oclock_io"><FaTwitterSquare className="footer-icons" /></a>
    <a href="https://www.instagram.com/Oclock_io"><FaInstagram className="footer-icons" /></a>
    <a href="https://discordapp.com/invite/VMs7nXp"><FaDiscord className="footer-icons" /></a>
  </footer>
);

/**
 * Export
 */
export default Footer;
