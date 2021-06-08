import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Layout from '../components/layout';


export const query = graphql`

query  ($slug: String!){
    allDatoCmsCuchillo(filter: { slug: { eq: $slug } }){
        nodes {
            id
            caracteristica
            descripcion
            modelo
            slug
            tipo
            imagen {
                gatsbyImageData
            }
          }
    }
}`

const Boton = styled.a`
    margin-top: 2rem;
    padding: 1rem;
    background-color: #35ac03;
    width: 100%;
    color: #fff;    
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
    border-radius: 20px;
    

`;
const CuchillosTemplate = ({data: { allDatoCmsCuchillo: { nodes } }}) => {

    const { tipo, modelo, descripcion, caracteristica, imagen } = nodes[0];

    return ( 
        <Layout>
            <main
                css={css`
                    margin: 0 auto;
                    max-width: 768px;
                    width: 95%;
                    margin-bottom: 3rem;
                `}
            >
                <h2
                    css={css`
                        text-align: center;
                        margin-top: 4rem;
                    `}
                >{tipo}</h2>
                     <h3
                        css={css`
                        text-align: center;
                        text-decoration: underline;
                        text-decoration-color: #f21a1a;
                        text-decoration-style: solid;
                        
                    `}
                     >Modelo: {modelo}</h3>
                     
                        <div> <GatsbyImage 
                        image={imagen.gatsbyImageData} 
                        alt={modelo}
                        width="600px"                
                        />
                        </div>
                        <h3
                            css={css`
                                font-weight: bold;
                            `}
                        >Descripcion del Cuchillo</h3>
                        <p
                        css={css`
                        
                        font-style: italic;
                        `}
                     >{descripcion}</p>
                        
                        <h3
                            css={css`
                                font-weight: bold;
                            `}
                        >Características</h3>
                        <div
                            css={css`
                                border-bottom: 2px solid #1b1a1a;
                                margin-bottom: 3rem;
                            `}
                        >
                            <p
                                css={css`
                        
                                    font-weight: bold;
                            `}
                     
                         >{caracteristica}</p>
                        </div>

                     <Boton href="https://"><i className="fab fa-whatsapp"></i> Hacer Pedido</Boton>
            </main>
        </Layout>
     );
}
 
export default CuchillosTemplate;