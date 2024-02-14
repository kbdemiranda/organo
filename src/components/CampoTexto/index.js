import ('./style.css')

export const CampoTexto = ({ type = 'text', label, placeholder, valor, onChanced, obrigatorio = false }) => {

    return (<div className={`campo campo-${type}`}>
        <label>{label}</label>
        <input type={type} value={valor} onChange={evento => onChanced(evento.target.value)} required={obrigatorio} placeholder={placeholder}/>
    </div>)
}