import React from 'react';
import PropTypes from 'prop-types'
import Terrain from 'react-icons/lib/md/terrain';
import Road from 'react-icons/lib/fa/road';
import Calendar from 'react-icons/lib/fa/calendar';


export default class RunningDayCount extends React.Component {
  percentToDecimal(decimal) {
    return ((decimal * 100 ) + '%');
  }
  calcGoalProgress(total, goal) {
    return this.percentToDecimal(total/goal);
  }

  render() {
    return (
      <div className="running-day-count">
        <div className="total-days">
          <span>{this.props.total}</span>
          <Calendar/>
          <span>days</span>
        </div>
        <div className="row2">
          <div className="road">
            <span>{this.props.road}</span>
            <Road/>
            <span>days</span>
          </div>
          <div className="crosscountry">          
            <span>{this.props.crosscountry}</span>
            <Terrain/>
            <span>days</span>
          </div>
        </div>
        <div>
          <span id="sum">
            {this.calcGoalProgress(
              this.props.total,
              this.props.goal)}
               of Our goal {this.props.goal} days
          </span>
        </div>
      </div>
    )
  }
}

RunningDayCount.defaultProps   = {
    total: 50,
    road: 50,
    crosscountry: 15,
    goal: 100

}

RunningDayCount.propTypes = {
  total: PropTypes.number,
  road: PropTypes.number,
  crosscountry: PropTypes.number
}
