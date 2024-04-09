

export default function Die(props) {
  return (
    <div className={props.isHeld ? "die-clicked" : "die"} onClick={props.markDie}>
      <h3>{props.value}</h3>
    </div>
  )
}
