import { Navigate } from 'react-router-dom'
const IsUserLogin = ({ user, element }) => {
    
    return user ? element : <Navigate to="/login" />;
    
}

export default IsUserLogin;