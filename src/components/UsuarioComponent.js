import React from 'react';
import Card from 'react-bootstrap/Card';

export const UsuarioComponent = ({email, first_name, last_name, avatar}) => {
  return (
    <div>
        <Card style={{width: '18rem'}}>
            <Card.Img variant='top' src={avatar}/>
            <Card.Body>
                <Card.Title>{first_name}</Card.Title>
                <Card.Text>
                    ¡Buenas! Me llamo {first_name} {last_name} y mi correo electrónico es {email}
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
  )
}
