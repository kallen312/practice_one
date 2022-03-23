import "./styles.css";
// 1. Read the json file using import
import data from "./data.json";
export default function App() {
  return (
    <div className="App">
      <div> ------------- part 1--------------- </div>
      <p> 1. What is the first person's name? </p>
      {data[0].person.name}

      <p> 2. What is the first person's favorite food? </p>
      {data[0].person.foods[data[0].person.favorite_food_index]}

      <p> 3. What is first person's best friend's name and favorite colors? </p>
      {/* fill in code here */}
      <p>
        {" "}
        Name: {data[0].person.best_friend.name}
        <p>
          {" "}
          Favorite Colors:
          {data[0].person.best_friend.favorite_colors.map((color) => (
            <p>{color}</p>
          ))}
        </p>{" "}
      </p>
      <div> ------------- part 2--------------- </div>
      <p> Display both people information using .map()</p>
      {/* use .map() to refactor for both people */}
      {/* Refactor using .map */}
    </div>
  );
}
