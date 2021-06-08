import  React from "react"
import styled from '@emotion/styled'
import Layout from '../components/layout'


import useCuchillosTodos from '../hooks/useCuchillosTodos'
import CuchillosCompleto from '../components/cuchillosCompleto'

const ListadoCuchillos = styled.ul`

    max-width: 980px;
    width: 95%;
    margin: 4rem auto 0 auto;
    
    @media (min-width: 768px){
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 3rem;
        
    }

`;

const CuchillosFull = () => {

    const cuchillos = useCuchillosTodos()

    return (  
        <Layout>
            <>
            <h1>Todos los cuchillos</h1>
        
        <ListadoCuchillos>
            {cuchillos.map(cuchillo => (
                <CuchillosCompleto 
                    key={cuchillo.id}
                    cuchillo = {cuchillo}
                />
            ))}
        </ListadoCuchillos>


        </>
        </Layout>
    );
}
 
export default CuchillosFull;