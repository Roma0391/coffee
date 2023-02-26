import './Goods.scss'
import DescriptionBlock from "../../All/DescriptionBlock/DescriptionBlock";
import Filter from "../../All/Filter/filter";
import CoffeeCard from "../../All/CoffeeCard/CoffeeCard";
import {Link} from "react-router-dom";
import {useState} from "react";


const Goods = ({data, addLike}) => {
    const [searchStr, setSearchStr] = useState('')
    const [filter, setFilter] = useState('all')
    console.log(searchStr)
    const addSearch = (str) => {
        setSearchStr(str)
    }
    const addFilter = (filter) => {
        setFilter(filter)
    }
    const searchData = (string) => {
        if (string === '') {
            return data;
        }
        return data.filter(({name}) => name.indexOf(string) > -1)
    }
    const filterData = (data, filter) => {
        if (filter === 'all') {
            return data;
        }
        return data.filter(({country}) => filter === country)
    }
    const renderData = filterData(searchData(searchStr), filter)

    return(
        <>
            <section className="about_descr">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT1STNcvUNnM3oJGtFh3Nn0TASLKM4hzAkKA&usqp=CAU" alt="wooman"/>
                <DescriptionBlock tittle="About our beans" styles={{width: '350px'}}>
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
            <section className='filter&search'>
                <Filter addSearch={addSearch} addFilter={addFilter}/>
            </section>
            <ul className='goods'>
                {
                    renderData.map(({name, country, price, id, imgLink, isDesire}) => {
                        return <Link to={id + ''}>
                            <CoffeeCard addLike={(e) => addLike(e, id)} key={id} id={id} isDesire={isDesire} name={name} imgLink={imgLink} price={price} country={country}/>
                        </Link>
                    })
                }
            </ul>
        </>


    )
}

export default Goods