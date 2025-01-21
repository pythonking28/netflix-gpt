import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase';
import Header from './Header';
import useGetMovieList from '../utils/useGetMovieList';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import { NowPlaying, Popular, TopRated, Upcoming } from '../utils/constants';

const Browse = () => {
    const displayName = useSelector(store => store?.user?.displayName);
    const navigate = useNavigate()
    useGetMovieList(NowPlaying)
    useGetMovieList(TopRated)
    useGetMovieList(Popular)
    useGetMovieList(Upcoming)
    
    useEffect(()=>{
        if(displayName === undefined && auth.currentUser === null) navigate('/')
    },[navigate, displayName])
    return (
        <div> 
            <Header isLogin={ true } />
            <MainContainer />
            <SecondaryContainer />
            {
                /*
                    Main Container
                        - VideoBackground
                        - Video Title
                    Secondary Container
                        - Movie List * n
                        - cards * n
                */
            }
        </div>
    )
}

export default Browse