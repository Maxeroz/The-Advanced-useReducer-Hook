function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <form className="form-difficulty">
        <label>Choose difficulty:</label>
        <select
          if="difficulty-select"
          onChange={(e) =>
            dispatch({ type: "difficulty", payload: e.target.value })
          }
        >
          <option value={null}>--Choose difficulty--</option>
          <option value="10">Easy</option>
          <option value="20">Normal</option>
          <option value="30">Hard</option>
        </select>
      </form>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;
