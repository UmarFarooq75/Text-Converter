
import React,{useState} from 'react'
import './textfile.css';
export default function TestFile(props) {

  const handleup = () =>{
    console.log("Upper Case Was Clicked");
    let newText=Text.toLocaleUpperCase();
    setText(newText);

    if(Text==="")
    {
      props.showalert("Please Enter text","Failed")
    }
    else{
      props.showalert("Converted to UpperCase ","Success")
    }
  }

  const handlecleartext=()=>{
    let newtexte=''
    setText(newtexte);
    setnum(newtexte);
    setnum1(newtexte);
    if(Text==="")
    {
      props.showalert("Already cleared","Failed")
    }
    else{
      props.showalert("Text is cleared","Success")
    }
     
  }

  const handlelo = () =>{
    //console.log("Lower Case Was Clicked");
    let newText=Text.toLocaleLowerCase();
    setText(newText);
    if(Text==="")
    {
      props.showalert("Please Enter text","Failed")
    }
    else{
      props.showalert("Converted to LowerCase ","Success")
    }
  }

  const handleonChange=(event)=>{
    // console.log("On Change Clicked");
    setText(event.target.value);

  }
  function findTotalCount(str) {
   
    let count = 0;
  
    for (let ch of str) {
      if (ch >= "0" && ch <= "9") {
        count++;
      }
    }
    return count;
  }
  const handleCounterInteger=()=>{
    let str=Text.toString();
    setnum(findTotalCount(str));
    if(Text==="")
    {
      props.showalert("Please Enter text","Failed")
    }
    else{
      props.showalert("Total Numbers in text are counted ","Success")
    }

  
  }

  function findnum(arr) {

    var finalStr = "";
    for(var i = 0; i < arr.length; i++){
      if (arr[i] >= "0" && arr[i] <= "9"){
            finalStr += arr[i] +" ";
        }
    }
    return finalStr;
  }

  const handlegetnumbers=()=>{
    let str=Text.toString();
    setnum1(findnum(str));
    if(Text==="")
    {
      props.showalert("Please Enter text","Failed")
    }
    else{
      props.showalert("Numbers are geted","Success")
    }

  }

  const [Text, setText] = useState("");
  const [num, setnum] = useState(" ");
  const [num1, setnum1] = useState(" ");
  //setText("You Clicked uppar case");

  const copyToClipboard = () => {
    

    if (navigator && navigator.clipboard && navigator.clipboard.writeText)
    { 
      
      if(Text==="")
      {
        props.showalert("Please Enter text","Failed")
      }
      else{
        props.showalert("Copied","Success")
      }
      return navigator.clipboard.writeText(Text);
    }
    return Promise.reject('The Clipboard API is not available.');
  };

  return (

    <>

      <div className="rounded" style={{backgroundColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}}>
          <div className='container' >
              <br></br>
              <h2>{props.heading}</h2>
              
              <div className="mb-2">
                  <textarea class="col-md-7"  style={{backgroundColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}} value = {Text}onChange={handleonChange} id="myBox1" rows="14"></textarea>
              </div>
                  
              <button type="submit" className="btn btn-primary mx-1" onClick={handleup}>Upper Case</button>

              <button type="submit" className="btn btn-primary mx-1" onClick={handlelo}>Lower Case</button>

              <button type="submit" className="btn btn-primary mx-1" onClick={handleCounterInteger}>Count Numbers</button>

              <button type="submit" className="btn btn-primary mx-1" onClick={handlegetnumbers}>Get Numbers</button> 

              <button type="submit" className="btn btn-primary mx-1" onClick={handlecleartext}>Clear Text</button> 

              <button type="submit" className="btn btn-primary mx-1" onClick={copyToClipboard}>Copy Text</button> 

              <br></br> <br></br>
              <div className="float-right" >
                
                <h2>Preview</h2>

                <div className="mb-2" class="float-left">
                    <textarea style={{backgroundColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black' }} class="col-md-7" value={Text} id="myBox1" rows="14"></textarea>
                </div>

              </div>    

            </div>

            <br></br>    <br></br>    <br></br>

                  <div class="col-md-7">

                      <table  border="2px" style={{margin:'20px',marginLeft:'20px',backgroundColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}} className="table table-bordered" align="center">
                      <thead className="thead-white">
                        <tr>
                          <td colSpan='7'><h3 align="center">Your Text Summary</h3></td>
                        </tr>
                      </thead>
                      <tbody >
                        <tr>
                          <th scope="row" >Characters in Your Text</th>
                          <td> {Text.length}</td>
                        </tr>
                       
                        <tr>
                          <th scope="row">Words in Your Text</th>
                          <td> {Text.split(" ").length-1}</td>
                        </tr>

                        <tr>
                          <th scope="row">Any one can read this text in</th>
                          <td> {Text.split(" ").length*0.008}s</td>
                        </tr>

                        <tr>
                          <th scope="row"> How Many Numbers in Text</th>
                          <td>{num}</td>
                        </tr>

                        <tr>
                          <th scope="row">Numbers are</th>
                          <td>{num1}</td>
                        </tr>

                        </tbody>
                        </table>

                    
                  </div>
                  <br></br>    <br></br>    <br></br>
        </div>
    </>
  )
}
