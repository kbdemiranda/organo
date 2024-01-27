import {CampoTexto} from "../CampoTexto";
import {ListaSuspensa} from "../ListaSuspensa";
import {Botao} from "../Botao";

import ('./style.css')


export const Formulario = () => {

    const times = [
        'Programação',
        'Front-end',
        'Data Science',
        'DevOps',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const aoSalvar = (events) => {
        events.preventDefault()
        return alert("Ao salvar");
    }

    return (
      <section className="formulario">
          <form onSubmit={aoSalvar}>
              <CampoTexto label="nome" placeholder="Digite seu nome" type="text" required={true}/>
              <CampoTexto label="cargo" placeholder="Digite seu cargo" type="text" required={false}/>
              <CampoTexto label="imagem" placeholder="Digite o URL da sua imagem" type="url" disable={true}/>
              <ListaSuspensa label="times" itens={times} required={true}/>
              <Botao>
                  criar card
              </Botao>
          </form>
      </section>
  )
}