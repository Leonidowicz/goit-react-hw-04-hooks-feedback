export const Statistics = ({ good, neutral, bad, total, percent }) => {
  return (
    <div>
      <h2>Statistics:</h2>
      <p>
        {['good']}:&ensp;{good}
      </p>
      <p>
        {['neutral']}:&ensp;{neutral}
      </p>
      <p>
        {['bad']}:&ensp;{bad}
      </p>
      <p>Total Feedback:&ensp;{total}</p>
      <p>
        Positive Feedback:&ensp;
        {total > 0 ? percent : 0}%
      </p>
    </div>
  );
};
