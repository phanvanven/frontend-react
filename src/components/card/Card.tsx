import { FormEventHandler } from 'react'
import { CompanySearch } from '../../company.d';
import AddPortfolio from '../Portfolio/AddPortfolio/AddPortfolio';

interface Props {
  id: string;
  searchResult: CompanySearch;
  onPortfolioCreate: FormEventHandler<HTMLFormElement>
}

const Card = (props: Props) => {
  const {
    id,
    searchResult, 
    onPortfolioCreate
  } = props;
  return (
    <div className='card'>
      <img alt="company logo" />
      <div className='details'>
        <h2>{searchResult.name} ({searchResult.symbol})</h2>
        <p>{searchResult.currency}</p>
      </div>
      <p className='info'>
        {searchResult.exchangeShortName} - {searchResult.stockExchange}
      </p>
      <AddPortfolio onPortfolioCreate={onPortfolioCreate} symbol={searchResult.symbol} />
    </div>
  );
}

export default Card