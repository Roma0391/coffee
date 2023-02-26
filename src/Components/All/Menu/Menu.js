import {Link} from "react-router-dom";
import './Menu.scss'

const Menu = ({color}) => {

    return (
        <nav className={"navigation" + color}>
            <Link className="bef" to='.'>Coffee house</Link>
            <Link to='goods'>Our coffee</Link>
            <Link to='desire'>For your pleasure</Link>
        </nav>
    )
}
export default Menu