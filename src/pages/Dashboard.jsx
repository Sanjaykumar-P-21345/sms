import { Link, useNavigate } from "react-router-dom";

function Dashboard() {

    const navigate = useNavigate();

    const logout = () => {

        localStorage.removeItem("token");

        navigate("/");
    }

    return (

        <div style={{padding:"30px"}}>

            <h1>Student Management Dashboard</h1>

            <br/>

            <Link to="/add">
                <button>Add Student</button>
            </Link>

            <button
                onClick={logout}
                style={{marginLeft:"20px"}}
            >
                Logout
            </button>

            <hr/>

            <h2>Students List Coming Next...</h2>

        </div>

    );
}

export default Dashboard;