import React , {Component} from 'react';
import Moment from 'moment';
import Dates from './Dates';
import './calendar.css';
export default class Calender extends Component {
    
    componentDidMount(){

        //   this.c();
        
        // console.log("hello:",this.state.dates);
        // console.log(this.state.tdays);

        // console.log(this.state.month);
        // console.log(this.state.cday+2);
        // console.log(new Date(this.state.year).getDay());
        // console.log("hello:",new Date(2019, 7, 0).getDate());
        // for(var i=1; i<=this.state.tdays;i++){
        //     // temp[i]=i;
        //     console.log("hello:",i);
        // }
        
        
    }
   constructor(){
       super();
    this.state={
        month:Moment().month(),
        year:Moment().year(),
        cday:Moment().day(),
        monthList: Moment.months(),
        daysList: Moment.weekdaysShort(),
        cDate:Moment().date(),
        
        // fday: new Date(Moment().year(),Moment().month()).getDay(),
        // tdays: new Date(Moment().year(),Moment().month()+1,0).getDate(),
        // dates: [32],
}}
    
    prevMonth =() => {
        const {month,year} = this.state
        if(month === 0){
            this.setState({month:11,year:year-1})
        }else{
            this.setState({month: month - 1})
        }
        
       }
    nextMonth =() => {
        const {month,year} = this.state
        if(month === 11){
            this.setState({month:0,year:year+1})
        }else{
            this.setState({month: month + 1})
        }

        }
    

        
render() {
    const {monthList,year,month,daysList,cday} = this.state
    
    return (
         <div className="calendar">
            <div className="nav">
                <div className="back" onClick={this.prevMonth}>
                    b
                </div>
                <div className="month">
                    {monthList[month]}
                </div>
                <div className="year">
                    {year}
                </div>
                <div className="next" onClick={this.nextMonth}>
                    n
                </div>
            </div>
            <div className="days">
             {daysList.map((day,id)=>
             <div key={id} className={id === cday ? 'curday' : ''}>{day}</div>)}   
            </div>
            
            <Dates data={this.state}/>
            <Dates data={this.state}/>
            

            
         </div>
    );
}

}