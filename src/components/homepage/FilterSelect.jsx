import React, { useEffect, useRef } from 'react'
import useFetch from '../../hooks/useFetch'

const FilterSelect = ({setCategoryValue}) => {

    const [categories, getCategories] = useFetch();  
    
    useEffect(() => {
      getCategories('/categories');
    }, [])

    const itemSelect = useRef();

    const handleChange = () => {
        setCategoryValue(itemSelect.current.value);
    }
    
    // console.log(categories)
    
    return (
        <select onChange={handleChange} ref={itemSelect}>
            <option value="">All Products</option>
            {
                categories?.map((category) => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                ))
            }
        </select>
    )
}

export default FilterSelect