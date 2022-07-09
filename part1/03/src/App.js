import { useState } from 'react'

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
    ]

    const [index, setSelected] = useState(0)
    const [like, LikeSet] = useState([0,0,0,0,0,0,0])

    const getRand = () => {
        setSelected(Math.floor(Math.random() * anecdotes.length))
    }

    const LikeChange = () => {
        let changed = [...like]
        changed[index]++
        LikeSet(changed)
    }

    return (
        <div>
            <p>{anecdotes[index]}</p>
            <button onClick={getRand}>Next</button> &nbsp;
            <button onClick={LikeChange}>Like</button><br />
            <p>Likes: {like[index]}</p>
        </div>
    )
}

export default App