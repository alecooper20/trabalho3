import React from 'react';


const Contato = ({contato,removerContato}) => {

return (

<li className="list-group-item" >
{contato.nome} - {contato.email}
<a href="#" 
className="btn btn-danger"
 onClick={()=>removerContato(contato.id)}
>Excluir</a>
</li>

);

};

export default Contato ;