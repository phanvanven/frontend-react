import React from 'react'
import { TestDataCompany } from '../Table/testData'

type Props = {
    config: any;
    data: any;
}

const RatioList = (props: Props) => {
    const {data, config} = props;
    const renderedRows = config.map((row:any) => {
        return (
            <li className='py-3 sm:py-4'>
                <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                            {row.label}
                        </p>
                        <p className="text-sm text-gray-500 truncat">
                            {row.subTitle && row.subTitle}
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900">
                        {row.render(data)}
                    </div>
                </div>
            </li>
        )
    })
    return (
        <div className='bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-full'>
            <ul className="divide-y divide-gray-200">
                {renderedRows}
            </ul>
        </div>
    )
}

export default RatioList