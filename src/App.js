function App() {
  const title = "hello from App.js";
  const body = "this is another variable";
  const comments = [
    { id: 1, text: "Comment one" },
    { id: 2, text: "comment two" },
    { id: 3, text: "comment three" },
  ];
  const showComments = true;

  const commentBlock = (
    <div className="comments">
      <h3>Comments ({comments.length})</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="Container">
      <h1>{title}</h1>
      <p>{body}</p>

      {showComments && commentBlock}
    </div>
  );
}

export default App;
