import PropTypes from "prop-types";
import css from './TransactionHistory.module.css';
import {convertString} from 'helpers/convertString';


export const TransactionHistory = ({items})=>{
    return <table className={css.transactionHistory}>
    <thead className={css.tableHead}>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
  
    <tbody className={css.tableBody}>
        {items.map(({id, type, amount, currency})=>{
            return <tr className={css.tableRow} key={id}>
            <td>{convertString(type)}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        })}
      
    </tbody>
  </table>
}

TransactionHistory.propTypes ={
  items: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }))
    
}