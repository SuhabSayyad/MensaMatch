const Question6 = () => {
  return (
    <div>
      <div id="greenQ"></div>
      <p>Step 6 of 7</p>
      <h1>What is your diet?</h1>
      <form action="" method="post">
        <div>
          <select required>
            <option value="omnivore" defaultValue>
              Omnivore
            </option>
            <option value="pescetarian">Pescetarian</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="vegan">Vegan</option>
          </select>
        </div>
        <p className="space"></p>
        <p>
          <button type="submit" className="gradientButton">Next!</button>
        </p>
      </form>
    </div>
  );
};

export default Question6;
