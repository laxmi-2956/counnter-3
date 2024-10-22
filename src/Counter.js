import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function Count()
{
    const [ count,setCount] = useState(0);
    function handleClick() {
        setCount(count + 1);
      }function decriment() {
        setCount(count - 1);
      }
      function reset() {
        setCount(0);
      }
    return(
 <div style={{backgroundColor : 'black',  color : 'white', padding : '20px',  textAlign : 'center'}}>
     <h1 style={{fontSize : '40px'}}>Counter</h1>
     <h2>{count}</h2>
        <Button variant="success" style={{padding : '0px 20px' , backgroundColor : 'black' , color : 'white' , border : '1px solid white' , margin : '0px 40px' , fontSize : '30px'}} onClick={handleClick}>+</Button>
        <Button variant="success" style={{padding : '10px 20px' ,  backgroundColor : 'black' , color : 'white' , border : '1px solid white' , margin : '0px 40px', fontSize : '30px'}} onClick={reset}>Reset</Button>
        <Button variant="success" style={{padding : '0px 20px' , backgroundColor : 'black' , color : 'white', border : '1px solid white' , margin : '0px 40px' , fontSize : '30px'}} onClick={decriment}>-</Button>
 </div>
    )     
}
export default Count
