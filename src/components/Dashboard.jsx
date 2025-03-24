import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
    const [userDetails, setUserDetails] = useState({
        name: 'John Doe', // Simulated user details
        email: 'john@example.com',
        phone: '123-456-7890'
    });
    const [showDetails, setShowDetails] = useState(false);

    const handleSendClick = () => {
        setShowDetails(true);
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <Link to="/send">
                <button onClick={handleSendClick}>Send</button>
            </Link>
            <Link to="/balance"><button>Balance</button></Link>
            <Link to="/history"><button>History</button></Link>

            {showDetails && (
                <div>
                    <h2>User Details</h2>
                    <p>Name: {userDetails.name}</p>
                    <p>Email: {userDetails.email}</p>
                    <p>Phone: {userDetails.phone}</p>
                </div>
            )}
        </div>
    );
}

export default Dashboard;
