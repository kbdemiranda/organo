import {CampoTexto} from "../CampoTexto";
import {ListaSuspensa} from "../ListaSuspensa";
import {Botao} from "../Botao";
import {useState} from "react";

import ('./style.css')


export const Formulario = ({ onSaved, times, onAddTeam }) => {


    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')

    const onSavedWorker = (events) => {
        events.preventDefault()
        onSaved({
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
        <section className="formulario-container">
            <form className="formulario" onSubmit={onSavedWorker}>
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
                    itens={times}
                    required={true}/>
                <Botao>
                    criar card
                </Botao>
            </form>
            <form className="formulario" onSubmit={(evento) => {
                evento.preventDefault()
                onAddTeam({nome: nomeTime, cor: corTime})
            }}>
                <h2>Preencha os dados para criar um novo time.</h2>
                <CampoTexto
                    obrigatorio={true}
                    label='Nome'
                    placeholder='Digite o nome do time'
                    valor={nomeTime}
                    onChanced={valor => setNomeTime(valor)}/>
                <CampoTexto
                    obrigatorio={true}
                    label='Cor'
                    type='color'
                    placeholder='Digite sua cor'
                    valor={corTime}
                    onChanced={valor => setCorTime(valor)}/>
                <Botao>Criar Time</Botao>
            </form>
        </section>
    )
}