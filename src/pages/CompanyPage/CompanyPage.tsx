import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { CompanyProfile } from '../../company.d';
import { getCompanyProfile } from '../../api';
import SideBar from '../../components/SideBar/SideBar';
import CompanyDashboard from '../../components/CompanyDashboard/CompanyDashboard';
import Tile from '../../components/Tile/Tile';

interface Props {

}

const CompanyPage = (props: Props) => {
    let { ticker } = useParams();
    const [company, setCompany] = useState<CompanyProfile>();

    useEffect(() => {
        const getProfileInit = async () => {
            const result = await getCompanyProfile(ticker!);
            setCompany(result?.data[0]);
        }

        getProfileInit();
    }, []);

    return (
        <>
            {company ? (
                <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">
                    <SideBar/>
                    <CompanyDashboard ticker={ticker!}>
                        <Tile title='Company Name' subTitle={company.companyName}/>
                        <Tile title='Price' subTitle={company.price.toString()}/>
                        <Tile title='Sector' subTitle={company.sector}/>
                        <Tile title='DCF' subTitle={company.dcf.toString()}/>
                        <p className='bg-white shadow rounded text-medium text-gray-900 p-3 mt-1 m-4'>
                            {company.description}
                        </p>
                    </CompanyDashboard>
                </div>
            ) : (
                <div>
                    Company not found!
                </div>
            )}
        </>
    )
}

export default CompanyPage