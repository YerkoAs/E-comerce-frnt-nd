import React from 'react';
import { useForm } from 'react-hook-form';
import './styles/filterprice.css';

const FilterPrice = ({setInputPrice}) => {



    const { handleSubmit, register } = useForm();

    const submit = (data) => {
        setInputPrice({
            min: data.min,
            max: data.max || Infinity,
        })
    }


    return (
        <form className='filterprice' onSubmit={handleSubmit(submit)}>
            <h3>Filter by price</h3>
            <div>
                <label htmlFor="min">Min: </label>
                <input {...register('min')} type="text" id="min" />
            </div>
            <div>
                <label htmlFor="max">Max: </label>
                <input {...register('max')} type="text" id="max" />
            </div>
            <button>Submit</button>
        </form>
    )
}

export default FilterPrice