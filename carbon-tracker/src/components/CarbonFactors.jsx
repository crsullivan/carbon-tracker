import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchData} from '../actions/index';
import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    VerticalBarSeries,
  } from 'react-vis';
  import '../App.css';



const CarbonFactors = (props) => {
   
    
    useEffect (() => {
        props.fetchData();
    }, [])
    
    console.log(props)
    if(props.loading) {
        
        return <h3>Loading Data...</h3>
    }
    
        return (
    
           
            <div className="bar-graph">
                {props.error && <p>{props.error}</p>}
                
                {props.carbonData.map(data => (
                    <>
                        <h1>UK Carbon Emission Sources</h1>
                        <XYPlot xType="ordinal" width={700} height={500} xDistance={200}>
                            <VerticalGridLines />
                            <HorizontalGridLines />
                            <XAxis />
                            <YAxis />
                            <VerticalBarSeries data={[{x: 'Coal', y: data.Coal}, {x: 'Oil', y: data.Oil}, {x: 'Imports', y: data['Dutch Imports'] + data['French Imports'] + data['Irish Imports']}, {x: 'Gas (open)', y: data['Gas (Open Cycle)']}, {x: 'Gas (comb.)', y: data['Gas (Combined Cycle)']}, {x: 'Other', y: data.Other}]} />
                        </XYPlot>
                    </>
        ))}
           
            </div> 
        );
    }  

    const mapStateToProps = (state) => {
        console.log(state)
        return {
            carbonData: state.carbonData,
            loading: state.loading,
            error: state.error
        };
    };

export default connect(mapStateToProps, {fetchData})(CarbonFactors)