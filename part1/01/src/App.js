const App = () => {
  const Header = (props) => {
    return (
      <h1>{props.course}</h1>
    )
  }

  return (
    <div>
      <Header course="Half Stack application development" />
    </div>
  )
}

export default App