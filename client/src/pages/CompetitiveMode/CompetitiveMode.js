import { useState } from "react";
import {useNavigate } from "react-router-dom";
import GameButtons from '../../components/GameButtons/GameButtons';
import GameScreen from '../../components/GameScreen/GameScreen';
import RuleModal from '../../components/RuleModal/RuleModal';
import ScoreTable from "../../components/ScoreTable/ScoreTable";
import AddScore from "../../components/AddScore/AddScore";
//Skorlu oyun modumuz kullanıcı bu modda skorunu kayıt edebiliyor.
function CompetitiveMode() {
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const [currentIndex,setCurrentIndex]=useState(0);
  const [images, setImages] = useState([
  ]);
 
  return (
    <div style={{ color: "white" }}>

      <div class="d-flex justify-content-start ms-1 me-1 mt-2">
        <button type="button" class="btn btn-outline-light mt-3" onClick={() => navigate('/')} style={{ width: 200 }}>Ana Sayfa</button>
        <AddScore/> 
        <RuleModal/>
        <ScoreTable/> 
      </div>

      <div class="d-flex justify-content-between ms-1 me-1 mt-2">
      <GameScreen text={text} currentIndex={currentIndex} images={images} ></GameScreen>
      </div>

      <div className="App-home">
      <GameButtons setCurrentIndex={setCurrentIndex} setImages={setImages} setText={setText} ></GameButtons>
      </div>
    </div>
  );
}

export default CompetitiveMode;
