import React,{Component} from 'react';


export default class Dates extends Component{
    componentDidMount(){
        this.getDates();
    }
    componentWillReceiveProps() {
        this.setState({
            fday: new Date(this.props.data.year,this.props.data.month).getDay(),
            tdays: new Date(this.props.data.year,this.props.data.month,0).getDate(),
            dates: [],})
            this.getDates()
            this.setState({
                aDate:0,
                startDate:0,
                endDate:0,
            })
      }

    state=
        {   aDate:this.props.data.cDate,
            startDate:this.props.data.cDate,
            endDate:0,
            fday: new Date(this.props.data.year,this.props.data.month).getDay(),
            tdays: new Date(this.props.data.year,this.props.data.month,0).getDate(),
            dates: [],
            click:0,
            range:true,
        }
        
    getDates = ()=>{
        var temp=[]
        for(var i=1; i<=this.state.tdays;i++){
            temp[i]=i;
        }
        this.setState({
            dates:temp,
        })  
    }
    renderBlanks(){
        var temp=[];
        for (let index = 0; index < this.state.fday; index++) {
            temp[index] = index;
            
        }
        return temp.map((b)=><div style={{backgroundColor:"whitesmoke"}}></div>)
    }
    singleDate=(event)=>{
        console.log("date:",event.target.textContent,"/",this.props.data.month,"/",this.props.data.year)
        this.setState({
            aDate:Number(event.target.textContent)
        })
    }
    rangeSelector=(event)=>{
        if(this.state.click===0){ 
            this.setState({
                click:1,
                startDate:Number(event.target.textContent),
                // aDate:Number(event.target.textContent)
            })
            console.log("clicked once",this.state.click);
        }
        if(this.state.click===1){
            this.setState({
                click:2,
                endDate:Number(event.target.textContent)
            })
            console.log("clicked again",this.state.click);
            setTimeout(() => {
                console.log("date:",this.state.startDate,"/",this.props.data.month+1,"/",this.props.data.year,
                "-",this.state.endDate,"/",this.props.data.month+1,"/",this.props.data.year)
            }, 500);
            
        }
        if(this.state.click===2){
            this.setState({
                click:1,
                startDate:Number(event.target.textContent),
                endDate:0,
            })
            console.log("click reset",this.state.click);
        }
        
    }

    renderDates(){
        return this.state.dates.map((date,id)=><div key={id} 
        
        className={
            this.state.range? date > this.state.startDate && date < this.state.endDate ? 'range' : 
            date === this.state.startDate || date === this.state.endDate ? 'curday':''
             : date === this.state.aDate?"curday":'' 
        }




        onClick={this.state.range?this.rangeSelector:this.singleDate}>
        {date}</div>)
    }
    render(){
        return(
            
        <div className="dates">
            {this.renderBlanks()}
           {this.renderDates()} 
           {/* {this.renderDates()}  */}


        </div>
            
        )
    }
}