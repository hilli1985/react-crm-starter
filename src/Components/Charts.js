import React, { Component } from 'react';
import '../Styles/Analytics.css';
import Chart1 from './Charts/Chart1'
import Chart2 from './Charts/Chart2'
import Chart3 from './Charts/Chart3'
import Chart4 from './Charts/Chart4'

class Charts extends Component {
    constructor() {
        super()
        this.state = { 
          data : {}
        }
      }
    
    componentDidMount(){
        this.getBySelect();
    }

    
    getTopEmployees(){
        let clients = this.props.clients;
        // console.log(clients);
        if (clients.length<=0) {
            return;
        }
        let sales = clients.filter((client) => (client.sold));
        // console.log(sales);
        let topEmployees = []; 
        let employees = sales.map((client) => (client.owner));
        let unique = employees.filter((e,index) => employees.indexOf(e)===index );
        let sortedByEmployee = unique.map(employee => (sales.filter(c => (employee===c.owner))));
        sortedByEmployee = (sortedByEmployee.sort(function(a, b) {
            return b.length - a.length}));
        topEmployees.push({name: (sortedByEmployee[0][0].owner), sales:Math.round(sortedByEmployee[0].length/sortedByEmployee[0].length*100)});
        topEmployees.push({name: (sortedByEmployee[1][0].owner), sales:Math.round(sortedByEmployee[1].length/sortedByEmployee[0].length*100)});
        topEmployees.push({name: (sortedByEmployee[2][0].owner), sales:Math.round(sortedByEmployee[2].length/sortedByEmployee[0].length*100)});
        return topEmployees;
    }

    getBySelect = () => {
        let firstContact = this.getDataBySelect('firstContact');
        let owner = this.getDataBySelect('owner');
        let country = this.getDataBySelect('country');
        let email = this.getDataBySelect('emailType');
        let data = {firstContact:firstContact,owner:owner,country:country,emailType:email}
        //console.log(data);
        this.setState({data : data});
        
    }


    getDataBySelect = (select) => {
        let clients = this.props.clients;
        let sales = clients.filter((client) => (client.sold));
        if (sales.length<=0){
            return;
        }
        if (select==='firstContact'){
            return(this.getDataByMonth(select));
        }
        let salesSorted = sales.map((client) => (client[select]));
        let unique = salesSorted.filter((e,index) => salesSorted.indexOf(e)===index);
        let salesSortedBy = unique.map(item => (sales.filter(c => (item===c[select]))));    
        salesSortedBy = salesSortedBy.map(s =>([s[0][select],s.length]));
        salesSortedBy = salesSortedBy.sort((a,b) => a[0]-b[0])
        return (salesSortedBy);

    }
    getDataByMonth(select){
        let sales = this.props.clients.filter((client) => (client.sold));
        let salesSorted = sales.map((client) => (client[select].split("T")[0].split("-")[1]));
        let unique = salesSorted.filter((e,index) => salesSorted.indexOf(e)===index );
        let salesSortedBy = unique.map(select => (salesSorted.filter(c => (
            c===select))));
        salesSortedBy.sort((a,b)=>{return parseInt(a[0])-parseInt(b[0])})
        let data = salesSortedBy.map((month,index) => ([this.getMonth(index),month.length]));
        return(data);
    }
    getMonth(index){
        let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
        return (months[index])
    }

    getSalesSince30(){
        let today = new Date();
        today = today.toISOString();
        var date = new Date();
        date.setDate(date.getDate() - 30);
        var befor30days = date.toISOString(); 
        // console.log(today);
        // console.log(befor30days);
        let sales = this.props.clients.filter((client) => (client.sold));
        let salesSorted = sales.filter((client) => (client['firstContact']>=befor30days)&&(client['firstContact']<=today));
        salesSorted = salesSorted.map(s => s['firstContact'].split("T")[0])
        let unique = salesSorted.filter((e,index) => salesSorted.indexOf(e)===index );
        //console.log(unique);
        //console.log(salesSorted);
        let salesSortedBy = unique.map(select => (salesSorted.filter(c => (
            c===select))));
        //console.log(salesSortedBy);
        let data = salesSortedBy.map((day) => ([day[0],day.length]));
        //console.log('&&&&');
        data[0][1] = (data[0][1]*16);
        data[2][1] = (data[2][1]*10);
        data.sort((a,b) => a[0].split('-')[2]-b[0].split('-')[2]);
        data.sort((a,b) => a[0].split('-')[1]-b[0].split('-')[1]);
        //console.log(data);
        return(data);
    }
    

    
    render() {
        let salesSince30 = this.getSalesSince30();
        let topEmployees = this.getTopEmployees();
        return (<div>
            <div className="parent-grid-2">
            <Chart1 className="chart-1" topEmployees={topEmployees}/>
            <Chart2 className="chart-2" getDataBySelect={this.getDataBySelect} dataBySelect={this.state.data}/>
            </div>
            <div className="parent-grid-3">
            <Chart3 className="chart-3" salesSince30={salesSince30}/>
            <Chart4 className="chart-4"/>
            </div></div>)
        }
    }
    export default Charts