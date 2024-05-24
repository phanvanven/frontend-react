import {FormEventHandler } from 'react'
import CardPortfolio from '../CardPortfolio/CardPortfolio';

interface Props {
    portfolioValues: string[];
    onPortfolioDelete: FormEventHandler<HTMLFormElement>
}

const ListPortfolio = (props: Props) => {
    const { portfolioValues, onPortfolioDelete } = props;
    return (
        <>
            <h3>My Portfolio</h3>
            <ul>{portfolioValues && portfolioValues.map(portfolioValue =>{
                return <CardPortfolio portfolioValue={portfolioValue} onPortfolioDelete={onPortfolioDelete}/>;
            })}
            </ul>
        </>
    )
}

export default ListPortfolio