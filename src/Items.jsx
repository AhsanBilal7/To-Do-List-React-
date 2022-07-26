import React from 'react'

export default function Items(props) {
  return (
    <div>
    <li className="listitem">
                  <button onClick={
                    ()=>{props.onselect(props.id)}
                    } className="cancle">Cancel</button>
                  <p>{props.text}</p>
                </li>
    </div>
  )
}
