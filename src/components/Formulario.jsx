import React, {useState} from 'react'
import useLetras from '../hooks/useLetras'

const Formulario = () => {

    const [busqueda, setBusqueda] = useState({
        artista: '',
        cancion: ''
    })

    const { setAlerta, busquedaLetra } = useLetras()

    const handleSubmit = e => {
        e.preventDefault()
        if(Object.values(busqueda).includes('')){
            setAlerta('Campos obligatrios' )
            return
        }
        busquedaLetra(busqueda)
    }

  return (
    <form
        onSubmit={handleSubmit}
    >
        <legend>Busca por artista y canción</legend>

        <div>
            <label>Artista</label>
            <input
                type='text'
                name='artista'
                placeholder='Nombre Artista'
                value={busqueda.artista}
                onChange={ e => setBusqueda({
                    ...busqueda,
                    [e.target.name] : e.target.value
                }) }
            />
        </div>

        <div>
            <label>Cancion</label>
            <input
                type='text'
                name='cancion'
                placeholder='Nombre Cancion'
                value={busqueda.cancion}
                onChange={ e => setBusqueda({
                    ...busqueda,
                    [e.target.name] : e.target.value
                }) }
            />
        </div>
        <input type='submit' value='Buscar' />

        
    </form>
  )
}

export default Formulario