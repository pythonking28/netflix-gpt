import { useSelector } from 'react-redux'
import useGetTrailerVideo from '../utils/useGetTrailerVideo'

const VideoBackground = ({movieId}) => {

  const trailerVideo = useSelector(store => store?.movies?.trailerVideo)
  useGetTrailerVideo(movieId)
  return (
    <div className='w-full'>
      <iframe className='w-full aspect-video absolute -top-8 -z-10 ' src={"https://www.youtube.com/embed/" + trailerVideo?.key+ "?autoplay=1&mute=1&loop=1&playlist="+ trailerVideo?.key +"&cc_load_policy=3&si=7tpjSEJhFzJnlg5x&amp;controls=0&amp&1"} title="YouTube video player"></iframe>
    </div>
  )
}

export default VideoBackground