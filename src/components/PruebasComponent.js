import React, { useEffect } from 'react';
import { useState } from 'react';
import { AvisoComponent } from './AvisoComponent';

export const PruebasComponent = () => {

    const [usuario, setUsuario] = useState("Jesús Valido");

    //contador de modificaciones usando useEffect
    const [contador, setContador] = useState(0);

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
        setContador(contador+1);

        console.log("Has modificado el usuario: " + contador);

    }, [usuario]);

  return (
    <div>
        <h1>
            El efecto - Hook useEffect
        </h1>

        <strong className={contador >= 10 ? 'labelUsuario label-green' : 'labelUsuario'}>
            {usuario}
        </strong>

        <form>
            <input type='text'
                    onChange={e => (setUsuario(e.target.value))}
                    placeholder="Cambia el usuario"/>
        </form>

        {usuario == "VICTOR" && <AvisoComponent/>}
    </div>
  )
}
