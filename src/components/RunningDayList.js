import React from 'react';
import Terrain from 'react-icons/lib/md/terrain';
import Road from 'react-icons/lib/fa/road';
import Calendar from 'react-icons/lib/fa/calendar';
import { RunningDayRow } from './RunningDayRow';
import { Link } from 'react-router';

export const RunningDayList = ({days, filter}) =>  {
  const filteredDays = (!filter ||
        !filter.match(/road|crosscountry/))?
        days:
        days.filter(day => day[filter])

    return (
      <div className="run-day-list">
      <table>
          <thead>
              <tr>
                  <th>Date</th>
                  <th>Location</th>
                  <th>Road</th>
                  <th>CrossCountry</th>
              </tr>
              <tr>
                  <td colSpan={4}>
                      <Link to="list-days">
                           All Days
                      </Link>
                      <Link to="list-days/road">
                           Road Days
                      </Link>
                      <Link to="list-days/crosscountry">
                           CrossCountry Days
                      </Link>

                  </td>
              </tr>
          </thead>
          <tbody>
              {filteredDays.map((day, i) =>
                  <RunningDayRow key={i}
                                 location={day.location}
                                 date={day.date}
                                 road={day.road}
                                 crosscountry={day.crosscountry} />
              )}
          </tbody>
      </table>
    </div>
)
}
