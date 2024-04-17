export default function Timer(props) {
  return (
    <div className="timer">
      <p>Elapsed time:</p>
      <div className='elapsed'>
        {/* {props.timer /10 } */}
        <p>{props.tenzies ? props.timer/100 : Math.trunc(props.timer/100)} seconds</p>
      </div>
    </div>
  )
}
