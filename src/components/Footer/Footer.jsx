import "./Footer.css";

export const Footer = () => {

    return(
        <div className="footer">
            <div className="footer-social">
                <p className="footer-text">Contact us</p>
                <div className="footer-icons">
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer noopener"><img src="./footerIcons/facebook.png" alt="facebook" className="social-icon"></img></a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer noopener"><img src="./footerIcons/instagram.png" alt="instagram" className="social-icon"></img></a>
                    <a href="https://www.whatsapp.com/" target="_blank" rel="noreferrer noopener"><img src="./footerIcons/whatsapp.png" alt="whatsapp" className="social-icon"></img></a>
                </div>
            </div>
        </div>
    )
}