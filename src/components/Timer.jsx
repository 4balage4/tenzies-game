export default function Timer(props) {
  return (
    <div className="timer">
      <p>Elapsed time:</p>
      <div className='elapsed'>
        <p>{Math.trunc(props.timer/100)} seconds</p>
      </div>
    </div>
  )
}
