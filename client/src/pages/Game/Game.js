import { useState } from "react";
import {useNavigate } from "react-router-dom";
import RuleModal from '../../components/RuleModal/RuleModal';
import GameButtons from '../../components/GameButtons/GameButtons';
import GameScreen from "../../components/GameScreen/GameScreen";
//import { useGame } from "../../context/gameContext";


//3 de biten oyun modumuz
function Game() {
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const [currentIndex,setCurrentIndex]=useState(0);
  const [images, setImages] = useState([
  ]);
  //const { userCounter, computerCounter } = useGame();
 
  return (
    <div>
      <div class="d-flex justify-content-start ms-1 me-1 mt-2">
        <button type="button" class="btn btn-outline-light mt-3" onClick={() => navigate('/')} style={{ width: 200 }}>Ana Sayfa</button>
        <RuleModal/>
      </div>
      <div class="d-flex justify-content-between ms-1 me-1 mt-2">
      <GameScreen text={text} currentIndex={currentIndex} images={images} ></GameScreen>
      </div>
      <div className="GameButton">
        <GameButtons setCurrentIndex={setCurrentIndex} setImages={setImages} setText={setText} ></GameButtons>
      </div>
  
    </div>
  );
}

export default Game;
