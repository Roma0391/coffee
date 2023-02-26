import './CoffeeImageBlock.scss'


const CoffeeImageBlock = ({color}) => {
    return (
        <div className={"coffeeBlock" + color}>
            <div></div>
        </div>
    )
}

export default CoffeeImageBlock