import {ChangeEventHandler, FormEventHandler } from 'react'

interface Props {
    onSearchSubmit: FormEventHandler<HTMLFormElement>
    search: string | undefined;
    handleSearchChange: ChangeEventHandler<HTMLInputElement>
};

const Search = (props: Props) => {
    const {
        onSearchSubmit, 
        search, 
        handleSearchChange
    } = props;
   
    return (
        <form onSubmit={onSearchSubmit}>
            <input value={search} onChange={handleSearchChange}/>
        </form>
    )
}

export default Search