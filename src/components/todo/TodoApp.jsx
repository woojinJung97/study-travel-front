
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './TodoApp.css'
import LogoutComponent from './LogoutComponent'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'
import ListTodosComponent from './ListTodosComponent'
import ErrorComponent from './ErrorComponent'
import WelcomeComponent from './WelcomeComponent'
import LoginComponent from './LoginComponent'
import AuthProvider from './security/AuthContext'

export default function TodoApp() {
    return (
        <div className="TodoApp">
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent />
                    <Routes>
                        <Route path='/' element={<LoginComponent />} />
                        <Route path='/login' element={<LoginComponent />} />
                        <Route path='/welcome/:username' element={<WelcomeComponent />}/>
                        <Route path='/error' element={<ErrorComponent />}/>
                        <Route path='/logout' element={<LogoutComponent />}/>
                        <Route path='/todos' element={<ListTodosComponent />} />
                    </Routes>
                    <FooterComponent />
                </BrowserRouter> 
            </AuthProvider>
        </div>
    )
}


