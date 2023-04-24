import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = (e) => {
        // console.log("UpperCase clicked!" + text);
        let newText = text.toUpperCase();
        setText(newText);
        e.preventDefault();
    }

    const handleDownClick = (e) => {
        let newText = text.toLowerCase();
        setText(newText);
        e.preventDefault();
    }
    const handleBoldClick= (e) => {
        let newText = text.toLowerCase();
        setText(newText);
        e.preventDefault();
    }
    const handleItalicClick = (e) => {
        let newText = text.toLowerCase();
        setText(newText);
        e.preventDefault();
    }
    const handleUnderClick = (e) => {
        let newText = text.toLowerCase();
        setText(newText);
        e.preventDefault();
    }
    const handleClearClick = (e) => {
        let newText = "";
        setText(newText);
        e.preventDefault();
    }

    const handleOnChange = (event) => {
        // console.log("Onchange clicked!");
        setText(event.target.value);
    }

    const [text, setText] = useState("");
    return (
        <>
            <div className='container'>
                <form>
                    <h1>{props.heading}</h1>
                    <div className="form-group">
                        <textarea onChange={handleOnChange} className="form-control" value={text} id="my-Box" rows="5"></textarea>
                    </div>
                    <button onClick={handleUpClick} className='btn btn-secondary mx-2'>A</button>
                    <button onClick={handleDownClick} className='btn btn-secondary mx-2'>a</button>
                    <button onClick={handleBoldClick} className='btn btn-secondary mx-2'><b>B</b></button>
                    <button onClick={handleItalicClick} className='btn btn-secondary mx-2'>I<i/></button>
                    <button onClick={handleUnderClick} className='btn btn-secondary mx-2'>U<u/></button>
                    <button onClick={handleClearClick} className='btn btn-secondary mx-2'>Clear<u/></button>
                </form>
            </div>

            <div className="container my-3">
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").filter((e)=>{return e.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008*text.split(" ").filter((e)=>{return e.length!==0}).length} Minute read...</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:'Nothing to show!'}</p>
            </div>
        </>
    )
}
