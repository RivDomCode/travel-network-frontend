import {SiYourtraveldottv } from "react-icons/si";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className='auth'>
      <div className="auth__form">

              <form >
              <h3><SiYourtraveldottv/>  Sign In</h3>
                  <div className="auth__form__input">
                    <label>Username</label>
                    <input type="text" />
                  </div>
                  <div className="auth__form__input">
                    <label>Password</label>
                    <input type="password" />
                  </div>
                  <div className="auth__form__btn">
                    <button>Login</button>
                  </div>
                  <hr />
                  <Link to="/register">
                    Not registered yet? Go to register page
                  </Link>
              </form>

      </div>
      <div className="auth__image">
          <div className="auth__image__glass">
            <p><SiYourtraveldottv/> <br /> Travel Social Nerwork for Lonely <span>People</span></p>
            <p>The place to connect with others to discover the world</p>
          </div>
      </div>
    </div>
  )
}

export default Login