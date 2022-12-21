import useSound from 'use-sound';
import boopSfx from '../../assets/images/de.wav';
import { useGame } from "../../context/gameContext";
import {useNavigate } from "react-router-dom";
function AddScore() { 
  const [play] = useSound(boopSfx);
  const {AddScore } = useGame();
  const navigate = useNavigate();
  const handleClick = () => {
    AddScore()
    play()
    navigate("/")
  };
  return (
    <button type="button" class="btn btn-outline-light mt-3 ms-4" onClick={() => handleClick()} style={{ width: 200 }}>Skoru Kaydet</button>
        
  );
}

export default AddScore;
