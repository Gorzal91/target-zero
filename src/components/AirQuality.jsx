import React, { useEffect, useState } from 'react';
import CitySearch from './CitySearch';
import AirQualityCard from './AirQualityCard';
import PollutantInfo from './PollutantInfo';
import AirQualityLevelsTable from './AirQualityTable';
import 'bootstrap/dist/css/bootstrap.min.css';

function AirQuality() {
  
const [airQualityData, setAirQualityData] = useState(null);
const [error, setError] = useState(null);   

const getAirQuality = async (city) => {
      try {
        const response = await fetch(`https://api.waqi.info/feed/${city}/?token=cf0252306410cf5bc8d4c60c64aff1787d619fae`);
        const data = await response.json()
        console.log(data)
       if(response.ok && data.status === 'ok') {
          setAirQualityData(data.data)
          setError(null)
        } else {
          setError("Sorry, we couldn't find the city you were looking for. Try another location nearby or ensure your spelling is correct.")
          setAirQualityData(null)    
        }
      }
      catch (error) {
        console.error('Error fetching air quality data:', error)
        setError('Sorry, something went wrong. Please try again later.')
        setAirQualityData(null)
      }
}
    return (
    <div className ="container">
      <h1 className = 'mt-5 mb-3'>Air Quality Index Finder</h1>

      <CitySearch getAirQuality={getAirQuality} />
      
      {error && (
        <div className='alert alert-danger' role='alert'>
          {error}
        </div>
      )}
      {airQualityData && (
        <>
        <AirQualityCard data={airQualityData}/>
        <PollutantInfo pollutant={airQualityData.dominentpol} />
        </> 
      )}
      <AirQualityLevelsTable />
      <p>API data sourced from the World Air Quality Index Project. <a href='https://aqicn.org/api/'>LINK</a></p>

    </div>
  );
};

export default AirQuality;

