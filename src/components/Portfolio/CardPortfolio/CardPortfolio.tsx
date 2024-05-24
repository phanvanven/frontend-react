import React, { FormEventHandler } from 'react'
import DeletePortfolio from '../DeletePortfolio/DeletePortfolio';

interface Props {
    portfolioValue: string;
    onPortfolioDelete: FormEventHandler<HTMLFormElement>
}

const CardPortfolio = (props: Props) => {
    const { portfolioValue, onPortfolioDelete } = props;
    return (
        <>
            <h4>{portfolioValue}</h4>
            <DeletePortfolio onPortfolioDelete={onPortfolioDelete} portfolioValue={portfolioValue}/>
        </>
    )
}

export default CardPortfolio