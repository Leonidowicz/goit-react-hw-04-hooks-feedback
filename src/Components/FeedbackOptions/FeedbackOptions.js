export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className="buttons">
      {options.map((elem) => (
        <button onClick={(e) => onLeaveFeedback(e)} name={elem} type="button">
          {elem}
        </button>
      ))}
    </div>
  );
};
