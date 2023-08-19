import React,{useState} from 'react'

export default function Textform(props) { 

  const handleUpperCase = ()=>{
    // console.log('Uppercase was clicked!');
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to Uppercase!', 'success');
  }

  const handleLowerCase = ()=>{
    // console.log('Uppercase was clicked!');
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to Lowercase!', 'success');
  }

  const handleOnChange = (event)=>{
    // console.log('On Change');
    setText(event.target.value);
  }

  const handleClearCase = () =>{
    let newText = '';
    setText(newText);
    props.showAlert('Cleared Text!', 'success');
  }

  const handleCopyCase = ()=>{
    navigator.clipboard.writeText(text);
    props.showAlert('Copied to clipboard!', 'success');
  }

  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '));
    props.showAlert('Extra Spaces removed!', 'success');
  }

  const [text,setText] = useState('');
  return (
    <>
    <div className={`container text-${props.mode==='light'? 'dark':'light'}`}  >
        <h1 className='my-4'>{props.heading}</h1>
        <div className="mb-3">
            <textarea className={`form-control text-${props.mode==='light'? 'dark':'light'}`} style={{backgroundColor: props.mode==='dark'? '#042743':'white'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpperCase}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowerCase}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearCase}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyCase}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className={`container my-3 text-${props.mode==='light'? 'dark':'light'}`} >
      <h2>Your text Summary</h2>
      <p>{text.split(/\s/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.08 * text.split(' ').filter((element)=>{return element.length!==0}).length}Minutes to read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:'Nothing to preview!'}</p>
    </div>
    </>
  )
}
