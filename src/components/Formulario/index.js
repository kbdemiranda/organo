import {CampoTexto} from "../CampoTexto";
import {ListaSuspensa} from "../ListaSuspensa";
import {Botao} from "../Botao";
import {useState} from "react";

import ('./style.css')


export const Formulario = (props) => {


    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const onSavedWorker = (events) => {
        events.preventDefault()
        props.onSaved({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
      <section className="formulario">
          <form onSubmit={onSavedWorker}>
              <CampoTexto
                  label="nome"
                  placeholder="Digite seu nome"
                  value={nome}
                  onChanced={value => setNome(value)}
                  type="text"
                  required={true}/>
              <CampoTexto
                  label="cargo"
                  placeholder="Digite seu cargo"
                  type="text"
                  value={cargo}
                  onChanced={value => setCargo(value)}
                  required={false}/>
              <CampoTexto
                  label="imagem"
                  placeholder="Digite o URL da sua imagem"
                  value={imagem}
                  onChanced={value => setImagem(value)}
                  type="url"
                  disable={false}/>
              <ListaSuspensa
                  label="times"
                  value={time}
                  onChanced={value => setTime(value)}
                  itens={props.times}
                  required={true}/>
              <Botao>
                  criar card
              </Botao>
          </form>
      </section>
  )
}