import styles from './Transactions.module.css';
import PropTypes from 'prop-types';
import React from 'react';

const Transactions = ({items}) => {
    return (
        <table className={styles.transactionHistory}>
            <thead>
                <tr >
                <th className={styles.tableTitle}>Type</th>
                <th className={styles.tableTitle}>Amount</th>
                <th className={styles.tableTitle}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(item => (
                    <tr key={item.id}>
                        <td className={styles.tableCell}>{item.type}</td>
                        <td className={styles.tableCell}>{item.amount}</td>
                        <td className={styles.tableCell}>{item.currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

Transactions.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Transactions;