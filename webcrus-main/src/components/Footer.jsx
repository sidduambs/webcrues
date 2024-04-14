import React from "react";
import styled from "styled-components";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom"; // Import NavLink for routing

// Footer component definition
const Footer = () => {
    return (
        <Wrapper>
            {/* Contact section */}
            <section className="contact-short">
                <div className="grid grid-two-column">
                    <div>
                        <h3>Ready to get started?</h3>
                        <h3>Redirect to Services </h3>
                    </div>
                    <div className="contact-short-btn">
                        {/* Add NavLink to redirect to services section */}
                        <NavLink to="/service">
                            <Button>Click here</Button>
                        </NavLink>
                    </div>
                </div>
            </section>

            {/* Footer section */}
            <footer>
                <div className="container grid grid-four-column">
                    <div className="footer-about">
                        <h3>Web Crusaders</h3>
                        <p>Analysis, Prediction, Crime Locations and hotspot</p>
                    </div>

                    <div className="footer-social">
                        <h3>Follow Us</h3>
                        <div className="footer-social--icons">
                            {/* Use the imported icons */}
                            <div><FaDiscord className="icons" /></div>
                            <div><FaInstagram className="icons" /></div>
                            <div><FaYoutube className="icons" /></div>
                        </div>
                    </div>

                    <div className="footer-contact">
                        <div>
                            <h3>Contact Us</h3>
                            <h3>webcrusadersoutcasts@gmail.com</h3>
                        </div>
                    </div>

                    <div className="footer-built">
                        <h3> Policy </h3>
                        <p>Built under Given Guidelines and Conditions</p>
                    </div>
                </div>

                {/* Bottom section of footer */}
                <div className="footer-bottom--section">
                    <hr />
                    <div className="container grid grid-two-column">
                        <p>© 2024 Karnataka Police. All Rights Reserved</p>
                        <div>
                            <p>PRIVACY POLICY</p>
                            <p>TERMS & CONDITIONS</p>
                        </div>
                    </div>
                    {/* Logo */}
                    <img src={'/images/webcru.svg'} alt="Webcru Logo" className="footer-logo" />
                </div>
            </footer>
        </Wrapper>
    );
};

// Styled component css
const Wrapper = styled.section`
// Styles for contact-short section
.contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 4rem 12rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 2rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(60%);
}
.contact-short-btn {
    justify-self: end;
    align-self: center;
}

// Styles for footer section
footer {
    padding: 16rem 0 8rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};

    h3 {
    color: ${({ theme }) => theme.colors.hr};
    margin-bottom: 2.1rem;
    }
    p {
    color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
    display: flex;
    gap: 2.1rem;

    div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
        color: ${({ theme }) => theme.colors.white};
        font-size: 2.4rem;
        position: relative;
        cursor: pointer;
        }
    }
    }

    .footer-bottom--section {
    padding-top: 4.5rem;
    position: relative; /* Ensure the containing block for absolute positioning */

    hr {
        margin-bottom: 2.0rem;
        color: ${({ theme }) => theme.colors.hr};
        height: 2.2px;
    }
    }
}

@media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
    max-width: 90vw;
    padding: 2rem 0rem;
    display: flex;
    justify-content: center;
    align-items: center;

    .contact-short-btn {
        text-align: center;
        justify-self: flex-start;
    }
    }

    footer .footer-bottom--section {
    padding-top: 2.2rem;
    }

    /* Adjustments for responsive logo */
    .footer-logo {
        width: 12rem; /* Adjust the width as needed for smaller screens */
        bottom: -5rem; /* Adjust bottom position as needed for smaller screens */
    }
}

.footer-logo {
    position: absolute;
    bottom: -7.8rem; /* Adjust bottom position as needed */
    left: 1rem; /* Adjust left position as needed */
    width: 15rem; /* Increase the width to around 5.5rem */
    height: auto; /* Maintain aspect ratio */
    z-index: 1; /* Ensure the logo stays on top of other content */
}
`
export default Footer;
