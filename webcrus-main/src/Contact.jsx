import React from 'react';
import styled from 'styled-components';

// Define the styled component outside of the Contact component
const Wrapper = styled.section`
    padding: 11rem 0 5rem 0;

    .container {
        margin-top: 9rem;
        text-align: center;

        .contact-form {
            max-width: 50rem;
            margin: auto;

            .contact-inputs {
                display: flex;
                flex-direction: column;
                gap: 3rem;

                input[type="submit"] {
                    cursor: pointer;
                    transition: all 0.2s;

                    &:hover {
                        background-color: ${({ theme }) => theme.colors.white};
                        border: 1px solid ${({ theme }) => theme.colors.btn};
                        color: ${({ theme }) => theme.colors.btn};
                        transform: scale(0.9);
                    }
                }
            }
        }
    }
`;

const Contact = () => {
    return (
        <Wrapper>
            <h2 className="common-heading">Feel free to Contact US</h2>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3796.7314572391792!2d77.50726247580296!3d17.898006187893454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcec6e3ee7e6bbb%3A0xbe5504c72b86fb2b!2sGuru%20Nanak%20Dev%20Engineering%20College%20Bidar!5e0!3m2!1sen!2sin!4v1711986219058!5m2!1sen!2sin"
                width="2900"
                height="680"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>

            <div className="container">
                <div className='contact-form'>
                    <form action="https://formspree.io/f/xeqyrvek" method="post" className='contact-inputs'>
                        <input
                            type='text'
                            name='username'
                            placeholder='Username'
                            autoComplete='off'
                            required
                        />

                        <input
                            type='email'
                            name='Email'
                            placeholder='Email'
                            autoComplete='off'
                            required
                        />

                        <textarea
                            name='message'
                            cols='30'
                            rows='6'
                            autoComplete='off'
                            required>
                        </textarea>

                        <input type='submit' value='Send' />
                    </form>
                </div>
            </div>
        </Wrapper>
    );
};

export default Contact;
