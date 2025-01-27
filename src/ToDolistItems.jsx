import React from 'react'

const ToDolistItems = () => {
  return (
    <>
    <div className="App">
        <center><h1>ToDo list</h1></center>
        <form onSubmit={saveTodolist}>
          <input type="text" ref={inputRef} name='todoname' /> <button onClick={handleClear} > Save</button>
        </form>
        {/* ref={inputRef} */}
        {/* onClick={handleClear} */}

        <center><div className="box">
          <div className="list">
            <ul>
            {list}
            </ul>
          </div>
        </div></center>
      </div>
    
    </>
  )
}

export default ToDolistItems