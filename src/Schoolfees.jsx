import React, { Fragment } from "react";
function Schoolfees()
{

return(
<React.Fragment>


<h1 className="display-4 text-center" style={{fontFamily:"Arial Black" }}>School fees</h1>
<br></br>
<div className="text-center"><table>
  <tr>
    <th>Year</th>
    <th>Term 1 fees</th>
    <th>Term 2 fees </th>
    <th>Term 3 fees</th>
    <th>Total fees</th>
  </tr>
  <tr>
    <td>FS1 </td>
    <td>5,856/-</td>
    <td>4,391/-</td>
    <td>4,391/-</td>
    <td>14,638/-</td>
  </tr>
  <tr>
    <td>FS2</td>
    <td>6,065/-</td>
    <td>4,550/-</td>
    <td>4,550/-</td>
    <td>15,165/-</td>
  </tr>
  <tr>
    <td>1 to 4</td>
    <td>6,960/-</td>
    <td>5,219/-</td>
    <td>5,219/-</td>
    <td>17,398/-</td>
  </tr>
  <tr>
    <td>5 to 7</td>
    <td>7,059/-</td>
    <td>5,294/-</td>
    <td>5,294/-	</td>
    <td>17,647/-</td>
  </tr>
  <tr>
    <td>8 to 10</td>
    <td>7,480/-</td>
    <td>5,609/-	</td>
    <td>5,609/-</td>
    <td>18,698/-</td>
  </tr>

</table></div>
</React.Fragment>




);

}
export default Schoolfees;