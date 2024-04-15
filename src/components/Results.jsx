
function Results(props) {


  return (
<div className="results-page">
    <h2>🏆Fastest results🏆</h2>

    <table className="container-winners">
      <thead>
        <tr>
          <th>#</th>
          <th scope="col">Nick Name</th>
          <th scope="col">Draws</th>
          <th scope="col">Time</th>
        </tr>
      </thead>
        <tbody>
        {props.fastestResult.map((winner, index) => {
          return (
              <tr key={winner.id}>
                <td className='index'>
                  {index + 1}.
                </td>
                <td className="results">
                    {winner.userName}
                </td>
                <td className="results">
                    {winner.draw}
                </td>
                <td className="results">
                    {winner.time / 100}
                </td>
              </tr>
          )
        })}
        </tbody>
      </table>


    <h2>🏆Best Draw results🏆</h2>
    <table className="container-winners">
      <thead>
        <tr>
          <th>#</th>
          <th scope="col">Nick Name</th>
          <th scope="col">Draws</th>
          <th scope="col">Time</th>
        </tr>
      </thead>
        <tbody>
        {props.drawResult.map((winner, index) => {
          return (
              <tr key={winner.id}>
                <td className='index'>
                  {index + 1}.
                </td>
                <td className="results">
                    {winner.userName}
                </td>
                <td className="results">
                    {winner.draw}
                </td>
                <td className="results">
                    {winner.time / 100}
                </td>
              </tr>
          )
        })}
        </tbody>
      </table>


</div>




  )
}


export default Results;
