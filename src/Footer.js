import React from 'react';
import './style.css';

const Footer = () => {
  return<footer>
<div className="footer-content">
<h3>&nbsp;&nbsp;&nbsp;&nbsp;Relish the taste.</h3>
<p>This is a recipe fetching website where you can have your favourite recipes.</p>

<ul className="socials">
    <li><a href="https://www.facebook.com/"><i className="fa fa-facebook"></i></a></li>
    <li><a href="https://twitter.com/AshishG13889679/"><i className="fa fa-twitter"></i></a></li>
    <li><a href="https://www.instagram.com/?hl=en"><i className="fa fa-instagram"></i></a></li>
    <li><a href="https://github.com/ashishgaurav2403"><i className="fa fa-github"></i></a></li>
    <li><a href="https://www.linkedin.com/in/ashishgaurav2403/"><i className="fa fa-linkedin-square"></i></a></li>
 </ul>

</div>
<div className="footer-bottom">
<h5>&nbsp;&nbsp;&nbsp;&nbsp;Thanks for Visiting !</h5>
</div>



  </footer>
};

export default Footer;
