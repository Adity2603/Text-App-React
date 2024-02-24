import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked: " +  text);
         
        setText(text.toUpperCase())
        
    }
    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked: " +  text);
         
        setText(text.toLowerCase())
    }

    const handleOnChange = (event)=>{
        // console.log("On change");
        document.querySelector(".ChangeName").innerText = "Click To Copy "
        setText(event.target.value) 
    }

     const copyTextFromTextareaToClipboard =  ()=> {
        
      
        navigator.clipboard.writeText(text)
          .then(() => {
            document.querySelector(".ChangeName").innerText = "Copied"
            // alert("Text Copied Successfully")
            console.log('Text copied to clipboard successfully');
          })
          .catch((err) => {
            console.error('Unable to copy text to clipboard:', err);
          });
      }
      
      const TextClear = ()=>{
        setText("")
      }
      
      

    const [text, setText] = useState(''); 
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    return (
        <div> 
            <h1>{props.heading}</h1>
            <div className="mb-3"> 
            <textarea className="form-control" placeholder='Enter Your Text' value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-danger mx-2 " onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-danger mx-2" onClick={handleLoClick}>Convert to Lower Case</button>
            <button className="btn btn-success mx-2 ChangeName " onClick={copyTextFromTextareaToClipboard}>Copy to clipboard</button>
            <button className="btn btn-primary mx-2 ChangeName " onClick={TextClear}>Clear</button>

            <div className="container my-3 ">
                <h3>Character = {text.length}</h3>
                <h3>Words = {text.split(" ").filter((element)=>{return element.length !== 0}).length}</h3>
                <h4>Preview </h4>
                <p>{text}</p>
            </div>

            
        </div>
    )
}