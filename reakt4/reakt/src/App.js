import Home from "./Home";
import './input.css';
import {BrowserRouter, Routes, Route,} from 'react-router-dom'

import Registrishion from "./Registrishion";
import Profile from "./Profile";
import Login from "./Login";
import First_Edition from "./History/First_Edition";
import Creators from "./History/Creators";
import Second_Edition from "./History/Second_Edition";
import Rules_Game from "./Game/Rules_Game";
import Application from "./Game/Application";
import Detectives from "./Game/Detectives";
import Scenarios from "./Game/Scenarios";
import Items from "./Game/Items";
import Damage_And_Condition from "./Game/Damage_And_Condition";
import Bestiary from "./Game/Bestiary";
import Puzzles from "./Game/Puzzles";
import Addition_Game from "./The_Sanctuary_of_Twilight/Addition_Game";
import Addition_Detectives from "./The_Sanctuary_of_Twilight/Addition_Detectives";
import Addition_Scenarios from "./The_Sanctuary_of_Twilight/Addition_Scenarios";
import Addition_Items from "./The_Sanctuary_of_Twilight/Addition_Items";
import Addition_Damage_And_Condition from "./The_Sanctuary_of_Twilight/Addition_Damage_And_Condition";
import Addition_Bestiary from "./The_Sanctuary_of_Twilight/Addition_Bestiary";
import Addition_Game1 from "./Beyond_the_threshold/Addition_Game1";
import Addition_Detectives1 from "./Beyond_the_threshold/Addition_Detectives1";
import Addition_Scenarios1 from "./Beyond_the_threshold/Addition_Scenarios1";
import Addition_Items1 from "./Beyond_the_threshold/Addition_Items1";
import Addition_Damage_And_Condition1 from "./Beyond_the_threshold/Addition_Damage_And_Condition1";
import Addition_Bestiary1 from "./Beyond_the_threshold/Addition_Bestiary1";
import Addition_Game2 from "./Sinister_journeys/Addition_Game2";
import Addition_Detectives2 from "./Sinister_journeys/Addition_Detectives2";
import Addition_Scenarios2 from "./Sinister_journeys/Addition_Scenarios2";
import Addition_Items2 from "./Sinister_journeys/Addition_Items2";
import Addition_Damage_And_Condition2 from "./Sinister_journeys/Addition_Damage_And_Condition2";
import Addition_Bestiary2 from "./Sinister_journeys/Addition_Bestiary2";
import Addition_Game3 from "./Streets_of_Arkham/Addition_Game3";
import Addition_Detectives3 from "./Streets_of_Arkham/Addition_Detectives3";
import Addition_Scenarios3 from "./Streets_of_Arkham/Addition_Scenarios3";
import Addition_Items3 from "./Streets_of_Arkham/Addition_Items3";
import Addition_Damage_And_Condition3 from "./Streets_of_Arkham/Addition_Damage_And_Condition3";
import Addition_Bestiary3 from "./Streets_of_Arkham/Addition_Bestiary3";
import Addition_Game4 from "./The_Path_of_the_snake/Addition_Game4";
import Addition_Detectives4 from "./The_Path_of_the_snake/Addition_Detectives4";
import Addition_Scenarios4 from "./The_Path_of_the_snake/Addition_Scenarios4";
import Addition_Items4 from "./The_Path_of_the_snake/Addition_Items4";
import Addition_Damage_And_Condition4 from "./The_Path_of_the_snake/Addition_Damage_And_Condition4";
import Addition_Bestiary4 from "./The_Path_of_the_snake/Addition_Bestiary4";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Registrishion></Registrishion>}></Route>
          <Route path="/profile" element={<Profile></Profile>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/creators" element={<Creators></Creators>}></Route>
          <Route path="/first-edition" element={<First_Edition></First_Edition>}></Route>
          <Route path="/second-edition" element={<Second_Edition></Second_Edition>}></Route>
          <Route path="/rules-game" element={<Rules_Game></Rules_Game>}></Route>
          <Route path="/application" element={<Application></Application>}></Route>
          <Route path="/detectives" element={<Detectives></Detectives>}></Route>
          <Route path="/scenarios" element={<Scenarios></Scenarios>}></Route>
          <Route path="/items" element={<Items></Items>}></Route>
          <Route path="/damage-and-condition" element={<Damage_And_Condition></Damage_And_Condition>}></Route>
          <Route path="/bestiary" element={<Bestiary></Bestiary>}></Route>
          <Route path="/puzzles" element={<Puzzles></Puzzles>}></Route>
          <Route path="/addition-game" element={<Addition_Game></Addition_Game>}></Route>
          <Route path="/addition-detectives" element={<Addition_Detectives></Addition_Detectives>}></Route>
          <Route path="/addition-scenarios" element={<Addition_Scenarios></Addition_Scenarios>}></Route>
          <Route path="/addition-items" element={<Addition_Items></Addition_Items>}></Route>
          <Route path="/addition-damage-and-condition" element={<Addition_Damage_And_Condition></Addition_Damage_And_Condition>}></Route>
          <Route path="/addition-bestiary" element={<Addition_Bestiary></Addition_Bestiary>}></Route>
          <Route path="/addition-game1" element={<Addition_Game1></Addition_Game1>}></Route>
          <Route path="/addition-detectives1" element={<Addition_Detectives1></Addition_Detectives1>}></Route>
          <Route path="/addition-scenarios1" element={<Addition_Scenarios1></Addition_Scenarios1>}></Route>
          <Route path="/addition-items1" element={<Addition_Items1></Addition_Items1>}></Route>
          <Route path="/addition-damage-and-condition1" element={<Addition_Damage_And_Condition1></Addition_Damage_And_Condition1>}></Route>
          <Route path="/addition-bestiary1" element={<Addition_Bestiary1></Addition_Bestiary1>}></Route>
          <Route path="/addition-game2" element={<Addition_Game2></Addition_Game2>}></Route>
          <Route path="/addition-detectives2" element={<Addition_Detectives2></Addition_Detectives2>}></Route>
          <Route path="/addition-scenarios2" element={<Addition_Scenarios2></Addition_Scenarios2>}></Route>
          <Route path="/addition-items2" element={<Addition_Items2></Addition_Items2>}></Route>
          <Route path="/addition-damage-and-condition2" element={<Addition_Damage_And_Condition2></Addition_Damage_And_Condition2>}></Route>
          <Route path="/addition-bestiary2" element={<Addition_Bestiary2></Addition_Bestiary2>}></Route>
          <Route path="/addition-game3" element={<Addition_Game3></Addition_Game3>}></Route>
          <Route path="/addition-detectives3" element={<Addition_Detectives3></Addition_Detectives3>}></Route>
          <Route path="/addition-scenarios3" element={<Addition_Scenarios3></Addition_Scenarios3>}></Route>
          <Route path="/addition-items3" element={<Addition_Items3></Addition_Items3>}></Route>
          <Route path="/addition-damage-and-condition3" element={<Addition_Damage_And_Condition3></Addition_Damage_And_Condition3>}></Route>
          <Route path="/addition-bestiary3" element={<Addition_Bestiary3></Addition_Bestiary3>}></Route>
          <Route path="/addition-game4" element={<Addition_Game4></Addition_Game4>}></Route>
          <Route path="/addition-detectives4" element={<Addition_Detectives4></Addition_Detectives4>}></Route>
          <Route path="/addition-scenarios4" element={<Addition_Scenarios4></Addition_Scenarios4>}></Route>
          <Route path="/addition-items4" element={<Addition_Items4></Addition_Items4>}></Route>
          <Route path="/addition-damage-and-condition4" element={<Addition_Damage_And_Condition4></Addition_Damage_And_Condition4>}></Route>
          <Route path="/addition-bestiary4" element={<Addition_Bestiary4></Addition_Bestiary4>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
// <Route path="/creators-game" element={<CreatorsGame></CreatorsGame>}></Route> 