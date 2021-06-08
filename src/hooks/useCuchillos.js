import { graphql, useStaticQuery } from 'gatsby'



const useCuchillos = () => {
    

//limite (limit: 6) poner al costado de alldatocuchillo en la consulta grapql


    const data = useStaticQuery(graphql`
    query MyQuery {
        allDatoCmsCuchillo (limit: 6) {
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
      }
    
    `)
    
    // console.log(data.allDatoCmsCuchillo.nodes);

    return data.allDatoCmsCuchillo.nodes.map(cuchillo => ({
        tipo: cuchillo.tipo,
        modelo: cuchillo.modelo,
        descripcion: cuchillo.descripcion,
        caracteristica: cuchillo.caracteristica,
        slug: cuchillo.slug,
        id: cuchillo.id,
        imagen: cuchillo.imagen

    }))
    
}
 
export default useCuchillos;