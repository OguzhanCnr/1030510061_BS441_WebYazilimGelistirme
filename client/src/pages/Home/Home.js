import logo from '../../assets/images/logo.png';
import {useNavigate } from "react-router-dom";
import Footer from '../../components/Footer/Footer';
import {useState} from 'react';
import MovingText from 'react-moving-text'
import useSound from 'use-sound';
import boopSfx from '../../assets/images/de.wav';
import rock from '../../assets/images/rock.png';
import paper from '../../assets/images/paper.png';
import scissors from '../../assets/images/scissors.png';

function Home() {
  const navigate = useNavigate();
  const [currentIndex,setCurrentIndex]=useState(0);
  const [username, setUsername] = useState('');
  const [play] = useSound(boopSfx);

  const [images, setImages] = useState([
  ]);
 

  const handleClick2 = () => {
    let i=0;
    setImages([rock,paper,scissors]);
    let timerId = setTimeout(function tick() {
      i+=1;
      setCurrentIndex(i);
     
      if(i!=3){
        timerId = setTimeout(tick, 1000); // (*)
      }
      if(i==3){
        setImages([])
        setCurrentIndex(0);
      }
      console.log("s",i)
      console.log("s1",currentIndex)
    
    }, 1000);
  };


  const handleChange = event => {
    setUsername(event.target.value);
  };

  const handleClick = (address) => {
    localStorage.setItem("username", username);
    
    navigate("/"+address)
  };
  return (
 
        <div className='App-home2'>
        {images.length==0 ? null: <img src={images[currentIndex]} className="animasyon" style={{ width: 100, height: 80 }} alt="logo" /> 
          
        }
       
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
        <div className='container col-md-3 col-6 mt-2'>
          <div class="input-group mb-3">
            <input id='username' name='username' onChange={handleChange} type="text" class="form-control" required aria-label="Username" aria-describedby="basic-addon1" />
          </div>
        </div>
        <button type="button" onClick={play} class="btn btn-outline-light mt-3" style={{width:150}}>ses</button>
        <button type="button" onClick={()=>handleClick("game")} class="btn btn-outline-light mt-3" style={{width:150}}>Normal Oyun</button>
        <button type="button" onClick={()=>handleClick("scoregame")} class="btn btn-outline-light mt-3" style={{width:150}}>Skor Oyun</button>
        <button type="button" onClick={()=>handleClick2()} class="btn btn-outline-light mt-3" style={{width:150}}>Skor Oyun</button>
       
        <Footer/>
        </div>
  );
}

export default Home;
