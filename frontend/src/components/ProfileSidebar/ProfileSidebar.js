import './ProfileSidebar.css'

const ProfileSidebar = () => {

    return (
        <div className="fixed-sideBar">
            <img className="sideBar-profile" alt="" src="https://avatars.githubusercontent.com/u/101578812?s=400&u=d576b7ce3cebfdac8ec77f47941b09b0ed662519&v=4"></img>
            <p className='bio'>Hey There! 👋 My name's Jessie! I'm a Full Stack Developer and the creator of this website! Want to know more about me? look below!
            </p>
            <br></br>
            👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇
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
