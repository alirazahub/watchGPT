import React,{useState} from 'react'
import LoginScreen from './components/LoginScreen'
import Navigation from './components/Navigation'

const MainComponent = () => {
    const [isLogin,setIsLogin] = useState(true)
    return (
        <>
        {isLogin ? <Navigation /> : <LoginScreen />}
        </>
    )
}

export default MainComponent
