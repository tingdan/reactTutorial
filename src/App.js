import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RunningDayCount from './components/RunningDayCount';
import { RunningDayList } from './components/RunningDayList';
import { AddDayForm } from './components/AddDayForm';
import { Menu } from './components/Menu';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allRunDays: [
        {
          location: "Cooper River Bridge",
          date: new Date("2/3/2017"),
          road: true,
          crosscountry: false
        },
        {
          location: "Brazil",
          date: new Date("7/4/2017"),
          road: false,
          crosscountry: true
        },
        {
          location: "Carlsbad",
          date: new Date("11/7/2017"),
          road: true,
          crosscountry: false
        }
      ]
  }

}
  countDays(filter){
    const { allRunDays } = this.state
    return allRunDays.filter(function(day) {
        if(filter) {
            return day[filter]
        } else {
            return day
        }
    }).length
  }

  render() {
    return (
      <div className="App">
          <h1>Running Day Tracking</h1>
        {(this.props.location.pathname === "/") ?
        <RunningDayCount total={this.countDays()}
                         road={this.countDays("road")}
                         crosscountry={this.countDays("crosscountry")}/> :
        (this.props.location.pathname === "/add-day") ?
        <AddDayForm/> :
        <RunningDayList days={this.state.allRunDays}
                        filter={this.props.params.filter}/>
      }
      <Menu/>
      </div>
    );
  }
}

export default App;
