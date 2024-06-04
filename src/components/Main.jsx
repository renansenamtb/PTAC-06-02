import { useState } from "react";

export default function Main(){
const [nome, setNome] = useState("");
const [telefone, setTelefone] = useState();
const [listaContatos, setContatos] = useState([]);
const [cpf, setCpf] = useState();

    const registrar = (event) => {
        event.preventDefault();
            alert("Adicionado com Sucesso");
            setContatos([...listaContatos,
            {
            nomeSalvo: nome,
            telefoneSalvo: telefone,
            cpfSalvo: cpf,
            }
            ]);
            console.table(listaContatos);

      }
      const remover = (id) => {
        const novaLista = listaContatos.filter(
            (contato, index)=>{
                if(index !== id){
                    return contato
                }else{
                    return null;
                }
            }
        );
        setContatos(novaLista);
        
      }
    return(
        <main>
            <form onSubmit={registrar}>
                <label htmlFor="nome">Nome :</label>
                <input
                type="text"
                name=""
                id=""
               
                onChange={(event)=> setNome(event.target.value)}
                />

{nome}
                <br></br>
                


                     <label htmlFor="telefone">Telefone :</label>
                   <input
                     type=""
                      name=""
                      id=""
                      
                    onChange={(event) => setTelefone(event.target.value)}
                                          
   />
      {telefone}   
   
   <br></br>
            


<label htmlFor="cpf">Cpf :</label>
<input
type="text"
name=""
id="cpf"

onChange={(event) => setCpf(event.target.value)}
/>


{cpf}
<br></br>

                <button type="submit">Enviar</button>


            </form>

        {listaContatos.map((contato, index) =>
        <div key={index}>
            <p>{contato.nomeSalvo}</p>
            <p>{contato.telefoneSalvo}</p>
            <p>{contato.cpfSalvo}</p>
            <button onClick={()=> remover(index)}>X</button>
        </div>
        )}
<h1>mim dê papai</h1>
        </main>
    );
}
