function StartScreen({ numQuestions }) {
  return (
    <div clasName="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numQuestions} questions to test yout react mastery</h3>
      <button className="btn btn-ui">Let's Start</button>
    </div>
  )
}

export default StartScreen
