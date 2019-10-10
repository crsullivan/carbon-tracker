import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchData} from '../actions/index';

const CarbonFactors = (props) => {
    useEffect (() => {
        props.fetchData();
    }, [])
    console.log(props)
    if(props.loading) {
        return <h3>Loading Data...</h3>
    }
        return (
    
           
            <div>
                {props.error && <p>{props.error}</p>}
                
                {props.carbonData.map(data => (
                    <>
                        <div>{data.Biomass}</div>
                        <div>{data.Coal}</div>
                        <div>{data.DutchImports}</div>
                        <div>{data.Oil}</div>
                        <div>{data.Oil}</div>
                        <div>{data.Oil}</div>
                        <div>{data.Oil}</div>
                        <div>{data.Oil}</div>

                    </>
        ))}
     
            </div>   
        );
    }

    const mapStateToProps = (state) => {
        return {
            carbonData: state.carbonData,
            loading: state.loading,
            error: state.error
        };
    };

export default connect(mapStateToProps, {fetchData})(CarbonFactors)