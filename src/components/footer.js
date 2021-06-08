import React from 'react';
import { StaticImage } from "gatsby-plugin-image"
import {Link} from 'gatsby'
import {css} from '@emotion/react'
import Navegacion from './nav';


const Footer = ({title}) => {

    const year = new Date().getFullYear();

    
  return ( 
    <header
            css={css`
                background-color: rgb(27,26,26);
                padding: .5rem;
            `}
        >
            <div
                css={css`
                    max-width: 1200px;
                    margin: 0 auto;
                    @media(min-width: 768px){
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    }
                `}
            >
                <Navegacion />
                <h1
                    css={css`
                        color: #fff;
                        text-align: center;
                        a{
                            text-decoration: none;
                            color: #fff;
                        }
                    `}
                ><Link to="/"><StaticImage src="../images/navbar-logo2.svg" alt="Logo" /></Link></h1>
                
            </div>
            <p
                css={css`
                    text-align: center;
                    color: #fff;
                    background-color: rgb(27,26,26);
                    margin: 0;
                    padding: 1rem;
                    font-size: 1.4rem;

                `}
            
            > {title}. Todos los Derechos Reservados &copy; 2010 - {year} </p>
            <p
                    css={css`
                    text-align: center;
                    color: #fff;
                    background-color: rgb(27,26,26);
                    margin: 0;
                    padding: .3rem;
                    font-size: 1.4rem;

                `}  
            >Power by... <a
            css={css`
                color: red;
            `}
            href='https://webpy.xyz'>webPy</a></p>
        </header>
   );
}
 
export default Footer;