import CoffeeImageBlock from "../../All/CoffeeImageBlock/CoffeeImageBlock";
import DescriptionBlock from "../../All/DescriptionBlock/DescriptionBlock";
import CoffeeCard from "../../All/CoffeeCard/CoffeeCard";
import {Link} from "react-router-dom";

import './Home.scss'

const Home = ({data}) => {
    const dataBest = data.filter(elem => elem.isBest)
    return (
        <>
            <header>
                <div className="background_img">
                    <div className="info">
                        <h1>Everything You Love About Coffee</h1>
                        <div className="coffee_block">
                            <CoffeeImageBlock color=" white"/>
                        </div>
                        <h2>We makes every day full of energy and taste</h2>
                        <span>Want to try our beans?</span>
                        <Link className="btn" to="goods">More</Link>
                    </div>
                </div>
            </header>
            <section className="description">
                <DescriptionBlock tittle="About Us" styles={{width: "590px"}}>
                    <p>
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.
                    </p>
                    <p>
                        Now residence dashwoods she excellent you. Shade being under his bed her, Much
                        read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                        horrible but confined day end marriage. Eagerness furniture set preserved far
                        recommend. Did even but nor are most gave hope. Secure active living depend son
                        repair day ladies now.
                    </p>
                </DescriptionBlock>
            </section>
            <section className="product">
                <h2>Our best</h2>
                <ul className="product_cards">
                    {dataBest.map(({name, imgLink, price, id}) => {
                        return <Link to={'/goods/' + id}>
                            <CoffeeCard key={id} name={name} imgLink={imgLink} price={price}/>
                        </Link>
                    })}
                </ul>

            </section>
        </>
    )
}
export default Home