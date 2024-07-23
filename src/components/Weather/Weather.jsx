import React, { useEffect, useState } from 'react';

function BigWeather() {
  const [weatherData, setWeatherData] = useState(null);

  //http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/${DETAIL_SERVICE}?serviceKey=${SERVICE_KEY}&numOfRows=${numOfRows}&pageNo=${pageNo}&dataType=json&base_date=${BASE_DATE}&base_time=${BASE_TIME}&nx=${NX}&ny=${NY}
  //params변화필요

  //예시) 초단기예보조회 : getUltraSrtFcst
  const url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=6WlpmOs9EdrNYOaDFrKdMbronqxB4ebH1C6rxVCiUX%2F2WfCpvG%2FPafIR67Cp4%2F2J2kGop7biVM1XECDY9EjzjA%3D%3D&numOfRows=1&pageNo=1&dataType=json&base_date=20240722&base_time=0700&nx=55&ny=127';

  useEffect(() => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        const weatherItems = data.response.body.items.item;
        setWeatherData(weatherItems);
      })
      .catch(error => {
        console.error('There was an error making the request:', error);
      });
  }, []);

  return (
    <div>
      <h1>Big Weather Widget</h1>
      {weatherData ? (
        <div>
          {weatherData.map((item) => (
            <div >
              <p>Date: {item.baseDate}</p>
              <p>Time: {item.baseTime}</p>
              <p>Category: {item.category}</p>
              <p>Forecast Date: {item.fcstDate}</p>
              <p>Forecast Time: {item.fcstTime}</p>
              <p>Forecast Value: {item.fcstValue}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default BigWeather;