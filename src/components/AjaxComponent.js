import React, { useEffect, useState } from 'react'
import { UsuarioComponent } from './UsuarioComponent';

export const AjaxComponent = () => {

    const [usuarios, setusuarios] = useState([]);

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

    useEffect(() => {
        getUsuariosEstaticos();
    }, [])

    return (
        <div>
            <h2>Listado de usuarios vía Ajax</h2>


            <ol className='usuarios'>
                {
                    usuarios.map(usuario => {
                        return <UsuarioComponent email={usuario.email} first_name={usuario.first_name} last_name={usuario.last_name} avatar={usuario.avatar}/>
                    })
                }
            </ol>
        </div>
    )
}
