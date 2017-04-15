import React, { Component } from 'react';
import Terrain from 'react-icons/lib/md/terrain';
import Road from 'react-icons/lib/fa/road';
import Calendar from 'react-icons/lib/fa/calendar';

export const RunningDayRow = (props) => (
      <tr>
          <td>
              {props.date.getMonth()+1}/{props.date.getDate()}/{props.date.getFullYear()}
          </td>
          <td>
              {props.location}
          </td>
          <td>
              {(props.road) ? <Road/> : null}
          </td>
          <td>
              {(props.crosscountry) ? <Terrain/> : null}
          </td>
      </tr>
                               )
