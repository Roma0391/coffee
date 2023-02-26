import {Outlet} from "react-router-dom";
import Menu from "../../All/Menu/Menu";
import CoffeeImageBlock from "../../All/CoffeeImageBlock/CoffeeImageBlock";
import './MainLayout.scss'



const MainLayout = () => {
    return (
        <>
            <div className="nav_menu">
                <Menu color=' white' />
            </div>
            <Outlet/>
            <footer>
                <div className="footer_nav">
                    <Menu color=" black"/>
                </div>
                <div className="footer_coffee_block">
                    <CoffeeImageBlock color=' black'/>
                </div>
            </footer>

        </>
    )
}
export default MainLayout