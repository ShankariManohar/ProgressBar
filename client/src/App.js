import { useState } from 'react';
import './App.css';
import ButtonComponent from './components/ButtonComponent/ButtonComponent';
import ProgressBarComponent from './components/ProgressBarComponent/ProgressBarComponent'
const initialState = [
    {key:0,name:'#progressBar1',color:"#8acde5",percentage:25},
    {key:1,name:'#progressBar2',color:"#8acde5",percentage:50},
    {key:2,name:'#progressBar3',color:"#8acde5",percentage:75}
]
const buttons =[
  {value:"25",sign:"sub"},
  {value:"10",sign:"sub"},
  {value:"10",sign:"add"},
  {value:"25",sign:"add"},
]
function App() {
  const [data, setData] = useState(initialState);
  const [buttonValue, setButtonValue] = useState(0);
  const action = (value) => {
    
    let updateState = data.map(obj => {
       if(obj.key === buttonValue){
        let newPercentage = (obj.percentage +parseInt(value)) < 0 ? 0 : (obj.percentage +parseInt(value));
        let newColor = newPercentage > 100 ? "#FF0000" : "#8acde5";
        return {...obj, percentage:newPercentage, color:newColor}
       }
       return obj;
    })
    setData(updateState);
  }
  
  const handleChange = (e) => {
    //console.log(e.target.value)
    setButtonValue(e.target.selectedIndex);
  }

  let progressbarList = data.length > 0
		&& data.map((item, i) => {
		return (
			<option key={i}  value={item.name} >{item.name}</option>
		)
	});
  return (
    <div className="App">
      <h2>Progress Bars Demo</h2>
      {data.map((item, index) => (
         <ProgressBarComponent key={index} color={item.color} percentage={item.percentage} />
      ))}
      <div className="container">
        <select className="progressBarList" onChange={handleChange}>
          {progressbarList}
        </select>
        {buttons.map((item) => (
          <ButtonComponent action={action} sign={item.sign} value={item.value}/>
        ))}
      </div>
    </div>
  );
}

export default App;
