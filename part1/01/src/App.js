const App = () => {
  // Header
  const Header = (props) => {
    return (
      <h1>{props.course}</h1>
    )
  }

  // Part
  const Part = (props) => {
    return (
      <p>{props.name} {props.ex}</p>
    )
  }

  // Content
  const Content = () => {
    return (
      <div>
        <Part name="Fundamentals of React" ex="10" />
        <Part name="Using props to pass data'" ex="7" />
        <Part name="State of a component" ex="14" />
      </div>
    )
  }

  // Total
  const Total = () => {
    return (
      <p>Number of exercises {10 + 7 + 14}</p>
    )
  }

  return (
    <div>
      <Header course="Half Stack application development" />
      <Content />
      <Total />
    </div>
  )
}

export default App