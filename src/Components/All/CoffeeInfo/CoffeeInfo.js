import DescriptionBlock from "../DescriptionBlock/DescriptionBlock";
import './CoffeeInfo.scss'


const CoffeeInfo = ({data}) => {
    const {country, price} = data
    return (
        <div  className="about_descr">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPvandAoGuRLpERdum1orREhNeUajyKVmifA&usqp=CAU" alt="coffee"/>
            <DescriptionBlock tittle="About it" styles={{width: '420px'}}>
                <h2 style={{textAlign: 'left', margin: '0 0 20px 0'}}>Country: {country}</h2>
                <p style={{textAlign: 'left'}}>
                    <b>Description:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <h2 style={{textAlign: 'left', margin: '0 0 20px 0'}}>Price: {price}</h2>
            </DescriptionBlock>
        </div>
    )
}

export default CoffeeInfo