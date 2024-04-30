import upper, { text1, text2, text3 } from "./file1.js";
import My from "./assets/My.jsx";
import obj from "./file2.js";
import MultiWelcome from "./file3.jsx"
import JokeComponent from "./JokeComponent.jsx";

import { males, females } from "./file2.js";

function App() {
  const person = obj;
  const person2 = {
    person,
    friends: ["Peter", "Jan", "Janne", "Sarah"],
    gender: "Male"
  };
  console.log(person2);

  return (
    <>
      <p>{upper("please uppercase me")}</p>
      <p>{text1}</p>
      <My />
      <h2>{person.firstName}</h2>
    
      <p>{males.join(",") + "/" + females.join(",")}</p>
      <p>Email: {person2.person.email}</p>
      <p>First name: {person2.person.firstName}</p>
      <p>Gender: {person2.person.gender}</p>
      <p>Last Name: {person2.person.lastName}</p>
      <p>Friends:</p>
      <ul>
        <h2 ><MultiWelcome ></MultiWelcome></h2>
        <JokeComponent />


        //it is a nested object thats why we cant display the array directly we use map to loop through the array
        {person2.friends.map((friend) => (
          <li >{friend}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
