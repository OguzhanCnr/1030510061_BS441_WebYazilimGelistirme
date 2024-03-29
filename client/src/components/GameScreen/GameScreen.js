import { useEffect } from "react";
import { useGame } from "../../context/gameContext";
function GameScreen({currentIndex,images}) {
  const username = localStorage.getItem("username");
  const { userCounter, computerCounter,userImg,computerImg,text } = useGame();

  return (
    <>
        <h3 className="mt-2">
          <div class="d-flex flex-column h-100">
            <div class="p-2">{username}</div>
            <div class="p-2 text-center">{userCounter}</div>
            {
            //Kullanıcı hareketlerden birini seçtiğinde ekranda taş kağıt makas gözüktüren ardından da seçilen hareketi gösteren kısım
            images.length==0 ?  userImg &&  <img src={userImg} className=" mt-auto" style={{ width: 100, height: 80 }} alt="logo" /> 
            : <img src={images[currentIndex]} className="animasyon" style={{ width: 100, height: 80 }} alt="logo" />    
            }
              </div>
        </h3>
        <h3 className="mt-2">
          {text}
        </h3>
        <h3 className="mt-2">
          <div class="d-flex flex-column h-100">
            <div class="p-2">Computer</div>
            <div class="p-2 text-center">{computerCounter}</div>
            {   //Bilgisayar hareketlerden birini seçtiğinde ekranda taş kağıt makas gözüktüren ardından da seçilen hareketi gösteren kısım
             images.length==0 ? computerImg &&  <img src={computerImg}  className=" mt-auto" style={{ width: 100, height: 80,transform: 'rotate(180deg)' }} alt="logo" />
            : <img src={images[currentIndex]} className="animasyon" style={{ width: 100, height: 80 }} alt="logo" />   
            }
          </div>
        </h3>
    </>
  );
}

export default GameScreen;
