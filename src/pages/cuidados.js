import * as React from "react"
import Layout from '../components/layout'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

const Contenido = styled.main`

    padding-top: 4rem;
    max-width: 980px;
    width: 95%;
    margin: 0 auto;
    margin-bottom: 4rem;
    
    
    p{
        line-height: 2;
        margin-top: 3rem;
        
    }


`;


const Cuidados = () => (
    <Layout >
        <>
        <div
            css={css`
                
            `}
        >
            <h2
                id="cuidados"
                css={css`
                   text-align: center;
                   font-size: 4rem;
                   margin-top: 4rem;
                   padding: 1rem 0;
                   
               `}
            >CUIDADOS DE LOS CUCHILLO LEON KYSE</h2>
        </div>

        <Contenido>
            <h3
                css={css`
                    border-bottom-style: solid;
                    border-bottom-color: rgba(201, 76, 76, 0.3);
                `}
            
            >LOS CUCHILLOS LEON KYSE ESTÁN DISEÑADOS PARA CORTAR</h3>
            <p>Por favor, no arroje, golpee, haga palanca o pique con un cuchillo Buck.
            No es seguro y si daña el cuchillo al usarlo de esa manera, puede anular la garantía.
            Un fuerte impacto o torsión también puede dañar su cuchillo o, peor aún, causarle una lesión </p>
            <h3
                css={css`
                    border-bottom-style: solid;
                    border-bottom-color: rgba(201, 76, 76, 0.3);
                `}
            >INSTRUCCIONES PARA EL CUIDADO DEL CUCHILLO</h3>
            <ul>
                <li>La limpieza y el cuidado de su cuchillo mantendrán el rendimiento y mejorarán la vida útil de su cuchillo.</li>
                <li>Mantenga su cuchillo seco; eso significa todo el cuchillo, no solo la hoja.</li>
                <li>Mantenga su cuchillo limpio, especialmente las partes móviles y los dispositivos de bloqueo.</li>
                <li>Mantenga su cuchillo engrasado; especialmente los puntos de pivote y la hoja. Aceite al menos dos veces al año.</li>
                <li>Mantenga su cuchillo afilado; una hoja afilada es más segura que una desafilada.</li>
                <li>No intente reparar usted mismo un cuchillo dañado. Envíanoslo y haremos todo lo posible para que quede como nuevo.</li>
                <li>Guarde su cuchillo en un lugar seco.</li>
            </ul>
            <h3
                css={css`
                    margin-top: 2rem;
                    border-bottom-style: solid;
                    border-bottom-color: rgba(201, 76, 76, 0.3);
                `}
            >LIMPIE TODO EL CUCHILLO REGULARMENTE</h3>
            <p>Eso incluye la hoja, los puntos de pivote y el mecanismo de bloqueo. Es mejor no sumergir el cuchillo en líquido. Pero si lo hace, asegúrese de secar bien el cuchillo. Los limpiadores en aerosol son una buena alternativa. Limpie y engrase su cuchillo con regularidad para evitar residuos pegajosos, una ligera oxidación de la superficie y el comienzo de la oxidación. Lubrique siempre su cuchillo después de limpiarlo, recomendamos usar Lubricante de cera. Lubricará, sellará y protegerá su cuchillo de la oxidación de la superficie y la corrosión de la humedad.</p>
            <h3
                css={css`
                    border-bottom-style: solid;
                    border-bottom-color: rgba(201, 76, 76, 0.3);
                `}
            >LIMPIADORES RECOMENDADOS</h3>
            <p>Recomendamos utilizar un limpiador suave que no deje residuos en su cuchillo y volver a engrasarlo con regularidad. Se puede usar un pulidor de metales no abrasivo para eliminar la oxidación, el óxido o el deslustre de la superficie. Los residuos pegajosos de las cuchillas y otras piezas de acero se pueden eliminar con agentes limpiadores suaves. Para limpiar los mangos, se recomiendan agentes limpiadores suaves. No use detergentes fuertes que contengan cloro, como los polvos para lavadoras. Pueden acelerar la corrosión del metal.</p>
            <h3
                css={css`
                  border-bottom-style: solid;
                  border-bottom-color: rgba(201, 76, 76, 0.3);
             `}
            >LA DECOLORACIÓN ES UN SIGNO DE OXIDACIÓN</h3>
            <p>Si encuentra que el metal tiene un color azul, gris o negro, es un signo de oxidación y un precursor del óxido. El acero inoxidable, que es lo que usa Buck, no se decolora fácilmente. Si nota un cambio en el color del metal, límpielo inmediatamente. Es una señal de óxido esperando a que ocurra. La decoloración es común en el acero no inoxidable. Pero la limpieza regular evitará que el metal se oxide.</p>
            <h3
                css={css`
                border-bottom-style: solid;
                border-bottom-color: rgba(201, 76, 76, 0.3);
             `}
            >DESHACERSE DEL ÓXIDO</h3>
            <p>El óxido es de color marrón rojizo y comerá hoyos en su hoja y contaminará lo que corte. El óxido ligero se puede limpiar y eliminar con aceite. El óxido más pesado requiere una acción más abrasiva. Se puede usar un pulidor de metales no abrasivo para eliminar el óxido.</p>
            
        </Contenido>

        </>
        

    </Layout> 
  
  
)

export default Cuidados