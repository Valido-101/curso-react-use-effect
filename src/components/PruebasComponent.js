import React, { useEffect } from 'react';
import { useState } from 'react';

export const PruebasComponent = () => {

    const [usuario, setUsuario] = useState("Jesús Valido");

    //Este Hook se ejecuta cada al cargar el componente y cada vez que se hace cualquier cambio en cualquier
    //etiqueta de este componente (input, button, etc)
    useEffect(() => {
        console.log("Has cargado el componente");
    });

  return (
    <div>
        <h1>
            El efecto - Hook useEffect
        </h1>

        <strong>
            {usuario}
        </strong>

        <form>
            <input type='text'
                    onChange={e => (setUsuario(e.target.value))}
                    placeholder="Cambia el usuario"/>
        </form>
    </div>
  )
}
