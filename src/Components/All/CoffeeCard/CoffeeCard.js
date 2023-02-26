import './CoffeeCard.scss'


const CoffeeCard = ({ addLike, name, imgLink, price, country, isDesire}) => {
    const classCountry = country ? ' country' : '';
    const likes = isDesire ? 'fa-solid' : 'fa-regular'
    console.log(likes)
    return (
        <li className={"card" + classCountry}>
            <div onClick={addLike} className="icon">
                <i className={likes + " fa-heart"}></i>
            </div>
            <img src={imgLink} alt="coffee"/>
            <h3 className="name">{name}</h3>
            {country ? <h3 className="country_header">{country}</h3> : ''}
            <span>{price}</span>
        </li>
    )
}
export default CoffeeCard