import React, { FormEventHandler } from 'react'
import DeletePortfolio from '../DeletePortfolio/DeletePortfolio';

interface Props {
    portfolioValue: string;
    onPortfolioDelete: FormEventHandler<HTMLFormElement>
}

const CardPortfolio = (props: Props) => {
    const { portfolioValue, onPortfolioDelete } = props;
    return (
        <div className="flex flex-col w-full p-8 space-y-4 text-center rounded-lg shadow-lg md:w-1/3">
            <a
                href=''
                className="pt-6 text-xl font-bold"
            >
                {portfolioValue}
            </a>
            <DeletePortfolio
                portfolioValue={portfolioValue}
                onPortfolioDelete={onPortfolioDelete}
            />
        </div>
    )
}

export default CardPortfolio