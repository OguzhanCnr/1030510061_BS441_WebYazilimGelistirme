import { useEffect } from "react";
import { useGame } from "../../context/gameContext";
import rock from '../../assets/images/rock.png';
import paper from '../../assets/images/paper.png';
import scissors from '../../assets/images/scissors.png';
function GameButtons({setImages,setCurrentIndex}) {
 
  const { Game,userCounter,computerCounter,setText } = useGame();

    const deneme = () => {
      if(userCounter==3){
      alert("Kullanıcı Oyunu Kazandı")
      }
      else if(computerCounter==3){
        alert("Bilgisayar Oyunu Kazandı")
      }}
  //Taş kağıt makas animasyonu
  //Kullanıcı seçim yaptığında 1 saniye aralıklar ile taş kağıt makas resimlerini ekranda gösterir
  //Ardından gameContext kısmındaki Game fonksiyonunu çalıştırır.
  const  handleClick = (user, setText) => {
    let i = 0;
    setImages([rock, paper, scissors]);
    let timerId = setTimeout(function tick() {
      i += 1;
      setCurrentIndex(i);

      if (i != 3) {
        timerId = setTimeout(tick, 1000); // (*)
      }
      if (i == 3) {
        setImages([])
        setCurrentIndex(0);
      }
    }, 1000);
    setTimeout(() => {  Game(user, setText) }, 3000);
    
   // setTimeout(() => {  deneme() }, 3000);
   
  };
  return (
    <>
      <h3 className="mt-2">
        Lütfen Seçim Yapınız
      </h3>
      <div className=" d-flex mt-5">
        <div className="col-md-4 me-4"><img src={scissors}  onClick={() => handleClick("3", setText)} className=" mt-auto" style={{ width: 100, height: 80 }} alt="logo" />
        </div>
        <div className="col-md-4 me-4"><img src={paper} onClick={() => handleClick("2", setText)} className=" mt-auto" style={{ width: 100, height: 80 }} alt="logo" />
        </div>
        <div className="col-md-4 me-4"><img src={rock} onClick={() => handleClick("1", setText)} className=" mt-auto" style={{ width: 100, height: 80 }} alt="logo" />
        </div>
      </div>
    </>

  );
}

export default GameButtons;
