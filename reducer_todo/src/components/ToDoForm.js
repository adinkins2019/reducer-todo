import React, {useState} from 'react'

function ToDoForm(){

    const {listItem, setListItem} = useState();

    handleChange = (event) => {
        setListItem(event.target.value)
    }

    handleSubmit = (event) => {
        event.preventDefault
    }
    return(
        <div>
            <form>
                <input type="checkbox"></input>
                <input type="text" name="list"></input>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    )
}