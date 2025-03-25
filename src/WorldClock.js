import React, { useState, useEffect } from 'react';

function WorldClock() {

    const [times, setTimes] = useState({
        londonTime: new Date().toLocaleTimeString('en-GB', { timeZone: 'Europe/London', hour12: true }),
        brisbaneTime: new Date().toLocaleTimeString('en-AU', { timeZone: 'Australia/Brisbane' }),
        nzTime: new Date().toLocaleTimeString('en-NZ', { timeZone: 'Pacific/Auckland' }),
    });

    console.log('times', times);
    useEffect(() => {
        const interval = setInterval(() => {
            setTimes({
                londonTime: new Date().toLocaleTimeString('en-GB', { timeZone: 'Europe/London', hour12: true }),
                brisbaneTime: new Date().toLocaleTimeString('en-AU', { timeZone: 'Australia/Brisbane' }),
                nzTime: new Date().toLocaleTimeString('en-NZ', { timeZone: 'Pacific/Auckland' }),
            });
        }, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="world-clock-container">
            <div className="world-clock">
                <div className="clock-row">
                    <span 
                        className="flag-container fi fi-gb"
                        style={{ animationDelay: '0s' }}
                    ></span>
                    <strong>United Kingdom</strong>
                    <p>{times.londonTime}</p>
                </div>
                <div className="clock-row">
                    <span
                        className="flag-container fi fi-au"
                        style={{ animationDelay: '0.5s' }}
                    ></span>
                    <strong>Australia</strong>
                    <p>{times.brisbaneTime}</p>
                </div>
                <div className="clock-row">
                    <span
                        className="flag-container fi fi-nz"
                        style={{ animationDelay: '1s' }}
                    ></span>
                    <strong>New Zealand</strong>
                    <p>{times.nzTime}</p>
                </div>
            </div>
        </div >
    );
}

export default WorldClock;