import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink className='signUp' to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <header>
    <div className='navBar'>
      <li>
        {isLoaded && sessionLinks}
        <img className="logo" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAV0AAACRCAMAAABXC5v+AAAApVBMVEX+SAD+RgD+RwD+RQD////+SQD/9PD/vqv+ybf+QAD+ilz/+vf+OwD+fkv+bjv+nHb+r5b+l2//tqD+gFL+VAD+lGr+qpH+cDb/7uf+YR/+xrT+Tx7+rJj/saT/rJ3+USr+5Nr+zr/+pIv+flj+lHf+TBX+1sn9eFP9jG39ckr+a0T/4db+nIP9Yjf+ViD+iWb+ZS7+Wzb+uqP+o5D+XSr+Yj/+kHIq8OCJAAAEb0lEQVR4nO3ca3vaNhjG8RgJEeGnOTVhKmaLMTY5QKBLtn3/jzabLGmb0pay3tYD3P8X5CXod+mS5MOVI8NwHcX+AXsddZFRFxl1kVEXGXWRURcZdZFRFxl1kVEXGXWRURcZdZFRFxl1kVEXGXWRURcZdZEdJQwXdZFRFxl1kVEXGXWRURcZdZFRFxl1kVEX2Q7qGi/PeRP7p/yo3dKtYU32MCnL4qkoy8lDZnQT75BuTVtNRtPg7EsuTEeTSjHwzugakZveJ9hPud6NiFLfXdEVKcMa2udCKRL7B65tN3S93K6btp9N4FvxsX/kmnZCV+7H37VtGt8rnL47oGuk/P7E/W/6lvpWX/26xvc2sG3qqTs8qNc1Mt0Q19qpttmrXddX+ca41uaVrr1Nua5f/AxuzbtQxatb13Q3Xxaem1aaFgfVusb/+CT2trGmrU21rgx+GtfagaJzr2Zdf7cFrrV3epZexbpGNrmI+Dqn51ymRdc0d8Ob2+LmlUZGW+FaO1KzNmjQ9WI61XK+/Hgyn08WVWVWG5O/T7fUTe+1rA3Rdeu5unwsfnvv7PH7fmrH/aswKz9U9TQebolr7VDL5I2s681icZLaXqM7fNeviftXNfH56bi8227VbXJaJm9cXT+ZXXxYq7u17KoLJZM3oq7xR90aAqEbqnjD+rx4usZ8XFyCdO1Sx+SNpmv88cUlTLd34LoytWc43aBjW4ula7xF6qYPKnhj6XYNVNfOVSwNcXSNQeueHa6u+fPcgHWPdeh2IiTFhQfr5hJjYG+LoluFAVo3HKyun1i4rjtYXTnD61pJIozsbVF0p9TFfZcPXBl+dYk39UeVVYlxeN0gzTMOEdPa+NbVjm4jmz3Onnw2c4W0oZuGEPLxcH6fxARuRddURemvnf1dsmBHrei+5GZF5aMtwa3oVqGGvQ4xdO3qvf9Y0xev632SpfaPeLrNowoPH+ba4LpSFhJb17qbOEcItK5f1pzRdW16KzFO9ujvFKtC17pJjNl7KLo2/BVha8PqJnp0bR7h2hiqm3QTPbq2bH9tQOqav09Fka5r/6oCqSvFmSZdW7R+6kXq+nygSne2T7rmxOrStQ9tHxuAujLXpjtve19D6g5toUt32PbSgNSdadMd749uIk6bbg4b7DdCzl2rTTdkuNGu7bB0r3GjXRtSV9/KUOFGuzbuasiwJzJl5929OpHxagKo63klfEh3cfLWn05g70COVOkO9ukembq75+0/+uGTH2R8aomMT9yRHYpuupdvixz4m07o5J+v3tLrNLqdVt/SuxP4QOPkfSe2bl752ArAqvyLt6Nb1g2lN7EFkCXZF2/2t6nrZsXC49e/qHXq2ZM95k8+y9NCuiEtfNe5weVl6mpd52rd4Hrv+sEN+1fBHZ+fuv9fyKfD+YORJPbo26jja+J6Fq220s7LaeXo9WP153Vj/wU7vGn+N99erwmMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHG9qEuw0VdZNRF9i8NwNvt9O2AJgAAAABJRU5ErkJggg=="></img>
      </li>
    </div>
    </header>
  );
}

export default Navigation;
