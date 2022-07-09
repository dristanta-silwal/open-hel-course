import { useState } from 'react'

// a proper place to define a component
const Statistics = (props) => {
    if (props.all !== 0) {
        return (
            <div>
                <h1>Statistics</h1>
                <p>Good: {props.good}</p>
                <p>Neutral: {props.neutral}</p>
                <p>Bad: {props.bad}</p>
                <p>All: {props.all}</p>
                <p>Average: {((props.good * 1 - props.bad * 1) / props.all).toFixed(5)}</p>
                <p>Positive: {(props.good / props.all * 100).toFixed(5)}%</p>
            </div>
        )
    } else {
        return (
            <div>
                <h1>Statistics</h1>
                <h2>No feedback yet!</h2>
            </div>
        )
    }
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const all = good + neutral + bad

    // do not define a component within another component
    // const Statistics = (props) => {
    //     // ...
    // }

    return (
        <div>
            <h1>Give Feedback</h1>
            <button onClick={() => setGood(good + 1)}>Good</button>
            <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
            <button onClick={() => setBad(bad + 1)}>Bad</button>
            <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                all={all}
            />
        </div>
    )
}

export default App