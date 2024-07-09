import React from 'react'
import LoginForm from '../components/LoginForm/LoginForm'

const Login = () => {
//     const [userData, setUserData] = useContext(UserContext)
//   const navigate = useNavigate()
//   const [form, setForm] = useState({})
// //   console.log(userData);
//   const handleChange = (e) => {
//     setForm({...form, [e.target.name]: e.target.value})
//   }
//     // console.log(form)

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     try{
//         // console.log(form);
//       const loginRes = await axios.post('http://localhost:4000/api/users/login',
//       {
//         email: form.email,
//         password: form.password
//       })

//       setUserData({
//         token: loginRes.data.token,
//         user:loginRes.data.user
//       })

//       localStorage.setItem('auth-token', loginRes.data.token)

//       navigate('/')
//     }
//     catch(err){
//     console.log('problem', err.response.data.msg)
//     alert(err.response.data.msg)
//     }
//   }
  
//   useEffect(() => {
//     if(userData.user) navigate("/")
//   }, [userData.user, navigate])
  return (
    <LoginForm/>
  )
}

export default Login