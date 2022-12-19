import React from 'react'

const Login = () => {
  return (
    <div className='auth'>
      <form className="auth__form">
              <div className="auth__form__input">
                <label>Username</label>
                <input type="text" />
              </div>
              <div className="auth__form__input">
                <label>Password</label>
                <input type="text" />
              </div>
              <div className="auth__form__btn">
                <button>Login</button>
              </div>
      </form>
      <div className="auth__image">
          <div className="auth__image__glass">
            AQUI VA UN TEXTO
          </div>
      </div>
    </div>
  )
}

export default Login