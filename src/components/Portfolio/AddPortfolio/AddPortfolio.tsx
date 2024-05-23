import {FormEventHandler } from 'react'

interface Props {
    onPortfolioCreate: FormEventHandler<HTMLFormElement>
    symbol: string;
}

const AddPortfolio = (props: Props) => {
  const {onPortfolioCreate, symbol} = props;
  return (
    <form onSubmit={onPortfolioCreate}>
        <input readOnly={true} hidden={true} value={symbol} />
        <button type='submit'>Add</button>
    </form>
  );    
}

export default AddPortfolio