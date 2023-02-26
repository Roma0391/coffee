import {Outlet} from "react-router-dom";
import './GoodsLayout.scss'


const GoodsLayout = () => {
    return (
        <>
            <header className='background_img_goods'>
                <div>
                    <h1>Our Coffee</h1>
                </div>
            </header>
            <Outlet/>
        </>

    )
}
export default GoodsLayout