
import '../../styles/Admin.css' 
const AddCandidates = () => {
    
    return ( 
        <div className="admin-cand-conts">
            <h2>Add Candidate</h2>
            <label htmlFor="">Candidate Name</label>
            <input type="text" />
            <label htmlFor="">Party Name</label>
            <input type="text" />
            <label htmlFor="">Candidate Image</label>
            <input type="file" />
        </div>
     );
}
 
export default AddCandidates;