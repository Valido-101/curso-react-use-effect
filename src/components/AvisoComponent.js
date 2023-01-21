import React, { useEffect } from 'react'

export const AvisoComponent = () => {

  useEffect(() => {
    //cuando el componente se monta
    alert("El componente AvisoComponent está montado");

    //cuando se desmonta
    return () => {
        alert("COMPONENTE DESMONTADO")
    }
  }, [])

  return (
    <div>
        <hr/>
        <h3>Saludos Victor, qué tal estás?</h3>
        <button onClick={e => {
            alert("Bienvenido!!")
        }}>Mostrar alerta</button>
    </div>
  )
}
