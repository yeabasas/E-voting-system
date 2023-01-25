import '../../styles/Admin.css'
const Admin = () => {
    return ( 
        <div className="admin-cont">
            <div className="admin-form">
                <h2>Election Detail</h2>
                <label htmlFor="">Election Title:</label>
                <input type="text" />
                <label htmlFor="">Election Place:</label>
                <input type="text" />
                <label htmlFor="">Start Date:</label>
                <input type="date" />
            </div>
            <div className="admin-btns">
                <button>Start</button>
                <button>End</button>
            </div>
        </div>
     );
}
 
export default Admin;