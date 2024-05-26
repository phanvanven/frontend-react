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
                    <CompanyDashboard><Tile title='Company Name' subTitle={company.companyName}/></CompanyDashboard>
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