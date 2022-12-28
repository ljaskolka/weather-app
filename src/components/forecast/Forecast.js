import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./forecast.css";

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));
  
  return (
    <>  
      <Accordion allowZeroExpanded>
        <div className="accordion-container">
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                
                    <div className="daily-item">
                        <div className="day-container">
                        <label className="day">{forecastDays[idx]}</label>
                        </div>
                        <div className="icon-container">
                        <img alt="weather" className="icon-small" src={`icons/${item.weather[0].icon}.png`}/>
                        </div>
                        <label className="min-max">{Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C</label>
                        <label className="description">{item.weather[0].description}</label>
                    </div>
                
                
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
        </div>
      </Accordion>
    </>
  );
};

export default Forecast;