import './style.css'
import {AiFillCloseCircle, AiFillHeart, AiOutlineHeart} from "react-icons/ai";

export const Colaborador = ({ colaborador, corDeFundo, onDelete, onFavorite }) => {
    function addFavorite(){
        onFavorite(colaborador.id)
    }


    return (<div className="colaborador">
        <AiFillCloseCircle size={25} className="deletar" onClick={() => onDelete(colaborador.id)} />
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <div className="favorite">
                {colaborador.favorito ? <AiFillHeart color="#ff0000" size={25} onClick={addFavorite} />  :
                <AiOutlineHeart size={25} onClick={addFavorite} />}
            </div>
        </div>
    </div>)
}

