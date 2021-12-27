import React, { useState, useEffect, useRef, useReducer } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const StoreListItem = (stores) => {
    const MapContainer = (props) => {

        const locations = [
            {
              name: props.location_name,
              location: { 
                lat: props.lat,
                lng: props.lng 
              },
            }
          ];
  
        const mapStyles = {        
          height: "250px",
          width: "100%",
        };
        
        const defaultCenter = {
          lat: props.lat, lng: props.lng
        }
        
        return (
                <GoogleMap
                    mapContainerStyle={mapStyles}
                    zoom={13}
                    center={defaultCenter}
                    options={{
                        disableDefaultUI: true,
                    }}
                >
                    {
                    locations.map(item => {
                        return (
                        <Marker key={item.name} position={item.location}/>
                        )
                        })
                    }
                </GoogleMap>
        )
      }

    const updateStores = Object.entries(stores.stores)
    .map( ([key, value]) => {

        let i = value["info"]["index"];
        if (i % 2 == 0){
        return (
            <section className="slice slice-lg" key={i}>
                <div className="container">
                    <div className="py-6">
                        <div className="row row-grid justify-content-between align-items-center">
                            <div className="col-lg-5">
                                <h5 className="h3" style={{lineHeight: ".5"}}>{ key }</h5>
                                <p className='text-muted'> {Object.keys(value["info"]["operation_times"]).map((timeKey, index) => {
                                    return (<span key={timeKey}>{timeKey}: {value["info"]["operation_times"][timeKey]["start"]}-{value["info"]["operation_times"][timeKey]["end"]}<br/></span> );
                                }) } </p>
                                { value["vendors"].map((vendor) =>{
                                    return (
                                        <span key={vendor["name"]}>
                                            <div className="d-flex align-items-center" style={{paddingBottom: "1rem"}}>
                                                <div>
                                                    <div className="icon icon-shape bg-primary text-white icon-sm rounded-circle mr-3">
                                                        <i className="fas fa-store"></i>
                                                    </div>
                                                </div>
                                                <div>
                                                    <span className="h6 mb-0">{ vendor["name"] }</span>
                                                </div>
                                            </div>

                                            <ul className="list-unstyled mb-0">
                                            <p>Has { vendor["products"].map((product, i, row) => { 
                                                if (i + 1 === row.length && row.length > 1) {
                                                    return (<span key={i}>and {product}.</span>);
                                                } else if (i + 1 === row.length){
                                                    return (<span key={i}>{product}.</span>);
                                                } else {
                                                    return (<span key={i}>{product}, </span>);
                                                }
                                            })}</p>

                                            </ul>
                                        </span>
                                    )
                                })}
                            </div>
                            <div className="col-lg-6">
                                <div className="card mb-0 ml-lg-5">
                                    <div className="card-body p-2">
                                        {<MapContainer location_name={key} lat={value["info"]["location"]["_latitude"]} lng={value["info"]["location"]["_longitude"]} /> }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
                            } else {
                                return (
                                    <section className="slice slice-lg" key={i}>
                                        <div className="container">
                                            <div className="py-6">
                                                <div className="row row-grid justify-content-between align-items-center">
                                                <div className="col-lg-6">
                                                    <div className="card mb-0 ml-lg-5">
                                                        <div className="card-body p-2">
                                                            {<MapContainer location_name={key} lat={value["info"]["location"]["_latitude"]} lng={value["info"]["location"]["_longitude"]} /> }
                                                        </div>
                                                    </div>
                                                </div>
                                                    <div className="col-lg-5">
                                                        <h5 className="h3" style={{lineHeight: ".5"}}>{ key }</h5>
                                                        <p className='text-muted'> {Object.keys(value["info"]["operation_times"]).map((timeKey, index) => {
                                                            return (<span key={timeKey}>{timeKey}: {value["info"]["operation_times"][timeKey]["start"]}-{value["info"]["operation_times"][timeKey]["end"]}<br/></span> );
                                                        }) } </p>
                                                        {value["vendors"].map((vendor) =>{
                                                            return (
                                                                <span key={vendor["name"]}>
                                                                    <div className="d-flex align-items-center" style={{paddingBottom: "1rem"}}>
                                                                        <div>
                                                                            <div className="icon icon-shape bg-primary text-white icon-sm rounded-circle mr-3">
                                                                                <i className="fas fa-store"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div>
                                                                            <span className="h6 mb-0">{ vendor["name"] }</span>
                                                                        </div>
                                                                    </div>

                                                                    <ul className="list-unstyled mb-0">
                                                                    <p>Has { vendor["products"].map((product, i, row) => { 
                                                                        if (i + 1 === row.length && row.length > 1) {
                                                                            return (<span key={i}>and {product}.</span>);
                                                                        } else if (i + 1 === row.length){
                                                                            return (<span key={i}>{product}.</span>);
                                                                        } else {
                                                                            return (<span key={i}>{product}, </span>);
                                                                        }
                                                                    })}</p>

                                                                    </ul>
                                                                </span>
                                                            )
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                );
                            }
                            count += 1;
    });

    return(
        <div>{updateStores}</div>
    );
};

export default StoreListItem;