import React from 'react';
import { StaticImage } from "gatsby-plugin-image"
import {Link} from 'gatsby'
import {css} from '@emotion/react'
import Navegacion from './nav';


const Header = () => {

    

    
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
                
                <Navegacion />
            </div>
        </header>
   );
}
 
export default Header;