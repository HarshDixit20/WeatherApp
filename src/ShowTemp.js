import React from 'react'

export default function ShowTemp({text}) {
  return (
    <div className="row">
      <div className="col-sm-6 mb-3 mb-sm-0">
        <div className="card">
          <div className="card-body">
           <h5 className="card-title">Description</h5>
           <p className="card-text">{text.description}</p>        
          </div>
        </div>
      </div>
      <div className="col-sm-6">
       <div className="card">
        <div className="card-body">
          <h5 className="card-title">Temperature</h5>
          <p className="card-text">{text.temp } °F</p>
        </div>
       </div>
      </div>
      <div className="col-sm-6">
       <div className="card">
        <div className="card-body">
          <h5 className="card-title">Max Temperature</h5>
          <p className="card-text">{text.temp_max} °F</p>
        </div>
       </div>
      </div>
      <div className="col-sm-6">
       <div className="card">
        <div className="card-body">
          <h5 className="card-title">Min Temperature</h5>
          <p className="card-text">{text.temp_min} °F</p>
        </div>
       </div>
      </div>
      <div className="col-sm-6">
       <div className="card">
        <div className="card-body">
          <h5 className="card-title">Humidity</h5>
          <p className="card-text">{text.humidity}%</p>
        </div>
       </div>
      </div>
      <div className="col-sm-6">
       <div className="card">
        <div className="card-body">
          <h5 className="card-title">Sunrise</h5>
          <p className="card-text">{text.sunrise}</p>
        </div>
       </div>
      </div>
      <div className="col-sm-6">
       <div className="card">
        <div className="card-body">
          <h5 className="card-title">Sunset</h5>
          <p className="card-text">{text.sunset}</p>
        </div>
       </div>
      </div>
      <div className="col-sm-6">
       <div className="card">
        <div className="card-body">
          <h5 className="card-title">Country</h5>
          <p className="card-text">{text.country}</p>
        </div>
       </div>
      </div>
    </div>
  )
}
