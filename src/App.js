import React, { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const [selected, setSelected] = useState(0)
 
  const arrayLenght = 6  // arbitrary length
  const points = Array(arrayLenght).fill(0)

  console.log(points)

  const copy = { ...points }

  const handlesetPoints = () => {
    copy[selected] += 1
    console.log(copy[selected])
    
  }

  console.log(copy[selected])

  const setRandom = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length)) 
  }
  //console.log(selected)
  return (
    <div>
      <div>
      {anecdotes[selected]}
      </div>
      <div>
        has {copy[selected]} points
      </div>
      <Button
      handleClick={handlesetPoints}
      text='vote'
      />
      <Button
      handleClick={setRandom}
      text='next anecdote'
      />
    </div>
    
  )
}

export default App