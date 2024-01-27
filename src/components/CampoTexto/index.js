import ('./style.css')

export const CampoTexto = (props) => {

    const disable = props.disable != null ? props.disable : false;


    return (
        <div className="campo-texto">
            <label htmlFor={props.label}>{props.label}</label>
            <input id={props.label}
                   type={props.type}
                   placeholder={props.placeholder}
                   required={props.required}
                   disabled={disable}/>
        </div>
    )
}