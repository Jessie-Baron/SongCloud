import UsersList from '../UserList'
import ThreeSongs from '../SongIndex/ThreeSongs'
import './ProfileSidebar.css'

const ProfileSidebar = () => {

    return (
        <div className="fixed-sideBar">
            <div className='users-header'>
            <i class="fa-solid fa-user-group"></i><h2 className='users-header-text'>Artists you should follow</h2>
            </div>
            <UsersList />
            <div className='users-header'>
            <i class="fa-solid fa-radio"></i><h2 className='users-header-text'>Songs you should listen to</h2>
            </div>
            <ThreeSongs />
            <div className='users-header'>
            <i class="fa-solid fa-camera-retro"></i><h2 className='users-header-text'>About me</h2>
            </div>
            <img className="sideBar-profile" alt="" src="https://avatars.githubusercontent.com/u/101578812?s=400&u=d576b7ce3cebfdac8ec77f47941b09b0ed662519&v=4"></img>
            <p className='bio'>Hey There! 👋 My name's Jessie! I'm a Full Stack Developer and the creator of this website! Want to know more about me? look below!
            </p>
            <br></br>
            &nbsp;&nbsp;👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇
            <h3 className='social-header' >Interested in hiring me?</h3>
            <h4 className='social-subHeader' >Let's Connect!</h4>
            <br></br>
            <br></br>
        <div className='socialsContainer'>
        <div className='socials'>
            <a href="https://twitter.com/CapnJessieBaron"><img className="socialIcon" id="socialIcon1" alt="" src="https://cdn-icons-png.flaticon.com/512/124/124021.png"></img></a>
        </div>
        <div className='socials'>
            <a href="https://www.linkedin.com/in/jessie-baron/"><img className="socialIcon" id="socialIcon2" alt="" src="https://cdn-icons-png.flaticon.com/512/174/174857.png"></img></a>
        </div>
        </div>
        <br></br>
        <br></br>
        <hr className='sideBar-seperator'></hr>
        <br></br>
            <h4 className='social-subHeader'>Check Out Some of My Other Work!</h4>
        <br></br>
        <br></br>
        <div className='socials'>
            <a href="https://github.com/jbaron94"><img className="socialIcon" alt="" src="https://cdn-icons-png.flaticon.com/512/5968/5968866.png"></img></a>
        </div>
        <br></br>
        <hr className='sideBar-seperator'></hr>
        <div className='social-footer'>
            <div>A Jessie Baron creation</div>
            <div>inspired by SoundCloud</div>
        </div>
        </div>
    )
}

export default ProfileSidebar
