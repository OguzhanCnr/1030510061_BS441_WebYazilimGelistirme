import { useContext, useState, useEffect, createContext } from "react"
import baseApi from "../api/baseApi";
import { useNavigate } from "react-router-dom";
import rock from '../assets/images/rock.png';
import paper from '../assets/images/paper.png';
import scissors from '../assets/images/scissors.png';
const gameContext = createContext()
//1-Taş 2-Kağıt 3-Makas

const GameProvider = ({ children }) => {
    const [computerImg, setComputerImg] = useState("")
    const [userImg, setUserImg] = useState("")
    const [computer, setComputer] = useState(1)
    const [userCounter, setUserCounter] = useState(0)
    const [computerCounter, setComputerCounter] = useState(0)
    const gameMode = localStorage.getItem("gameMode");
    function SaveGame() {
        const navigate = useNavigate();
        baseApi.post(`User/`, {
            username: localStorage.getItem("username"),
            score: userCounter - computerCounter
        }
        ).then(() => {
            navigate("/");
        }).catch(function (error) {

        })
    }

    //Kullanıcı skorlarını getiren fonksiyon
    function GetUser(setscoreTable) {
        baseApi.get(`/User`)
            .then((getData) => {
                setscoreTable(getData.data);
            })
    }
    //Kullanıcı skoru ekleyen fonksiyon
    function AddScore() {
        baseApi.post(`/User`, {
            name: localStorage.getItem("username"),
            score: (userCounter - computerCounter).toString(),
        }).then(() => {

        })
    }
    function Deneme(setText) {
        if (gameMode == "1") {
            if (userCounter == 3) {
                console.log("Dabed abi kazandı");
                setText("Oyun Bitti Kazandınız")
                setUserCounter(0)
                setComputerCounter(0)
            }
            else if (computerCounter == 3) {
                console.log("Dabed abi kaybetti");
                setText("Oyun Bitti Bilgisayar Kazandı")
                setUserCounter(0)
                setComputerCounter(0)
            }
        }
    }


    //Oyunumuzun çalıştığı ve ana ekrandaki resimleri yazıları güncelleyen fonksiyon
   async function Game(user, setText) {
        setComputer(Math.floor(Math.random() * 3) + 1);
        if (user == "1") {
            setUserImg(rock)
            if (computer == "1") {
                setText("Berabere");
                setComputerImg(rock)
            }
            else if (computer == "2") {
                setText("Bilgisayar Kazandı");
                setComputerImg(paper)
                setComputerCounter(computerCounter + 1)
            }
            else if (computer == "3") {
                setText("Kazandınız");
                setComputerImg(scissors)
                setUserCounter(userCounter + 1)
            }
            else {
                setText("Hatalı İşlem");
            }
        }
        else if (user == "2") {
            setUserImg(paper)
            if (computer == "1") {
                setText("Kazandınız");
                setComputerImg(rock)
                setUserCounter(userCounter + 1)
            }
            else if (computer == "2") {
                setText("Berabere");
                setComputerImg(paper)
            }
            else if (computer == "3") {
                setText("Bilgisayar Kazandı");
                setComputerImg(scissors)
                setComputerCounter(computerCounter + 1)
            }
            else {
                setText("Hatalı İşlem");
            }
        }
        else if (user == "3") {
            setUserImg(scissors)
            if (computer == "1") {
                setText("Bilgisayar Kazandı");
                setComputerImg(rock)
                setComputerCounter(computerCounter + 1)
            }
            else if (computer == "2") {
                setText("Kazandınız");
                setComputerImg(paper)
                setUserCounter(userCounter + 1)
            }
            else if (computer == "3") {
                setText("Berabere");
                setComputerImg(scissors)
            }
            else {
                setText("Hatalı İşlem");
            }
        }
        else {
            setText("Hatalı İşlem");
        }
        await Deneme(setText);
    }

    const values = { userCounter, computerCounter, computerImg, userImg, Game, SaveGame, GetUser, AddScore }

    return <gameContext.Provider value={values}>{children}</gameContext.Provider>
}


const useGame = () => useContext(gameContext)

export { GameProvider, useGame }