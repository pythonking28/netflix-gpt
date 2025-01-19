import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase';
import Header from './Header';

const Browse = () => {
    const displayName = useSelector(store => store?.displayName);
    const navigate = useNavigate()
    useEffect(()=>{
        if(displayName === undefined && auth.currentUser === null) navigate('/')
    },[navigate, displayName])
    return (
        <div> 
            <Header isLogin={ true } />
        </div>
    )
}

export default Browse