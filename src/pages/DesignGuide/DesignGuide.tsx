import React from 'react'
import Table from '../../components/Table/Table'
import RatioList from '../../components/RatioList/RatioList'

type Props = {}

const DesignGuide = (props: Props) => {
    return (
        <>
            <h1>
                Design guide - This is the design guide for Fin Shark. 
                There are reuable components of the app with brief instructions on how to use them.
            </h1>
            <RatioList/>
            <Table/>
            <h3>
                Table - table takes in a configuration object and company data as params.
                Use the config to style your table.
            </h3>
        </>
    )
}

export default DesignGuide