import {CampoTexto} from "../CampoTexto";

import ('./style.css')


export const Formulario = () => {
  return (
      <section className="formulario">
          <form>
              <CampoTexto label="nome" placeholder="Digite seu nome" type="text"/>
              <CampoTexto label="cargo" placeholder="Digite seu cargo" type="text"/>
              <CampoTexto label="imagem" placeholder="Digite o endereço da sua imagem" type="url"/>
          </form>
      </section>
  )
}