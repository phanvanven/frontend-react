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
      <form onSubmit={onPortfolioDelete}>
        <input hidden={true} value={portfolioValue} />
        <button className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-red-500 hover:text-red-500 hover:bg-white border-red-500">
          X
        </button>
      </form>
    </div>
    )
}

export default DeletePortfolio