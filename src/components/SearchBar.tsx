import { SyntheticEvent, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDebounce, useOnClickOutside } from 'usehooks-ts'
import { ReactComponent as SearchIcon} from '../assets/images/SearchIcon.svg'
import { useSearchProductsQuery } from '../store/api/product'
import { ProductItem } from '../types'
import Error from './Error'


const SearchBar = () => {
    const [isSearchBarOpen, setSearchBarOpen] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    
    const ref = useRef(null)

    useOnClickOutside(ref, () => setSearchBarOpen(false))
    const debouncedSearchValue = useDebounce(searchValue, 500)
    

    const {isError, data: items, } = useSearchProductsQuery(
        {title: debouncedSearchValue, limit: 5}, 
        {skip: !debouncedSearchValue }
    )
    
    const searchBarIconClick = () => {
        setSearchBarOpen(!isSearchBarOpen)
    }

    function searchBarInputChange (e: SyntheticEvent) {
        const target = e.target as HTMLInputElement
        const value = target.value
        setSearchValue(value)
    }

    return <div ref={ref} className={`search-bar ${isSearchBarOpen ? 'opened' : '' }`}>
        { isSearchBarOpen ? 
            <input 
            type="text" 
            className="search-bar__input"
            value={searchValue}
            onChange={(e) => searchBarInputChange(e)}
            />
        : <></>
        }
        <div className="search-bar__icon" onClick={() => searchBarIconClick()}>
            <SearchIcon  />
        </div>
        { isSearchBarOpen && isError ? <div className="search-bar__tips"> <Error /> </div>

        : items && isSearchBarOpen && <div className="search-bar__tips"> {items.map((item: ProductItem) => (
            <Link key={item.sku} className="tip" to={`/product/${item.sku}`}>
                <div className="tip-image">
                    <img src={item.image.url} alt={item.title} />
                </div>
                <div className="tip-title">
                    {item.title}
                </div>
            </Link>
        ))}
        </div> }
           
    </div>
}

export default SearchBar