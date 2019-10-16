import React, { useEffect } from 'react';
import { RadialChart } from 'react-vis';
import {connect} from 'react-redux';
import { fetchData } from '../actions/index';

const CarbonToday = (props) => {

    useEffect (() => {
        props.fetchData();
    }, [])
    
    console.log(props)
    if(props.loading) {
        
        return <h3>Loading Data...</h3>
    }
        
        return (
            <div>
                {props.carbonData.map(data => (
                    <RadialChart
                        showLabels={true}
                        data={[{angle: data.Coal, label:'Coal'}, {angle: data.Oil, label:'Oil'}, {angle: data['Dutch Imports'] + data['French Imports'] + data['Irish Imports'], label:'Imports'}, {angle: data['Gas (Open Cycle)'], label:'Gas (open)'}, {angle: data['Gas (Combined Cycle)'], label:'Gas (comb.)'}, {angle: data.Other, label:'Other'}]}
                        width={300}
                        height={300} />
                ))} 
            </div>
           
        )
       
}
const mapStateToProps = (state) => {
    return {
        carbonData: state.carbonData,
        loading: state.loading,
        error: state.error
    };
};

export default connect(mapStateToProps, {fetchData})(CarbonToday)