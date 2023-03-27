import React, { useState, useEffect } from 'react';
import './App.css';



function LogTable() {
  const [logData, setLogData] =  useState((JSON.parse(localStorage.getItem('logData'))) || []);
  const [datetime1, setDatetime1] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [input3, setInput3] = useState('');
  const [textarea, setTextarea] = useState('');
  const [datetime, setDatetime] = useState('');
  const [selectedOption1, setSelectedOption1] = useState('');
  const [input7, setInput7] = useState('');
  const [textarea1, setTextarea1] = useState('');
  const [editing, setEditing] = useState(-1);
  // useEffect(() => {
  //   const storedData = localStorage.getItem('logData');
  //   if (storedData) {
  //     setLogData(JSON.parse(storedData));
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem('logData', JSON.stringify(logData));
  }, [logData]);

  const handleDatetime1Change = (event) => {
    setDatetime1(event.target.value);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleInput3Change = (event) => {
    setInput3(event.target.value);
  };
  const handleTextareaChange = (event) => {
    setTextarea(event.target.value);
  };

  const handleDatetimeChange = (event) => {
    setDatetime(event.target.value);
  };

  const handleSelectChange1 = (event) => {
    setSelectedOption1(event.target.value);
  };

  const handleInput7Change = (event) => {
    setInput7(event.target.value);
  };
  const handleTextarea1Change = (event) => {
    setTextarea1(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const newLogEntry = { datetime1, selectedOption, input3, textarea, datetime, selectedOption1, input7, textarea1 };
  
    if (editing === -1) {
      setLogData([...logData, newLogEntry]);
    } else {
      const newLogData = [...logData];
      newLogData[editing] = newLogEntry;
      setLogData(newLogData);
      setEditing(-1);
    }
  
    setDatetime1('');
    setSelectedOption('');
    setInput3('');
    setTextarea('');
    setDatetime('');
    setSelectedOption1('');
    setInput7('');
    setTextarea1('');
  };

  const handleDeleteAll = () => {
    setLogData([]);
    localStorage.removeItem('logData');
    setEditing(-1);
  };

  const handleEdit = (index) => {
    const entryToEdit = logData[index];
    setDatetime1(entryToEdit.datetime1);
    setSelectedOption(entryToEdit.selectedOption);
    setInput3(entryToEdit.input3);
    setTextarea(entryToEdit.textarea);
    setDatetime(entryToEdit.datetime);
    setSelectedOption1(entryToEdit.selectedOption1);
    setInput7(entryToEdit.input7);
    setTextarea1(entryToEdit.textarea1);
    setEditing(index);
  };


  return (
    <><div><h1 >Migraine List</h1></div>
      <table className="log-table">

      <thead>

        <tr>
          <th><img src='https://png.pngtree.com/png-clipart/20210718/original/pngtree-multi-colour-calendar-2022-png-image_6538236.jpg' alt=''></img>Date / morning</th>
          <th><img src="https://png.pngtree.com/element_our/20200610/ourmid/pngtree-yesno-image_2239467.jpg" alt=""></img>Yes / No</th>
          <th><img src='https://img.freepik.com/free-vector/diagram-showing-pain-scale-level-with-different-colors_1308-70492.jpg?w=900&t=st=1670429540~exp=1670430140~hmac=9dd03cdd93ad28e1bacb98930ca3c1db0841388d9b0b38998457728365c11ac0' alt=''></img>level</th>
          <th><img src='https://img.freepik.com/free-vector/flat-design-spiral-book-mockup_23-2149567582.jpg?w=740&t=st=1670429604~exp=1670430204~hmac=51adac5256b716ee92bd0a7e8bcc31454f45617394e4fc2c8b881f46c76a7460' alt=''></img>Log</th>
          <th><img src='https://img.freepik.com/free-photo/beautiful-sunset-beach-landscape-with-boat_1112-212.jpg?w=1380&t=st=1670429697~exp=1670430297~hmac=cb6dd2bc528ce55455d8f3cb4c3416a279cf97ceafaab5b3242a507e2c3175d6' alt=''></img>Evening</th>
          <th><img src='https://png.pngtree.com/element_our/20200610/ourmid/pngtree-yesno-image_2239467.jpg' alt=''></img>Yes / No</th>
          <th><img src='https://img.freepik.com/free-vector/diagram-showing-pain-scale-level-with-different-colors_1308-70492.jpg?w=900&t=st=1670429540~exp=1670430140~hmac=9dd03cdd93ad28e1bacb98930ca3c1db0841388d9b0b38998457728365c11ac0' alt=''></img>level</th>
          <th><img src='https://img.freepik.com/free-vector/flat-design-spiral-book-mockup_23-2149567582.jpg?w=740&t=st=1670429604~exp=1670430204~hmac=51adac5256b716ee92bd0a7e8bcc31454f45617394e4fc2c8b881f46c76a7460' alt=''></img>Log</th>
        </tr>
      </thead>
      <tbody>
      {logData.map((logEntry, index) => (
      <tr key={index}>
        <td>{logEntry.datetime1}</td>
        <td>{logEntry.selectedOption}</td>
        <td>{logEntry.input3}</td>
        <td>{logEntry.textarea}</td>
        <td>{logEntry.datetime}</td>
        <td>{logEntry.selectedOption1}</td>
        <td>{logEntry.input7}</td>
        <td>{logEntry.textarea1}</td>
        <td>
          <button style={{ background: "lightyellow" }} onClick={() => handleEdit(index)}>Edit</button>
        </td>
      </tr>
      ))}

      </tbody>
      <tfoot>
        <tr>
          <td>
            <input
              type="datetime-local"
              value={datetime1}
              onChange={handleDatetime1Change} />
          </td>
          <td>
            <select value={selectedOption} onChange={handleSelectChange}>
              <option value="">Yes / No</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>

            </select>
          </td>
          <td>
            <input
              type="number"
              value={input3}
              onChange={handleInput3Change}
              placeholder="Level:" 
              min={'0'}
              max={'10'} 
              step={'0.5'}
              />
          </td>
          <td><textarea
            onChange={handleTextareaChange}
            value={textarea}
            name=""
            id=""
            cols="30"
            rows="1"
            placeholder="Log:" />
          </td>
          <td>
            <input
              type="datetime-local"
              value={datetime}
              onChange={handleDatetimeChange} />
          </td>
          <td>
            <select value={selectedOption1} onChange={handleSelectChange1}>
              <option value="">Yes / No</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>

            </select>
          </td>
          <td>
            <input
              type="number"
              value={input7}
              onChange={handleInput7Change}
              placeholder="Level:" 
              min={'0'}
              max={'10'}
              step={'0.5'}
              />
          </td>
          <td><textarea
            onChange={handleTextarea1Change}
            value={textarea1}
            name=""
            id=""
            cols="30"
            rows="1"
            placeholder="Log:" />
          </td>
          <td>
            <button style={{ background: "lightgreen" }} onClick={handleSubmit}>Add</button>
          </td>
          
          {/* <td>
            <button onClick={() => handleEdit()}>Edit</button>
          </td> */}
          <td className="delete-all">
            <button style={{ background: "red" }} onClick={() => {
              const newTitle = window.confirm("Are you sure you want to delete this item?", handleDeleteAll);
              if (newTitle !== null) {
                handleDeleteAll();
              }
            } }>Delete All</button>
          </td>
        </tr>
      </tfoot>
    </table></>
  );
  
}

export default LogTable;
