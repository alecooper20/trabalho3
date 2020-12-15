import React, {useState} from 'react';


const FormularioContato = ({adicionar}) => {
const [nome, setNome]  =  React.useState('');
const [email, setemail]  =  React.useState('');

function submeterFormulario(e){



    adicionar(nome,email);

    setNome('');
    setemail('');




};

return (
<form onSubmit={e => { e.preventDefault(
submeterFormulario()

); }}>


<div className="form-group">
<label htmlFor="nome">Nome:</label>
<input 
type="text" 
className="form-control"
id="nome"
name="nome"
value={nome}
onChange={(e) => setNome(e.target.value)}
/>
</div>



<div className="form-group">
<label htmlFor="email">Email:</label>
<input type="text" 
className="form-control"
id="email"
name="email"
value={email}
onChange={(e) => setemail(e.target.value)}
/>
</div>

<p></p>
<center>
<button type="submit" className="btn btn-primary">Salvar</button>
</center>

</form>
);



};



  export default FormularioContato;
  