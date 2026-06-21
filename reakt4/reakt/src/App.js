import Home from "./Home";
import './input.css';
import {BrowserRouter, Routes, Route,} from 'react-router-dom'

import Registrishion from "./Registrishion";
import Profile from "./Profile";
import Login from "./Login";
import FirstEdition from "./History/First_Edition";
import Creators from "./History/Creators";
import SecondEdition from "./History/Second_Edition";
import RulesGame from "./Game/Rules_Game";
import Application from "./Game/Application";
import Detectives from "./Game/Detectives";
import Scenarios from "./Game/Scenarios";
import Items from "./Game/Items";
import DamageAndCondition from "./Game/Damage_And_Condition";
import Bestiary from "./Game/Bestiary";
import Puzzles from "./Game/Puzzles";
import AdditionGame from "./The_Sanctuary_of_Twilight/Addition_Game";
import AdditionDetectives from "./The_Sanctuary_of_Twilight/Addition_Detectives";
import AdditionScenarios from "./The_Sanctuary_of_Twilight/Addition_Scenarios";
import AdditionItems from "./The_Sanctuary_of_Twilight/Addition_Items";
import AdditionDamageAndCondition from "./The_Sanctuary_of_Twilight/Addition_Damage_And_Condition";
import AdditionBestiary from "./The_Sanctuary_of_Twilight/Addition_Bestiary";
import AdditionGame1 from "./Beyond_the_threshold/Addition_Game1";
import AdditionDetectives1 from "./Beyond_the_threshold/Addition_Detectives1";
import AdditionScenarios1 from "./Beyond_the_threshold/Addition_Scenarios1";
import AdditionItems1 from "./Beyond_the_threshold/Addition_Items1";
import AdditionDamageAndCondition1 from "./Beyond_the_threshold/Addition_Damage_And_Condition1";
import AdditionBestiary1 from "./Beyond_the_threshold/Addition_Bestiary1";
import AdditionGame2 from "./Sinister_journeys/Addition_Game2";
import AdditionDetectives2 from "./Sinister_journeys/Addition_Detectives2";
import AdditionScenarios2 from "./Sinister_journeys/Addition_Scenarios2";
import AdditionItems2 from "./Sinister_journeys/Addition_Items2";
import AdditionDamageAndCondition2 from "./Sinister_journeys/Addition_Damage_And_Condition2";
import AdditionBestiary2 from "./Sinister_journeys/Addition_Bestiary2";
import AdditionGame3 from "./Streets_of_Arkham/Addition_Game3";
import AdditionDetectives3 from "./Streets_of_Arkham/Addition_Detectives3";
import AdditionScenarios3 from "./Streets_of_Arkham/Addition_Scenarios3";
import AdditionItems3 from "./Streets_of_Arkham/Addition_Items3";
import AdditionDamageAndCondition3 from "./Streets_of_Arkham/Addition_Damage_And_Condition3";
import AdditionBestiary3 from "./Streets_of_Arkham/Addition_Bestiary3";
import AdditionGame4 from "./The_Path_of_the_snake/Addition_Game4";
import AdditionDetectives4 from "./The_Path_of_the_snake/Addition_Detectives4";
import AdditionScenarios4 from "./The_Path_of_the_snake/Addition_Scenarios4";
import AdditionItems4 from "./The_Path_of_the_snake/Addition_Items4";
import AdditionDamageAndCondition4 from "./The_Path_of_the_snake/Addition_Damage_And_Condition4";
import AdditionBestiary4 from "./The_Path_of_the_snake/Addition_Bestiary4";
import Feedback from "./Feedback";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/feedback" element={<Feedback></Feedback>}></Route>
          <Route path="/register" element={<Registrishion></Registrishion>}></Route>
          <Route path="/profile" element={<Profile></Profile>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/creators" element={<Creators></Creators>}></Route>
          <Route path="/first-edition" element={<FirstEdition></FirstEdition>}></Route>
          <Route path="/second-edition" element={<SecondEdition></SecondEdition>}></Route>
          <Route path="/rules-game" element={<RulesGame></RulesGame>}></Route>
          <Route path="/application" element={<Application></Application>}></Route>
          <Route path="/detectives" element={<Detectives></Detectives>}></Route>
          <Route path="/scenarios" element={<Scenarios></Scenarios>}></Route>
          <Route path="/items" element={<Items></Items>}></Route>
          <Route path="/damage-and-condition" element={<DamageAndCondition></DamageAndCondition>}></Route>
          <Route path="/bestiary" element={<Bestiary></Bestiary>}></Route>
          <Route path="/puzzles" element={<Puzzles></Puzzles>}></Route>
          <Route path="/addition-game" element={<AdditionGame></AdditionGame>}></Route>
          <Route path="/addition-detectives" element={<AdditionDetectives></AdditionDetectives>}></Route>
          <Route path="/addition-scenarios" element={<AdditionScenarios></AdditionScenarios>}></Route>
          <Route path="/addition-items" element={<AdditionItems></AdditionItems>}></Route>
          <Route path="/addition-damage-and-condition" element={<AdditionDamageAndCondition></AdditionDamageAndCondition>}></Route>
          <Route path="/addition-bestiary" element={<AdditionBestiary></AdditionBestiary>}></Route>
          <Route path="/addition-game1" element={<AdditionGame1></AdditionGame1>}></Route>
          <Route path="/addition-detectives1" element={<AdditionDetectives1></AdditionDetectives1>}></Route>
          <Route path="/addition-scenarios1" element={<AdditionScenarios1></AdditionScenarios1>}></Route>
          <Route path="/addition-items1" element={<AdditionItems1></AdditionItems1>}></Route>
          <Route path="/addition-damage-and-condition1" element={<AdditionDamageAndCondition1></AdditionDamageAndCondition1>}></Route>
          <Route path="/addition-bestiary1" element={<AdditionBestiary1></AdditionBestiary1>}></Route>
          <Route path="/addition-game2" element={<AdditionGame2></AdditionGame2>}></Route>
          <Route path="/addition-detectives2" element={<AdditionDetectives2></AdditionDetectives2>}></Route>
          <Route path="/addition-scenarios2" element={<AdditionScenarios2></AdditionScenarios2>}></Route>
          <Route path="/addition-items2" element={<AdditionItems2></AdditionItems2>}></Route>
          <Route path="/addition-damage-and-condition2" element={<AdditionDamageAndCondition2></AdditionDamageAndCondition2>}></Route>
          <Route path="/addition-bestiary2" element={<AdditionBestiary2></AdditionBestiary2>}></Route>
          <Route path="/addition-game3" element={<AdditionGame3></AdditionGame3>}></Route>
          <Route path="/addition-detectives3" element={<AdditionDetectives3></AdditionDetectives3>}></Route>
          <Route path="/addition-scenarios3" element={<AdditionScenarios3></AdditionScenarios3>}></Route>
          <Route path="/addition-items3" element={<AdditionItems3></AdditionItems3>}></Route>
          <Route path="/addition-damage-and-condition3" element={<AdditionDamageAndCondition3></AdditionDamageAndCondition3>}></Route>
          <Route path="/addition-bestiary3" element={<AdditionBestiary3></AdditionBestiary3>}></Route>
          <Route path="/addition-game4" element={<AdditionGame4></AdditionGame4>}></Route>
          <Route path="/addition-detectives4" element={<AdditionDetectives4></AdditionDetectives4>}></Route>
          <Route path="/addition-scenarios4" element={<AdditionScenarios4></AdditionScenarios4>}></Route>
          <Route path="/addition-items4" element={<AdditionItems4></AdditionItems4>}></Route>
          <Route path="/addition-damage-and-condition4" element={<AdditionDamageAndCondition4></AdditionDamageAndCondition4>}></Route>
          <Route path="/addition-bestiary4" element={<AdditionBestiary4></AdditionBestiary4>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
// <Route path="/creators-game" element={<CreatorsGame></CreatorsGame>}></Route> 