import React, { useEffect } from 'react';
import { useState } from 'react';

export const PruebasComponent = () => {

    const [usuario, setUsuario] = useState("Jesús Valido");

    //Este Hook se ejecuta cada al cargar el componente y cada vez que se hace cualquier cambio en cualquier
    //etiqueta de este componente (input, button, etc)
    useEffect(() => {
        console.log("Has cargado el componente o realizado algún cambio");
    });

    //En este caso el useEffect solo se ejecuta al cargar el componente, por los corchetes vacíos
    useEffect(() => {
        console.log("Has cargado el componente");
    }, []);

    //En este caso, el useEffect solo se ejecuta al modificar el usuario
    useEffect(() => {
        console.log("Has modificado el usuario");
    }, [usuario]);

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
