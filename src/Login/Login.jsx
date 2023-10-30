import "./Login.sass";
import { Button, Input } from "antd";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "../store";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from '../assets/logo.svg'

function Login() {
  const isAuth = useAuth((state) => state.isAuth);
  const setAuthValue = useAuth((state) => state.setValue);
  const navigate = useNavigate();

  const [loginError, setLoginError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [loginValue, setLoginValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')

  const notify = () => {
    toast.dismiss();
    toast("Логин: user \nПароль: root", {
      icon: "🙄",
      duration: 3500,
    });
  };

  const sayError = (message) => {
    toast.dismiss()
    toast.error(message)
  }

  const authorization = {
    login: "user",
    password: "root",
  };

  const clearErrors = () => {
    setLoginError(false)
    setPasswordError(false)
  }

  const handleAuthorization = () => {
    clearErrors()
    if (loginValue === authorization.login) {
      if (passwordValue === authorization.password) {
        setAuthValue(true);
        navigate("/");
        localStorage.setItem('isAuth', true)
      } else {
        setPasswordError(true)
        sayError('Неверный пароль')
      }
    } else {
      setLoginError(true)
      sayError('Неверный логин') 
    }
  };

  useEffect(() => {
    if(localStorage.getItem('isAuth')) {
      setAuthValue(localStorage.getItem('isAuth'))
    }
  }, [])

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth]);

  return (
    <div>
      {!isAuth && (
        <div className="login__wrapper">
          <div className="mb-40">
            <img width={250} src={logo} alt="ЦДС Партнер" />
          </div>
          <div className="login__form mt-20">
            <div>
              <label>Логин</label>
              <Input
                className={`login__form__input ${loginError ? 'error' : ''}`}
                placeholder="Введите логин"
                size="large"
                onChange={(e) => setLoginValue(e.target.value)}
              />
            </div>
            <div className="mt-10">
              <label>Пароль</label>
              <Input.Password
                visibilityToggle={false}
                className={`login__form__input ${passwordError ? 'error' : ''}`}
                placeholder="Введите пароль"
                onChange={(e) => setPasswordValue(e.target.value)}
              />
            </div>

            <Button
              className="login__form__btn"
              size="large"
              type="primary"
              onClick={handleAuthorization}
            >
              Войти
            </Button>

            <div className="login__form__forget" onClick={notify}>
              Забыли пароль?
            </div>
          </div>
          <Toaster />
        </div>
      )}
    </div>
  );
}

export default Login;
