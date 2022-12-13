import logo from '../../assets/images/logo.png';
import {useNavigate } from "react-router-dom";
import RuleModal from '../../components/RuleModal/RuleModal';
import Footer from '../../components/Footer/Footer';
import {useState} from 'react';
import MovingText from 'react-moving-text'

function Home() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

  const handleChange = event => {
    setUsername(event.target.value);
  };

  const handleClick = (address) => {
    localStorage.setItem("username", username);
    navigate("/"+address)
  };
  return (
 
        <div className='App-home2'>
        
      
          <MovingText
          type="slideInFromTop"
        duration="1000ms"
        delay="200ms"
        direction="normal"
        timing="ease"
        iteration="3"
        fillMode="none">
       <h1 className="mt-2">
          TAŞ KAĞIT MAKAS
        </h1>
     </MovingText>
        
      
        <img src={logo} className="App-logo mt-auto" alt="logo" />
        <p className='mt-auto'>
          Oyunumuza Hoş Geldiniz Lütfen Kullanıcı Adını Giriniz:
        </p>
        <div className='container col-md-3 col-6'>
          <div class="input-group mb-3">
            <input id='username' name='username' onChange={handleChange} type="text" class="form-control" required aria-label="Username" aria-describedby="basic-addon1" />
          </div>
        </div>
        <button type="button" onClick={()=>handleClick("game")} class="btn btn-outline-light mt-3" style={{width:150}}>Normal Oyun</button>
        <button type="button" onClick={()=>handleClick("scoregame")} class="btn btn-outline-light mt-3" style={{width:150}}>Skor Oyun</button>
       
        <Footer/>
        </div>
  );
}

export default Home;
