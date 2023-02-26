import CoffeeImageBlock from "../CoffeeImageBlock/CoffeeImageBlock";
import './DescriptionBlock.scss'

const DescriptionBlock = ({tittle, styles, children}) => {
    return (
        <div className='description_content'>
            <h2>{tittle}</h2>
            <div className="coffee_block">
                <CoffeeImageBlock color=" black"/>
            </div>
            <div style={styles} className="description_block">
                {children}
            </div>
        </div>
    )
}

export default DescriptionBlock