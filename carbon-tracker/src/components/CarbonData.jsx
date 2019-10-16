import React from 'react';
import CarbonFactors from './CarbonFactors';
import CarbonToday from './CarbonToday'
import '../App.css';


const CarbonData = () => {
    return (
        <div className='container'>
            <CarbonFactors />
            <div className="pie">
                <CarbonToday />
            </div>
        </div>
    )
}

export default CarbonData;