import { useState, useEffect, useRef } from 'react'
import Die from './components/Die'
// import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import Timer from './components/Timer'
// import {useWindowSize} from 'react'



import './App.css'

function App() {


  const [tenzies, setTenzies] = useState(false)
  const [numbers, setNumbers] = useState(populate())
  const [draw, setDraw] = useState(-1)
  const [timer, setTimer] = useState(0)
  const [isRunning, setIsRunning] = useState(false)


  // TIMER ON
  // the starting function is in the rollDice function. I used tutorials for this.
  // But documented here, to be understood.


  let timeInterval = useRef(null)

  function starter() {
    // Checks if the timer is running.
    if (isRunning) return;
    // If not then sets the timer to true and will run.
    setIsRunning(true);
    // it updates the interval by 10ms incrementing the previous value.
    timeInterval.current = setInterval(() => {
      // sets our state to the new value.
      setTimer((prev) => prev + 1)
    }, 10)
  }


  function pause() {
    // Checks if the timer is false. If it is not running returns and doesn't do anything.
    if (!isRunning) return;
    // if the timer is running then it sets the timner to false and pauses.
    setIsRunning(false);
    // Stops the timer from incrementing.
    clearInterval(timeInterval.current);
  }

  function reset() {
    // Sets the timer to false. This happens automatically when the game is over
    setIsRunning(false)
    // Stops the timer from incrementing.
    clearInterval(timeInterval.current)
    // resets the timer state to 0. For the next game
    setTimer(0)
  }

// TIMER OFF

  function populate() {
    let dice = []
    for (let i = 0; i < 10; i++) {
      let random = Math.floor((Math.random() * 6) + 1)
      let die = {
        key: i,
        value: '',
        isHeld: false,
        id: i
      }
      dice.push(die)
    }
    return dice
  }


  useEffect(() => {
    const reference = numbers[0].value

    let counter = 0
    for (let i = 0; i < 10; i++) {
      if (reference === numbers[i].value && numbers[i].isHeld) {
        counter += 1
      }
    }

    if (counter === 10) {
      setTenzies(true)
      pause()
    }

  }, [numbers])


  // I did not need this function, because I added a populate function, which populates the array with the dice without value
  //  the value will be added to the dice when the user clicks to Roll

  // function createDice() {

  //   let dice = []
  //   for (let i = 0; i < 10; i++) {
  //     let random = Math.floor((Math.random() * 6) + 1)
  //     let die = {
  //       key: i,
  //       value: random,
  //       isHeld: false,
  //       id: i
  //     }
  //     dice.push(die)
  //   }
  //   return dice
  // }

  function markDie(id) {
    setNumbers(prev => prev.map(die => {
        if (die.id === id) {
          return {...die, isHeld: !die.isHeld}
        } else {
          return die
        }
        }))
    }

  const diceNumbers = numbers.map(number => {
      return (
        <Die key={number.key} value={number.value} markDie={() => markDie(number.id)} isHeld={number.isHeld}/>
      )
    })


    function rollDice() {
      starter()
      if (!tenzies) {
        setNumbers(prev => prev.map(die => {
          if (die.isHeld) {
            return die
          } else {
            return {...die, value: Math.ceil((Math.random() * 6)) }
            // this is where the game starts also this part changes the value of the die
          }
        }))
        setDraw(prev => prev + 1)

      } else {
        setTenzies(false)
        setNumbers(populate())
        setDraw(0)
        reset()
      }
    }



  return (
    <>
      <main>
      {tenzies && <Confetti width={window.innerWidth} height={window.innerHeight} />}
          <h1 className="title">Tenzies</h1>
          <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className="container">
            {diceNumbers}
        </div>
         <p className="counter">{draw <= 0 ? "Let's play!" :  `You rolled ${draw} times.` }</p>
            <button className="roll" onClick={rollDice}>{tenzies ? "New Game" : "Roll"}</button>
         <Timer timer={timer} ></Timer>
      </main>
    </>
  )
}

export default App
