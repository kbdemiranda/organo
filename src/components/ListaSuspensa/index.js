import ('./style.css')

export const ListaSuspensa = (props) => {

    return(
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select onChange={evento => props.onChanced(evento.target.value)}
                    required={props.required}
                    value={props.value}>
                <option value="">{props.placeholder || "Selecione uma opção"}</option>
                {props.itens.map(item => {
                    return <option key={item} value={item}>{item}</option>;
                })}
            </select>

        </div>
    )
}