import React from 'react'
import playstore from "../../../images/playstore.png"
import appstore from "../../../images/appstore.png"
import "./Footer.css"

const Footer = () => {
return (
    <footer  id="footer">

        <div class="leftFooter">
            <h4>DOWNLOAD OUR APP</h4>
            <p>Download App for Android and IOS mobile Phone</p>
            <img src={playstore} alt="playstore"/>
            <img src={appstore} alt="appstore"/>
        </div>

        <div class="midFooter">
            <h1>ECOMMERCE</h1>
            <p>High Quality is our priority</p>
            <p>Copyright 2024 &copy; GirishNalawade</p>
        </div>

        <div class="rightFooter">
            <h4>Follow Us</h4>
            <a href="https://instagram.com">Instagram</a>
            <a href="https://youtube.com">Youtube</a>
            <a href="https://facebook.com">Facebook</a>
        </div>

    </footer>
  )
}

export default Footer