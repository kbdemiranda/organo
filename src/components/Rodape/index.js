import ('./style.css')


export const Rodape = () => {
    return (<footer className="footer">
        <section>
            <ul>
                <li>
                    <img src="/assets/facebook.png" alt=""/>
                </li>
                <li>
                    <img src="/assets/twitter.png" alt="" />
                </li>
                <li>
                    <img src="/assets/instagram.png" alt="" />
                </li>
            </ul>
        </section>
        <section>
            <img src="/imagens/logo.png" alt="" />
        </section>
        <section>
            <p>
                Desenvolvido por Alura.
            </p>
        </section>
    </footer>)
}