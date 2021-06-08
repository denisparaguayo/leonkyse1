import  React from "react"
import { Link } from 'gatsby';
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Layout from '../components/layout'
import ImagenLeon from '../components/imagenLeon'
import ContenidoInicio from '../components/contenidoInicio'
import useCuchillos from '../hooks/useCuchillos'
import CuchillosPreview from '../components/cuchillosPreview'

const ListadoCuchillos = styled.ul`

    max-width: 1200px;
    width: 95%;
    margin: 4rem auto 0 auto;
    
    @media (min-width: 768px){
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 3rem;
        
    }

`;


const IndexPage = () => {
  
  const cuchillos = useCuchillos()

  
  
  return (  
    <Layout>

    <ImagenLeon />

     <ContenidoInicio /> 

     <h2 
        id="cuchillos"
        css={css`
                text-align: center;
                margin-top: 5rem;
                font-size: 3rem;
                text-shadow: 3px 1px 27px #273729;
            `}
     >Cuchillos Artesanales</h2>

     <ListadoCuchillos>
       {cuchillos.map(cuchillo => (
         <CuchillosPreview 
            key={cuchillo.id}
            cuchillo = {cuchillo}
         />
       ))}
     </ListadoCuchillos>
     <Link
        to="/cuchillos"
        css={css`
       
      color: #000;
      display: block;
      text-decoration: none;
      text-transform: uppercase;
      font-weight: 700;
      text-align: center;
      cursor: pointer;
      margin-bottom: 2rem;
      text-decoration: underline;
      text-decoration-color: red;
      
        
        `}
     >Mostrar mas...</Link>
     

    </Layout>
  );
}
 
export default IndexPage;
