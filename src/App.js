import React, { Component } from 'react';
//import { render } from 'react-dom';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      data:[
        {
          title: 'UtteranceRewritorProcess',
          score: 81.0899894711541,
          content: 'details1 '
        },
        {
          title: 'Subsystem2',
          score: 32.0899894711541,
          content: 'details2'
        },
        {
          title: 'Subsystem3',
          score: 63.0899894711541,
          content: 'details3'
        },
        {
          title: 'Subsystem4',
          score: 83.0899894711541,
          content: 'details4'
        },
        {
          title: 'Subsystem5',
          score: 43.0899894711541,
          content: 'details5'
        },
        {
          title: 'Subsystem6',
          score: 55.0899894711541,
          content: 'details6'
        }
      ],
      graphData:{
        current: 3,
        marks: [
          {position: 0, label: '0'},
          {position: 5, label: '1'},
          {position: 33, label: '33'},
          {position: 66, label: '66ms'},
          {position: 100, label: '100ms'},
        ],
        blockStart: 69,
        blockEnd: 88
      }
    };
  }
  
  componentDidMount(){
    
    let generalScore =0;
    let variants =0;
    let higherScore =0;
    
    this.state.data.map(function (d, i) {
      generalScore = generalScore + d.score;
      higherScore = d.score > higherScore ? d.score : higherScore;
      variants++;
    })
    
    this.setState({general:generalScore, variants, higherScore})
    
    setTimeout(()=>{
      this.changeData()
    },4000)
  }
  
  
  changeData = ()=> {
    this.setState({data:[
        {
          title: 'UtteranceRewritorProcess',
          score: 45.0899894711541,
          content: 'details1'
        },
        {
          title: 'Subsystem2',
          score: 85.0899894711541,
          content: 'details2'
        },
        {
          title: 'Subsystem3',
          score: 33.0899894711541,
          content: 'details3'
        },
        {
          title: 'Subsystem4',
          score: 100,
          content: 'details4'
        },
        {
          title: 'Subsystem5',
          score: 33.0899894711541,
          content: 'details5'
        },
        {
          title: 'Subsystem6',
          score: 65.0899894711541,
          content: 'details6'
        }
      ],higherScore:100})
  }
  
  handleClick(i) {
    this.setState({
      current: i
    });
  }
  
  renderBar(width) {
    return (
      <div className='bar' style={{width: `${width}%`}}></div>
    )
  }
  
  renderBlock(start, end) {
    
    const endBlock = parseInt(end) - parseInt(start);
    return (
      <React.Fragment>
        <div className='tl_label' style={{
          //start Block
          marginLeft: `${start}%`,
          //end Block
          width: `${endBlock}%`
        }}>
          <div className="block_label">
            <div>▶{start}</div>
            <div>{end}◀</div>
          </div>
        
        </div>
        <div className='tl_block' style={{
          //start Block
          marginLeft: `${start}%`,
          //end Block
          width: `${endBlock}%`
        }}>
        </div>
      </React.Fragment>
    )
  }
  
  
  renderMarks(marks) {
    var list = marks.map(function (d, i) {
      return (
        <React.Fragment>
          <div className='tl_label' style={{marginLeft: `${d.position}%`}}>
            {d.label}
          </div>
          <div className='tl_mark' style={{width: `${d.position}%`}}>
          </div>
        </React.Fragment>
      )
    }.bind(this));
    return list
  }
  
  renderBars() {
    
    let scores=0;
    let list = this.state.data.map(function (d, i) {
      return (<li key={i}>
        <div onClick={this.handleClick.bind(this, i)}
             className={"info " + (this.state.current === i ? 'active' : '')}>
          <div className='info_col'>
                        
                        <span className='truncate'>
                        {d.title}
                        </span>
            
            
            <span className='truncate_number'>
                        {d.score}
                        </span>
          
          </div>
          <span className='bar_col'>

                        {this.renderMarks(this.state.graphData.marks)}
            {this.renderBlock(this.state.graphData.blockStart, this.state.graphData.blockEnd)}
            {this.renderBar(d.score *100 / this.state.higherScore)}
            
                    </span>
        </div>
        <div className='content'>{d.content} </div>
      
      </li>)
    }.bind(this));
    
    return list;
  }
  
  
  render() {
    console.log(this.state)
    return (
      <div className='wrapper'>
        
        <ul>
          {this.renderBars()}
        </ul>
      </div>
    );
  }
}

export default App;
