import React from 'react';
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Link } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";

const Boton = styled(Link)`
    margin-top: 2rem;
    padding: 1rem;
    background-color: #273729;
    width: 100%;
    color: #fff;
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
    cursor: pointer;

`;

const CuchillosPreview = ({cuchillo}) => {

    const { modelo, slug, tipo, imagen } = cuchillo;



    return (  
         <div
             css={css`

                 border: 1px solid #e1e1e1;
                 margin-bottom: 2rem;
                 box-shadow: 4px 3px 14px 3px #000;
                 border-radius: 20px;

             `}
     >
            
             <GatsbyImage 
                 image={imagen.gatsbyImageData} 
                 alt={modelo}
                 css={css`
                     border-bottom: 4px solid #273729;
                     margin-bottom: 0;
                     border-radius: 20px;
                 `}
             />
             <div
                 css={css`
                     padding: 2rem;
                 `}
             >
                 <h3
                     css={css`
                    
                     text-align: center;
                     font-size: 3rem;
                 `}
                 >{tipo}</h3>
                 <p
                     css={css`
                    
                    text-align: center;
                    font-size: 2rem;
                    
                 `}   
                 >Modelo: {modelo}</p>
                 <Boton to={slug}>Ver Cuchillo</Boton>
             </div>

         </div>
        
    );
}
 
export default CuchillosPreview;