import { useState } from "react";
import rock from '../../assets/images/rock.png';
import paper from '../../assets/images/paper.png';
import scissors from '../../assets/images/scissors.png';
import { useGame } from "../../context/gameContext";

function Game() {
  const [text, setText] = useState("");
  const username =localStorage.getItem("username");
  const { Game, userCounter,computerCounter } = useGame();
  return (
    <header className="App-header">
     
  <h1 className="mt-2">
        {text} {username}
      </h1>
      <h1 className="mt-2">
        Lütfen Seçiminizi Yapınız
      </h1>

    
      <div className="row">

        <div className="col-md-4"><img src={scissors} onClick={() => Game("3", setText)} className=" mt-auto" style={{ width: 100, height: 80 }} alt="logo" />
        </div>
        <div className="col-md-4"><img src={paper} onClick={() => Game("2", setText)} className=" mt-auto" style={{ width: 100, height: 80 }} alt="logo" />
        </div>
        <div className="col-md-4"><img src={rock} onClick={() => Game("1", setText)} className=" mt-auto" style={{ width: 100, height: 80 }} alt="logo" />
        </div>


      </div>
      {userCounter}
      {computerCounter}


    </header>
  );
}

export default Game;
