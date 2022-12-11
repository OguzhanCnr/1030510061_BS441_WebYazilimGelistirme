import { useContext, useState, useEffect, createContext } from "react"

const gameContext = createContext()
//1-Taş 2-Kağıt 3-Makas
  
  const GameProvider = ({ children }) => {
    const [computer, setComputer] = useState(1)
    const [userCounter, setUserCounter] = useState(0)
    const [computerCounter, setComputerCounter] = useState(0)
    function Game(user,setText) {
        setComputer(Math.floor(Math.random() * 3) + 1);
        if(user=="1"){
            if(computer=="1"){
                setText("Berabere");
            }
            else if(computer=="2"){
                setText("Bilgisayar Kazandı");
                setComputerCounter(computerCounter+1)
            }
            else if(computer=="3"){
                setText("Kazandınız");
                setUserCounter(userCounter+1)
            }
            else{
                setText("Hatalı İşlem");
            }
        }
       else if(user=="2"){
    
            if(computer=="1"){
                setText("Kazandınız");
                setUserCounter(userCounter+1)
            }
            else if(computer=="2"){
                setText("Berabere");
            }
            else if(computer=="3"){
                setText("Bilgisayar Kazandı");
                setComputerCounter(computerCounter+1)
            }
            else{
                setText("Hatalı İşlem");
            }
        }
        else if(user=="3"){
    
            if(computer=="1"){
                setText("Bilgisayar Kazandı");
                setComputerCounter(computerCounter+1)
            }
            else if(computer=="2"){
                setText("Kazandınız");
                setUserCounter(userCounter+1)
            }
            else if(computer=="3"){
                setText("Berabere");
            }
            else{
                setText("Hatalı İşlem");
            }
        }
        else{
            setText("Hatalı İşlem");
        }
      }

    const values = {userCounter,computerCounter, Game}
  
    return <gameContext.Provider value={values}>{children}</gameContext.Provider>
  }
  
  
  const useGame = () => useContext(gameContext)
  
  export { GameProvider, useGame }