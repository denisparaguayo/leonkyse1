exports.createPages = async ({ actions, graphql, reporter }) => {
    const resultado = await graphql(`
    query {
        allDatoCmsCuchillo {
          nodes {      
              slug
          }
        }
      }
    `);

    // console.log(resultado.data.allDatoCmsHabitacion.nodes);

    if(resultado.errors) {
        reporter.panic('No hubo resultados ', resultado.errors);
    }

    // Si hay paginas, crear los archivos
    const cuchillos = resultado.data.allDatoCmsCuchillo.nodes;

    cuchillos.forEach(cuchillo => {
        actions.createPage({
            path: cuchillo.slug,
            component: require.resolve('./src/components/cuchillos.js'),
            context: {
                slug: cuchillo.slug
            }
        })
    })

    
}