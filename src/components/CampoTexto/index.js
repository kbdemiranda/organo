import ('./style.css')

export const CampoTexto = (props) => {

    const disable = props.disable != null ? props.disable : false;

    const onChanged = (evento) => {
        props.onChanced(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label htmlFor={props.label}>{props.label}</label>
            <input id={props.label}
                   value={props.value}
                   type={props.type}
                   placeholder={props.placeholder}
                   required={props.required}
                   onChange={onChanged}
                   disabled={disable}/>
        </div>
    )
}