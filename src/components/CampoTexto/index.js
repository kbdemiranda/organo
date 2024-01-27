import ('./style.css')

export const CampoTexto = (props) => {
    return (
        <div className="campo-texto">
            <label htmlFor={props.label}>{props.label}</label>
            <input id={props.label} type={props.type} placeholder={props.placeholder}/>
        </div>
    )
}