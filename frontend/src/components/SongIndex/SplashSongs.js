import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react'
import { getSongs } from '../../store/song';
import { getAudio } from '../../store/songPlayer';
import './SongsIndex.css'

const SplashSongs = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    dispatch(getSongs())
  }, [dispatch])

  const playSong = async (id) => {
    await dispatch(getAudio(id))
  }

  const songObject = useSelector(state => state.songs.allSongs)
  const songs = Object.values(songObject);
  const sample = songs.slice(0, 12)


  return (
    <div>
      <center>
        <h4 className='splashHeader'>Sample some of our Free Hits on SongCloud</h4>
      </center>
      <div className='songSectionSplash'>
        {
          sample?.map(song => (
            <div className='boxSpash'>
              <img className="playButtonSplash" alt="" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIHEBMQEw8QFRAQERATGBcQDQ8VEBUVGBUXFhUXExUZHSggGBoxGxcVITEiJSktLi4uFx8zODUvNygtLjcBCgoKDg0OGxAQFyslHyUtLS0wLSsrLS0tMDUvLS0tLS0tMC8tLS0rLy0tLy0tKystLS0tLS4tLS0tLS0tLS0tK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQIEBgcFA//EAEgQAAIBAgIECQgHBAkFAAAAAAABAgMRBAUGITFREhMiQWFxgZGhFDI0UmJyc7EHI0KCsrPBFqPR0hVEVIOSwuHw8TM1Q1Nj/8QAGwEBAAMBAQEBAAAAAAAAAAAAAAMFBgQBAgf/xAAzEQACAgEBBAkDAwQDAAAAAAAAAQIDEQQFITFREkFhcYGRsdHwIjKhE8HhM1KS8RRicv/aAAwDAQACEQMRAD8A7iAAAAAAAAAAAAAAAAQwCQYtTHUqWqValF+1Vgn4sx555hof1il2Sv8AI+HZFcWl4kkapy4Rb8D0geZHPsLL+sU+2VvmfenmNGpqVek3ujWg38wrYS4SXmg6bFxi/JmYCESfeCMAAAAAAAAAAAAAAAAAAAAAAAAAAAAHgZ3pNSyy8V9ZV9WL1L3pc3VtI7LYVx6U3hElVU7ZdGCyz3JTUFdtJLnb1Hg5jpXh8HqTdSXsW4PbJ/pc0jNM7rZo+XPk3uox1RXZz9p5xSX7Xk91Sx2v29/IuqNkRW+157Fw8/bHebJjtMa+I1Q4NNeylJ97/geLicxrYrz6tSXXN27jFIKuzUW2ffNv5y4fgtK9PVX9kUvD4y1yACDCJQSQBhAyMPjamG8ypOPuzaPYwWl2Iw3nSjUjunHX/iVn33NeJJq7rK/sk13P4iKyiuz74p96+M6Hl2mFDE2jUUqct71w71s7UbDSqxrJSjJOL2OLTT7TjZmZdmdXLZcKnNq9rran1rnLSja81utWe1bn7ehWX7Ig99Tw+T3r39TroNYyTS2njbRq2p1Hz3+rk+h/Z7e82cu6b67o9KDyvnEpbqZ1S6M1j51AAEpEAAAAAAAAAAAAAAAD51KippttJJXbbSSXSxUqKknJtJJNtvYktrZznSjSOWZSdOm2qMX1OT3vo3I5dVqoaeGXvb4LmdWk0k9RPox3JcXyM3SLSx1r0sO2o7HUTak/d3Lp2mpPWVuLmXvvnfPpTf8AHcammiFMOhBfz3lgVuLkJMWBW4uAWBW4uAWBW4uAWBW4uAWBW4uAWNj0e0pngGqdW86XS7zj7u9dBrVxckpunTLpQeGR20wtj0ZrKOy4avHExU4SUoSV009R9zlmjufzyedtcqMnyo/5o7n8zpmGxEcVBVINOEldNGo0msjqI8muK/ddhltZo5aaXOL4P9n2+p9wAdhxgAAAAAAAAAA1/S3N1ldHgxf1tW8Y74r7Uv8AfOyO2yNcHOXBElVUrZqEeLPB01z/AI2Tw1OXJi2qjXPJfZ6lz9PUaiVbuDJ33Sum5y/12Gx09EKK1CHD17SwKghwTFgVAwCwKgYBYFQMAsCoGAWBUDALAqBgFgVAwCxsOiWff0ZPi5v6mb1+xL1l0bzXASVWSqmpxe9EdtUbYOE+DO3A1LQbOvK4OhN8umrxbetw3da+TRtpraLo3QU49ZjtRRKix1y6vz2gAEpCAAAAAAUnNQTbdkld32WOS6QZm81xEqmvg+bBPmitn6vtN603zHyLCuKfKqvgfdteT7tXacxKLa1+Wql3v9vfyNDsbT4i7n17l3dft4MvcXKApy8wXuLlABgvcXKADBe4uTQputKMFtnKMV1t2XzOl/sdheKVNwldLz1N8Zffu7LWOrTaOy/PRxu5nJqtZXpuj087+RzO4ue3nui9bKryS4yj60VrXvx5uvYeFcgsqnXLozWGT1WQtj0oPK+eRa4uUB8EmC9xcoAMF7i5QAYL3FygAwXuLlABgy8uxksBVhVj50JJ9a2Nd10deweIjjKcKkfNnFSXauc4sdA+jzMONpzoN66bUo+69q7H+ItdlXdGx1vg/Ve6KfbGm6VatXGPHufs/Vm4gA0BmgAAAARcA5rp/jePxPFp8mlFL70lwn4NLsNZMnNsT5XXq1PXqSfZfV4GKZC+f6lsp83/AK/BudPV+lVGHJfnr/OSQQCInJBAAJBAAMvKfSKPxqP44nZzjGUekUfjUfxxOzl9sj+nLvM7t37odzBqueaH0sdedK1Kprdkvq5PpX2X0ruNqBZW0wtj0ZrKKem+ymXSrlh/OK6zjGYZfVy2fAqwknzXXJl0xlsaMU7PjcHTx8HTqQjOL5n809qfSjRc90LnhrzoXqQ9R/8AUXV6y8esotTsyde+v6l+f58PI0ek2tXb9Nn0y/D9vHzNSBD5OrnWrXtT6QVhb4JBAAJBAAJBAAJPZ0QxnkeLpa+TOXFvqlqXjY8UmnPgNNbU0+7Wfdc/05Ka6t58WVqyDg+DWPM7iDHwlbymnCfrwjLvVzINimnvRg2mnhgAA8Bh5nU4ihWmtsKVSXdFszDytJanF4Ou/wD5TXfq/U+LHiDfYySmKlZGL62vU5DsBDIMekb5lgVB7gYLAqBgYLAqBgYM3KPSKPxqP44naDi2UekUfjUfxxO0l5sj7Jd5nNu/dX4+oABbFAAAAeHnujlHOFdrg1OacEr/AHl9pHPM5yGvk75UbwvZTjrg/wCV9DOvnyq041k4yipRas1JJprc09pxanQV3fVwlz9/mSy0e07dPiL+qPJ9Xc+ru4HEQb5n+hKq3qYdqMv/AFy81+5L7PU9XUaNiaE8JJwnCUZx2qSaf/HSUF+mspeJrx6n87cGn02rq1Ec1vw613/xkoCCCHB04LAqBgYLAqBgHW9Eq3HYKhL2HH/DJxXyPaPB0I9Ao/3n5sz3jWad5pg3yXoYXWLGosS/ul6sAAmOcHlaUR4WDr/Ck+7WeqYOb0+Nw9aK2yo1UutwaR8WLMGux+hLRLo2xfJr1Rxcm5S4MijftF7i5QAF7i5QAF7i5QAGbk/pFH4tH8cTtZxPJ/SKPxqP44nbC72T9s+8ze3vur8fUAAtjPgAAAA+GIxEMLFznOMYR2uTSSAW8+5pP0k1KXFQi7cfwrq3nKFnwr9F7GNpBpzwr08Muh1JR1/cjzdb7jSalR1ZOUm3Ju7bd23vbKfW66EouuG/PX1eHNmi2bsu2Fiut+nHBdfjyX56twuLlAUxoi9xcoAC9yLlQDw6zoP/ANvof3n5sz3zw9Dabo4GgnzxlLslOUl4M9w1em/ow/8AK9DC6151Nj/7S9WAATHMCGrkgA4hmWG8jrVKfqTlHulqMU2X6QMF5Ji5TtqrRjJdeyXir9prJk7a/wBObhyfz8H6Bp7P1ao2c0n49f5JBAIybBIIAGCQQAMGdk3pNH41H8yJ2w4jk3pFH41H8yJ24u9lfZLvM1t/7q+5+oABameAMHM80pZXDh1ZqK5ltlJ7ornOeZ/pnVx94UeFTpPpXGP3pLzepd5zX6qulfU9/LrO3SaC7Uv6Vhc3w/nw8cI23P8ASyjlN4K1SsrrgxkuDF+3Lm6tpzvNs6rZvLhVJtpbIrVBdUd/TtPN2go9Rq7Ltz3Lkvm81ek2dTpt8VmXN8fDl4b+1kggHId2CQQAMEggAYJLRXC1La9RQ9bRXB+XYyjG2pTU37sOU791u0+owc5KK6z4nNVxc31LPlvOt4Cj5NSpw9SnTh3RSMkA1qWFhH5625Nt8WAAengAABqf0hZc8VhlUiuVRld+49UvHgvsZzA7tWpKvGUJK8ZJprenqZxbO8vllVedKV3wXqbVuFF+a+4pdp04krF17n39XzsNTsLUdKt0vit67nx8n6mGCtxcrC+wWBW4ueDBYgi4uBgzsn9Jo/Go/mRO3HBqNZ0ZRktsZRkutO6+R0pae4bilNqpxltcFHn3cLZbpLXZ10K4yU3jgUO29Ldc63XFvit3V3+5tk5KCu2klzvYjTdItN4Ya9PD2qTu056+Lj7vr/LrNSz3SevnLs5cCn6kJO33n9p9fceLcajaTf01bu32XV69w0WxIwxPUb3y6vHn6d5k43Gzx03OpOU5Pnk/Bbl0IxyLi5V9pfKKSwiwK3FzwYLArcXAwWBW4uBgsCtxc9GCToH0aZc4RqYlrzrU49S1yffZdjNEweHljKkacFeU5KK62dpyvBRy+jTox2U4pXttfO31u7LDZ1LnZ03wXr/CKXbep/TpVS4y9Fx83u8zNABemSAAAAAABqWn2S/0hR46Mb1aK12WuVPa102295toI7albBwl1k+m1EqLVZHivzzXicBJNp040deWVOOpxfE1ZNuy1U5vW49T127txqpmrK5VycZcTe0XQvrVkHufzBIIB8ExIIABYggA8JBAAJBAB6SCAASCAASCAASCD3tEsglndbXdUYa5teEE978F2H1CEpyUY8WR22Rqg5zeEjY/o6yTi08XNa5XjTvu2Sl+i7d5vp8qVJUkoxSUYpJJKySWxI+ppKKVVBRRgtXqpam12S8FyXIAAmOYAAAAAAAAA+GKw0MXCVOcVKE000+dHJdKtHJ5JO+uVCT5MrbPZlufzOwmPisLDGQdOcVKElZp7Gcuq0yujya4P51Fjs7aE9JPnF8V+67fX04ODZ9KdEKmVN1ad54fvnDomt3td9jVygsrlXLoyW821F0L4Kyt5Xzc+TJBAPglwSCAD3BIIAGCQQAMEggAYJBAAwSCD39GdGKueSv5tBO0pPxUF9p+C8D6hCU30YrLI7bYVQc5vCXWYuQZLUzuqoRjaKtw5NcmK/juR1/K8vp5XSjSpxtGPe3ztvnZGWZdTyqmqVKNortk3vk+dmcX+l0qpWXvkzE7S2lLVywt0FwXPtfb6AAHWVgAAAAAAAAAAAAAAANK0i0Ghjb1KDVOo7tw/wDHJ9HqvwN1BHbVC1YmsnRptVbpp9OqWPR966zhGYZdVy2XAq05QftR1Pqa1PsMQ7zjMJTxkeDUhCcd04prrW59Jp+b/R7Sr8qhUdOXqy1w7HtXiVVuz5x3weV+fY0+l2/TPdcui+fFfu1+e85sD3cx0RxmA1cS5rfSUprtS1ruPDnB03Zxknukmn4nDOEoPEljvLyq2FqzXJNdjyQBsFz5JABcAAEqLk7JSb3JXZ6+XaMYvMPNoTinr4VSLhG3XLb2XPYxcniKyfFk41rM2ku1pep4598LhKmMkoU4SnJ8yTb/ANDfMr+jpQalXq39mlqXbN6+5G5YDLqOXR4NKlCC5+DHW/ee19p3VbPsl9+5fn28yl1W3qK91S6b8l7vw8zTtHtAuLtUxLu9vFxfJ++1t6l3m9UqapJRikoxVkkrJLckfQFrTTCpYivcy+q1l2ql0rX3LqXd78ebAAJTlAAAAAAAAAAAAAAAAAAAAAAAABj18LTxPn0oS9+nGXzMgBrO5nqbTymeHiNFMHX1vC017jnBd0Wj5fsVgP7N+/r/AMxsIIv0Kv7F5I6o6/VRWFdP/J+5r37FYD+zfv6/8xalohgaLusLFv2pVJLulJnvg8/49X9kfJB7Q1bWHdP/ACl7mLh8DSwnmUacPh0ox+SMoAlSxwOWUnJ5byAAengAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//9k=" />
              <img className="imagesSplash" alt="" onClick={() => playSong(song.id)} src={`${song.imageUrl}`} />
              <Link className="song" to={`/songs/${song.id}`}>{song.title}</Link>
              <div className='song-description-splash'>{song.description}</div>
            </div>
          ))
        }
      </div>
      <div className="pitchSection">
        <h4 className="pitch">Ready to join the community?</h4>
        <h6 className="pitch">Sign up today to start sharing music for FREE</h6>
        <Link to="/signup"><button className="pitchButton">Sign Up</button></Link>
      </div>
    </div>
  );
}

export default SplashSongs;
