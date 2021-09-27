import "./menu.scss"

export default function Menu( { menuOpen, setMenuOpen } ) {
    return (
        <div className={"menu "+(menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#intro">home</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#portfolio">portifólio</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#works">trabalhos</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#testimonials">depoimentos de clientes</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#contact">contato</a>
                </li>
            </ul>
        </div>
    )
}
