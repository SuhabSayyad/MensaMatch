const Question4 = () => {
  return (
    <div>
      <div id="greenQ"></div>
      <p>Step 4 of 7</p>
      <h1>How old are you?</h1>
      <form action="" method="post">
        <p>
          <input
            type="number"
            className="input"
            name="name"
            pattern="[0,9]{2,3}"
            placeholder="age"
            size="15"
            required
          ></input>
        </p>
        <p className="space"></p>
        <p>
          <button className="gradientButton">Next!</button>
        </p>
      </form>
    </div>
  );
};

export default Question4;
