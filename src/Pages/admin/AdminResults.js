import '../../styles/Admin.css'
const AdminResults = () => {
    return ( 
        <div className="admin-results-cont">
            <h2>Result</h2>
            <table>
                <tr bgcolor="white">
                    <th>No.</th>
                    <th>Candidates</th>
                    <th>Votes</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Peter Parker</td>
                    <td>16</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Clark Kent</td>
                    <td>34</td>
                </tr>
            </table>
        </div>
     );
}
 
export default AdminResults;