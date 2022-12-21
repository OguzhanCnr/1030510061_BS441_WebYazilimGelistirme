import logo from '../../assets/images/logo.png';
import {useNavigate } from "react-router-dom";
import Footer from '../../components/Footer/Footer';
import {useState} from 'react';
import AnimationText from '../../components/MovingText/AnimationText';

function Home() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('Player');
 
 
  const handleChange = event => {
    setUsername(event.target.value);
  };

  const handleClick = (address,gameMode) => {
    localStorage.setItem("username", username);
    localStorage.setItem("gameMode", gameMode);
    navigate("/"+address)
    navigate(0)
  };
  return (
 
        <div className='App-home2'>
      
       
       <AnimationText/>
      
        <img src={logo} className="App-logo mt-auto" alt="logo" />
        <p className='mt-auto'>
          Oyunumuza Hoş Geldiniz Lütfen Kullanıcı Adını Giriniz:
        </p>
        <div className='container col-md-3 col-6 mt-2'>
          <div class="input-group mb-3">
            <input id='username' name='username' onChange={handleChange} type="text" class="form-control" required aria-label="Username" aria-describedby="basic-addon1" />
          </div>
        </div>
       <button type="button" onClick={()=>handleClick("game","1")} class="btn btn-outline-light mt-3" style={{width:150}}>Normal Oyun</button>
       <button type="button" onClick={()=>handleClick("competitive","2")} class="btn btn-outline-light mt-3" style={{width:150}}>Rekabet Modu</button>
          
        <Footer/>
        </div>
  );
}

export default Home;
