const Question3 = () => {
  return (
    <div>
      <div id="greenQ"></div>
      <p>Step 3 of 7</p>
      <h1>Tell us about your hobbies!</h1>
      <form action="" method="post">
        <p>
          <textarea
            id="hobbies"
            value="hobbies"
            cols="30"
            rows="10"
            maxLength="250"
          ></textarea>
        </p>
        <p className="space"></p>
        <p>
          <button type="submit" className="gradientButton">Next!</button>
        </p>
      </form>
    </div>
  );
};

export default Question3;
