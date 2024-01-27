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

  return (
      <section className="formulario">
          <form>
              <CampoTexto label="nome" placeholder="Digite seu nome" type="text"/>
              <CampoTexto label="cargo" placeholder="Digite seu cargo" type="text"/>
              <CampoTexto label="imagem" placeholder="Digite o URL da sua imagem" type="url"/>
              <ListaSuspensa label="times" itens={times} />
              <Botao>
                  criar card
              </Botao>
          </form>
      </section>
  )
}