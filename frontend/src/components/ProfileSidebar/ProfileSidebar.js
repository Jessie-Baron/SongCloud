import './ProfileSidebar.css'

const ProfileSidebar = () => {

    return (
        <div className="fixed-sideBar">
            <img className="sideBar-profile" alt="" src="https://scontent.ftpa1-1.fna.fbcdn.net/v/t1.18169-9/17353106_1458753287489168_7879488182718636679_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=XoZy9rZ4X0UAX-efnI8&_nc_ht=scontent.ftpa1-1.fna&oh=00_AT8_38jlseNN6JAGQqYDgCaVnLEe2Kb02eASt1zH036FUQ&oe=6379B0B3"></img>
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
