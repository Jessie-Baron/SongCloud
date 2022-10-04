import './ProfileSidebar.css'

const ProfileSidebar = () => {

    return (
        <div className="fixed-sideBar">
            <img className="sideBar-profile" alt="" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8SEhUQEg8WFhMWEBUSEhIQFRUSEhUWGBcXFxUWGRgYHyogGBolHRcVITUhJSorLi4uGB8zODMsNygtLisBCgoKDQ0ODg8NDisZFRktKy0rLS0tLSsrKysrKysrKysrKysrKysrLSsrLSsrKysrKysrKysrKysrKysrKysrK//AABEIAOkA2AMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcECAEDBQL/xABFEAABAwICCAIFCQQJBQAAAAABAAIDBBEFEgYHEyExQVFxImEjMkKBkRQkQ1JigqGxwQgXcqIVRGNzkpOjsrMWMzVTVP/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABYRAQEBAAAAAAAAAAAAAAAAAAARAf/aAAwDAQACEQMRAD8AuhERVkREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBEXTV1cUQzSyNYOsjg380V3IotWaxMGi9bEIiRxEZMh/lBXn/vcwK9vlh/yZ7f7EE5RRej1iYNL6uIRAngJCYz/OApFS1cUozRyNeLXvG4OH4IO5EREEREBERAREQEREBERAREQEREBERAREQFG9LtOKDDm+nlvIRdsEfildxsSPZHmbe9QfWdrZFOXUlAWumF2y1HrNi+ywcHP8+Atz5QbQzVxX4q75XUSOjhe7M6eW7pZepYDx6Zju78EWMrSPXFidU7Z0g+TsJsBEM87uPtEbvugHzXnUGrvH68iSSN4DvFta6Qt/lcS/+VX5ovoZh+HttTwAPtvmk8czu7jw7CwUgQUZRahJjYy17B1bHG534kj8l6H7hYP/AL33/u22/NXGiFUXW6hZhcxV7D0bJG5v4gn8lF6/V3j9ATJHHIQ3xbWhkLrfdbZ/vyrZxEK100b1xYnSu2dWPlDBucJRs528PaA3/eBO/irn0R04w/ER6Ca0oF3QSeGVvUge0Bcb23HZdmlGhmH4g21RAC72ZmeCZvmHDj2NwqK0z1b1+FO+V08jpIWOzNniu2WLpnA4fxDd2QbKoqj1Y62BUFtJXua2Y2bFUeq2To1/Jr/Pgb8AeNuICIiIIiICIiAiIgIi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"></img>
            <p className='bio'>Hey There! 👋 My name's Jessie! I'm a Full Stack Developer and the creator of this website! Want to know more about me? look below!
            </p>
            <br></br>
            👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇
            <h3 className='social-header' >Interested in hiring me?</h3>
            <h4 className='social-subHeader' >Let's Connect!</h4>
            <br></br>
            <br></br>
        <div className='socialsContainer'>
        <div className='socials'>
            <img className="socialIcon" alt="" src="https://cdn.icon-icons.com/icons2/2699/PNG/512/twitter_tile_logo_icon_167744.png"></img>
        </div>
        <div className='socials'>
        <img className="socialIcon" alt="" src="https://cdn-icons-png.flaticon.com/512/174/174857.png"></img>
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
            <img className="socialIcon" alt="" src="https://cdn-icons-png.flaticon.com/512/5968/5968866.png"></img>
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
