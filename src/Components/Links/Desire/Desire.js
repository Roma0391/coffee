import './Desire.scss'
import DescriptionBlock from "../../All/DescriptionBlock/DescriptionBlock";
import {Link} from "react-router-dom";
import CoffeeCard from "../../All/CoffeeCard/CoffeeCard";
// import {useState} from "react";


const Desire = ({data}) => {

    return(
        <>
            <header>
                <div className="background_img_des">
                    <h1>For your pleasure</h1>
                </div>
            </header>
            <section className="about_descr_fev">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNVl882u_9Mn9y56KsI7IUmg9Jvjla-4DMVw&usqp=CAU" alt="wooman"/>
                <DescriptionBlock tittle="About our goods" styles={{width: '350px'}}>
                    <p>
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                    </p>
                    <p>
                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions.
                    </p>
                    <p>
                        As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.
                    </p>
                </DescriptionBlock>
            </section>
            <div className='line'></div>
            <ul className='goods'>
                {
                    data.map(({name, country, price, id, imgLink, isDesire}) => {

                        return <Link to={'/goods/' + id}>
                            <CoffeeCard key={id} isDesire={isDesire} name={name} imgLink={imgLink} price={price} country={country}/>
                        </Link>
                    })
                }
            </ul>
        </>

    )
}

export default Desire