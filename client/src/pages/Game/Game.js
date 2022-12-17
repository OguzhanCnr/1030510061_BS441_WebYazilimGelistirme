import { useState } from "react";
import rock from '../../assets/images/rock.png';
import paper from '../../assets/images/paper.png';
import scissors from '../../assets/images/scissors.png';
import { useGame } from "../../context/gameContext";
import {useNavigate } from "react-router-dom";
import RuleModal from '../../components/RuleModal/RuleModal';

function Game() {
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const username = localStorage.getItem("username");
  const { Game, userCounter, computerCounter,userImg,computerImg } = useGame();
  return (


    <div style={{ color: "white" }}>

      <div class="d-flex justify-content-start ms-1 me-1 mt-2">
        <button type="button" class="btn btn-outline-light mt-3" onClick={() => navigate('/')} style={{ width: 200 }}>Ana Sayfa</button>
        <button type="button" class="btn btn-outline-light mt-3 ms-4" style={{ width: 200 }}>Skoru Kaydet</button>
        <button type="button" class="ms-auto btn btn-outline-light mt-3" style={{ width: 200 }}>Skor Tablosu</button>
        <RuleModal/>
      </div>





      <div class="d-flex justify-content-between ms-1 me-1 mt-2">
        <h3 className="mt-2">
          <div class="d-flex flex-column h-100">
            <div class="p-2">{username? username :"User"}</div>
            <div class="p-2 text-center">{userCounter}</div>
            {userImg &&  <img src={userImg} onClick={() => Game("3", setText)} className=" mt-auto" style={{ width: 100, height: 80 }} alt="logo" /> }
          </div>

        </h3>
        <h3 className="mt-2">
          {text}
        </h3>
        <h3 className="mt-2">
          <div class="d-flex flex-column h-100">
            <div class="p-2">Computer</div>
            <div class="p-2 text-center">{computerCounter}</div>
            {computerImg &&  <img src={computerImg} onClick={() => Game("3", setText)} className=" mt-auto" style={{ width: 100, height: 80 }} alt="logo" /> }
          </div>
        </h3>
      </div>


      <div className="App-home">
        <h3 className="mt-2">
          Lütfen Seçim Yapınız
        </h3>
        <div className=" d-flex mt-5">

          <div className="col-md-4 "><img src={scissors} onClick={() => Game("3", setText)} className=" mt-auto" style={{ width: 100, height: 80 }} alt="logo" />
          </div>
          <div className="col-md-4"><img src={paper} onClick={() => Game("2", setText)} className=" mt-auto" style={{ width: 100, height: 80 }} alt="logo" />
          </div>
          <div className="col-md-4"><img src={rock} onClick={() => Game("1", setText)} className=" mt-auto" style={{ width: 100, height: 80 }} alt="logo" />
          </div>


        </div>


      </div>
    </div>



  );
}

export default Game;
