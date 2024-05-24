import { FormEventHandler } from 'react'

interface Props {
    portfolioValue: string;
    onPortfolioDelete: FormEventHandler<HTMLFormElement>;
}

const DeletePortfolio = (props: Props) => {
    const {
        portfolioValue,
        onPortfolioDelete
    } = props;
    return (
        <div>
            <form>
                <input hidden={true} value={portfolioValue} />
            </form>
        </div>
    )
}

export default DeletePortfolio