async function getEstado(name) {  
    try {
      const data = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${name}`)
  
      const jsonData = await data.json()
  
      generateInfoSection(jsonData.sprites, name)
    } catch (error) {
      console.error(error)
    }
  }