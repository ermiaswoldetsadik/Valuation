import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import {teal300} from "material-ui/styles/colors";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Rate from "./pages/Rate";
import Login from "./pages/Login";
import Logout from './pages/Logout';
import Product from "./pages/Product";
import User from "./pages/User";
import { app, base } from './base';
import CanvasJSReact from './assets/canvasjs.react';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: teal300,
    primary2Color: teal300
  }
});

class App extends Component {
    // sets the initial values
    constructor() {
        super();
        this.setCurrentUser = this.setCurrentUser.bind(this);
        this.state = {
            loggedIn: false,
            currentUser: null,
            uid: "",
            name: "",
            email: "",
            image: "https://www.finearttips.com/wp-content/uploads/2010/05/avatar.jpg"
        }
    }

    setCurrentUser(user) {
        if (user) {
          localStorage.setItem('myData-User', user);
          this.setState({
            loggedIn: true,
            currentUser: user,
            uid: user.uid,
            name: user.displayName,
            email: user.email,
            image: user.photoURL
          })
        } else {
          this.setState({
            loggedIn: false,
            currentUser: null,
            uid: null,
            name: null,
            email: null,
            image: "https://www.finearttips.com/wp-content/uploads/2010/05/avatar.jpg"
          })
        }
      }

      componentWillMount() {
        this.removeAuthListener = app.auth().onAuthStateChanged((user) => {
          if (user) {
            this.setState({
              loggedIn: true,
              currentUser: user,
              uid: user.uid,
              name: user.displayName,
              email: user.email,
              image: user.photoURL
            })
          } else {
            this.setState({
              loggedIn: false,
              currentUser: null,
              uid: null,
              name: null,
              email: null,
              image: "https://www.finearttips.com/wp-content/uploads/2010/05/avatar.jpg"  
            })
          }
        })
      }
    
      componentWillUnmount() {
        this.removeAuthListener();
      }
    

    render() {
      console.log(this.state.currentUser);
      localStorage.setItem('user-id', this.state.uid);
      var user = {
        name: this.state.name,
        uid: this.state.uid,
        email: this.state.email,
        image: this.state.image
      }
        return (
            <Router>
                <MuiThemeProvider muiTheme={muiTheme}>
                    <div>
                        <Navbar 
                            loggedIn={this.state.loggedIn}
                            image={this.state.image}
                            uid={this.state.uid}
                            handleLogOut={this.handleLogOut}
                        />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/rate" render={(props) => {
                              return <Rate user={user} {...props} />
                            }} />
                            <Route exact path="/login" render={(props) => {
                              return <Login setCurrentUser={this.setCurrentUser} {...props} />
                            }} />
                            <Route exact path="/logout" component={Logout} />
                            <Route exact path="/user/:id" render={(props) => {
                              return <User user={user} {...props} />
                            }} />
                            <Route exact path="/product/:id" render={(props) => {
                              return <Product user={user} {...props} />
                            }} />
                        </Switch>
                    </div>
                </MuiThemeProvider>
            </Router>
        );
    };
}

export default App;
// var React = require('react');
// var Component = React.Component;
// var CanvasJSReact = require('./canvasjs.react');
// CanvasJS = CanvasJS.Chart ? CanvasJS : window.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;
// var dataPoints1 = [];
// var dataPoints2 = [];
// var updateInterval = 2000;
// //initial values
// var yValue1 = 408;
// var yValue2 = 350;
// var xValue = 5;
// class App extends Component {
	// constructor() {
	// 	super();
	// 	this.updateChart = this.updateChart.bind(this);
	// 	this.toggleDataSeries = this.toggleDataSeries.bind(this);
	// }
	// componentDidMount(){
	// 	this.updateChart(20);
	// 	setInterval(this.updateChart, updateInterval);
	// }
	// toggleDataSeries(e) {
	// 	if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
	// 		e.dataSeries.visible = false;
	// 	}
	// 	else {
	// 		e.dataSeries.visible = true;
	// 	}
	// 	this.chart.render();
	// }
// 	updateChart(count) {
// 		count = count || 1;
// 		var deltaY1, deltaY2;
// 		for (var i = 0; i < count; i++) {
// 			xValue += 2;
// 			deltaY1 = 5 + Math.random() *(-5-5);
// 			deltaY2 = 5 + Math.random() *(-5-5);
// 			yValue1 = Math.floor(Math.random()*(408-400+1)+400);
// 			yValue2 = Math.floor(Math.random()*(350-340+1)+340);
// 			dataPoints1.push({
// 			  x: xValue,
// 			  y: yValue1
// 			});
// 			dataPoints2.push({
// 			  x: xValue,
// 			  y: yValue2
// 			});
// 		}
// 		this.chart.options.data[0].legendText = " Bugatti Veyron - " + yValue1 + " km/h";
// 		this.chart.options.data[1].legendText = " Lamborghini Aventador - " + yValue2 + " km/h";
// 		this.chart.render();
// 	}
// 	render() {
// 		const options = {
// 			zoomEnabled: true,
// 			theme: "light2",
// 			title: {
// 				text: "Speed of Bugatti vs Lamborghini"
// 			},
// 			axisX: {
// 				title: "chart updates every 2 secs"
// 			},
// 			axisY:{
// 				suffix: " km/h",
// 				includeZero: false
// 			},
// 			toolTip: {
// 				shared: true
// 			},
// 			legend: {
// 				cursor:"pointer",
// 				verticalAlign: "top",
// 				fontSize: 18,
// 				fontColor: "dimGrey",
// 				itemclick : this.toggleDataSeries
// 			},
// 			data: [
// 				{
// 					type: "stepLine",
// 					xValueFormatString: "#,##0 seconds",
// 					yValueFormatString: "#,##0 km/h",
// 					showInLegend: true,
// 					name: "Bugatti Veyron",
// 					dataPoints: dataPoints1
// 				},
// 				{
// 					type: "stepLine",
// 					xValueFormatString: "#,##0 seconds",
// 					yValueFormatString: "#,##0 km/h",
// 					showInLegend: true,
// 					name: "Lamborghini Aventador" ,
// 					dataPoints: dataPoints2
// 				}
// 			]
// 		}
// 		return (
// 			<div>
// 				<CanvasJSChart options = {options}
// 					onRef={ref => this.chart = ref}
// 				/>
// 				{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
// 			</div>
// 		);
// 	}
// }
// module.exports = App; 