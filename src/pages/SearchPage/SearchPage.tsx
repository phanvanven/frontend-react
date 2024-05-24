import React, { ChangeEvent, FormEvent, useState } from 'react'
import { CompanySearch } from '../../company.d';
import { searchCompanies } from '../../api';
import NavBar from '../../components/NavBar/NavBar';
import Search from '../../components/Search/Search';
import ListPortfolio from '../../components/Portfolio/ListPortfolio/ListPortfolio';
import CardList from '../../components/CardList/CardList';

interface Props {

}



const SearchPage = (props: Props) => {
    const [search, setSearch] = useState<string>("");
  const [portfolioValues, setPortfolioValues] = useState<string[]>([]);
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>("");


  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const onSearchSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await searchCompanies(search);
    if (typeof result === "string") {
      setServerError(result);
    } else if (Array.isArray(result.data)) {
      setSearchResult(result.data);
    }
  };

  const onPortfolioCreate = async (e: any) => {
    e.preventDefault();
    const exists = portfolioValues.find(value => value === e.target[0].value);
    if (exists) return;
    const updatedPortfolio = [...portfolioValues, e.target[0].value];
    setPortfolioValues(updatedPortfolio);
  }

  const onPortfolioDelete = async (e: any) => {
    e.preventDefault();
    const removed = portfolioValues.filter(value =>{
      return value !== e.target[0].value;
    });

    setPortfolioValues(removed);
  }
  return (
    <>
      <Search onSearchSubmit={onSearchSubmit} search={search} handleSearchChange={handleSearchChange} />
      <ListPortfolio portfolioValues={portfolioValues} onPortfolioDelete={onPortfolioDelete}/>
      <CardList searchResults={searchResult} onPortfolioCreate={onPortfolioCreate} />
      {serverError && <div>Unable to connect to API</div>}
    </>
  )
}

export default SearchPage