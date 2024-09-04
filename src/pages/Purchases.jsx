import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPurchasesThunk } from '../store/slices/purchases.slice'
import PurchaseCard from '../components/purchases/PurchaseCard'
import { format, parseISO } from 'date-fns'
import './styles/purchases.css'

const Purchases = () => {

  const purchasesSlice = useSelector(store => store.purchasesSlice);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPurchasesThunk());
  }, [dispatch])

  const groupByDate = (items) => {
    return items.reduce((cv, item) => {
      const date = item.createdAt.split('T')[0];
      if (!cv[date]) {
        cv[date] = []
      }
      cv[date].push(item);
      return cv;
    }, {});
  };

  const groupPurchases = groupByDate(purchasesSlice)
  
  return (
    <div className='purchases'>
     {
      Object.keys(groupPurchases)?.map((date) => {
        const formattedDate = format(parseISO(date), 'dd/MM/yyyy');

        return (
          <div key={date} className='purchases__container'>
            <h2 className='purchases__date'>{formattedDate}</h2>
            <div >
              <ul className='purchases__cards'>
                {
                  groupPurchases[date].map((item) => (
                    <PurchaseCard 
                    key={item.id}
                    purchase={item}
                    />
                  ))
                }
              </ul>
            </div>
          </div>
        );
      })
     }
    </div>
  )
}

export default Purchases