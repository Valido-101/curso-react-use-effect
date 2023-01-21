import { async } from 'q';
import React, { useEffect, useState } from 'react'

export const AjaxComponent = () => {

    const [usuarios, setusuarios] = useState([]);

    const [cargando, setCargando] = useState(true);

    const [errores, setErrores] = useState("");

    //genérico / básico
    const getUsuariosEstaticos = () => {
        setusuarios([
            {
                "id": 1,
                "email": "victor@reqres.in",
                "first_name": "Victor",
                "last_name": "Robles",
                "avatar": "https://reqres.in/img/faces/7-image.jpg"
            },
            {
                "id": 2,
                "email": "petra@reqres.in",
                "first_name": "Petra",
                "last_name": "Ferguson",
                "avatar": "https://reqres.in/img/faces/8-image.jpg"
            },
            {
                "id": 3,
                "email": "jesus@reqres.in",
                "first_name": "Jesus",
                "last_name": "Valido",
                "avatar": "https://reqres.in/img/faces/9-image.jpg"
            }
        ])
    }

    const getUsuariosAjaxPms = () => {
        fetch("https://reqres.in/api/users?page=1").then(
            respuesta => respuesta.json()
        ).then(resultado_final => {
            setusuarios(resultado_final.data)
            console.log(resultado_final.data)
        }, error => {
            console.log(error);
        })
    }

    const getUsuariosAjaxAsyncAwait = () => {
        setTimeout(async () => {
            try {
                const peticion = await fetch("https://reqres.in/api/users?page=1");
                const { data } = await peticion.json();

                setusuarios(data);

                console.log(data);
                setCargando(false);
            } catch (error) {
                console.log(error.message);
                setErrores(error.message);
            }
        }, 2000)
    }

    useEffect(() => {
        getUsuariosAjaxAsyncAwait();
    }, [])

    if (errores !== "") {

        return (
            <div className='errores'>
                {errores}
            </div>
        );

    } else if (cargando === true) {
        //trozo de plantilla cargando
        return (
            <div className='cargando'>
                Cargando Datos...
            </div>
        )
    }
    else if (cargando === false && errores === "") {
        //trozo de plantilla cuando todo ha ido bien
        return (
            <div>
                <h2>Listado de usuarios vía Ajax</h2>


                <ol className='usuarios'>
                    {
                        usuarios.map(usuario => {
                            return (<li key={usuario.id}>
                                <img src={usuario.avatar} width='80' />
                                {usuario.first_name} {usuario.last_name}
                            </li>)
                        })
                    }
                </ol>
            </div>
        )
    }


}
