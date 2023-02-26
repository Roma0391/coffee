import './filter.scss'
import {useState} from "react";


const Filter = ({addSearch, addFilter}) => {
    const [searchStr, setSearchStr] = useState('')
    const changeInputValue = (e) => {
        const str = e.target.value;
        setSearchStr(str);
        addSearch(str)
    }
    return (
        <div className="filter">
            <div className="search">
                <h2>Looking for</h2>
                <input onChange={changeInputValue} value={searchStr} type="text" placeholder="start typing here..."/>
            </div>
            <div className="filter_block">
                <h2>Or filter</h2>
                <div className="button_block">
                    <button onClick={e => addFilter(e.currentTarget.getAttribute('name'))} name="Brazil">Brazil</button>
                    <button onClick={e => addFilter(e.currentTarget.getAttribute('name'))} name="Kenya">Kenya</button>
                    <button onClick={e => addFilter(e.currentTarget.getAttribute('name'))} name="Columbia">Columbia</button>
                    <button onClick={e => addFilter(e.currentTarget.getAttribute('name'))} name="all">All</button>
                </div>
            </div>
        </div>
    )
}
export default Filter