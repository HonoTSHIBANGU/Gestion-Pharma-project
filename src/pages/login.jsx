import { useNavigate } from 'react-router-dom';

function Login() {

    const navigate = useNavigate();
    const handleClick = (path) => {
        navigate(path)
    }

    return (

        <>
            <h1>login Page</h1>
            <button onClick={() => handleClick('/home')}>Connexion </button>


        </>
    )
}

export default Login