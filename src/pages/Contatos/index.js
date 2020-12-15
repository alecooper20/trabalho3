import React from 'react'
import FormularioContato from '../../components/FormularioContato';
import Contato from '../../components/Contato';
import uuid from 'react-uuid';
const Contatos = () =>{



        const [contatos, setContatos] = React.useState([]);
    
 
  

   

 
    function adicionarContato(nome, email){
        const id = uuid();
        setContatos([...contatos,{id,nome, email}]);
        localStorage.setItem('contatos',JSON.stringify([...contatos,{id,nome, email}]));

    }

    function removerContato(id){
        setContatos(contatos.filter((contato) => contato.id!== id));

        localStorage.setItem('contatos',JSON.stringify(contatos.filter((contato) => contato.id!== id)));

    
    }

return (

<div>
    <center><h1>Trabalho Prático 3 </h1></center>

    <h2>Formulario de contato</h2>

<FormularioContato adicionar={adicionarContato} />

<hr/>
<h2>Contatos</h2>

    <ul className="list-group">
        {contatos.map(contato=>(
     <Contato key={contato.id} contato={contato} removerContato={removerContato} />
        ))}
    </ul>
  




</div>

)



}



  export default Contatos;
  