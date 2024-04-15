
export default function UserName(props) {


  return (
    <div className="user-info">
      <input type="text" placeholder="your nickname here..." name="userName" onChange={props.handleUserName} value={props.userName} required />
      { props.userName && <button className="roll send" onClick={props.sendResults}>Send Results</button> }

    </div>
  )

}
