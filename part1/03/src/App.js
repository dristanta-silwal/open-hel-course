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
    const [like, LikeSet] = useState({
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0
    })

    const getRand = () => {
        setSelected(Math.floor(Math.random() * anecdotes.length))
    }

    const LikeChange = () => {
        LikeSet({ ...like, [index]: like[index] + 1 })
    }

    const maxLike = () => {
        let max = -1, maxInd = -1

        for (let key in like) {
            if (like[key] > max) {
                maxInd = key
                max = like[key]
            }
        }
        return maxInd
    }

    return (
        <div>
            <h1>{anecdotes[index]}</h1>
            <button onClick={getRand}>Next</button> &nbsp;
            <button onClick={LikeChange}>Like</button><br />
            <h2>Likes: {like[index]}</h2><br />
            <h1>Most Liked Anecdote</h1>
            <h2>{anecdotes[maxLike()]}</h2>
        </div>
    )
}

export default App