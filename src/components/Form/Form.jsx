import React from "react";
import style from "./Form.module.css";
import logo from "../../public/Wellcome.png"
import { useState, useEffect } from "react";
import validate from "./validation";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Form = () => {
    const [userData, setUserData] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate();
    const [access, setAccess] = useState(false);

    const login = (userData) => {
        const { email, password } = userData;
        const URL = 'http://localhost:3001/rickandmorty/login/';
        axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
            const { access } = data;
            setAccess(data);
            access && navigate('/home');
        });
    }

    useEffect(() => {
        !access && navigate('/');
    }, [access]);


    const [errors, setErrors] = useState({});

    console.log(errors);

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        setErrors(validate({ ...userData, [property]: value }))
        setUserData({ ...userData, [property]: value })
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    };

    return (
        <div className={style.container}>
            <div>
                <div>
                    <img className={style.img} src={logo} alt="" />
                </div>

                <form className={style.inputs} action="" onSubmit={handleSubmit}>
                    <label className={style.label}>EMAIL</label>
                    <input type="text"
                        name="email"
                        placeholder="example@mail.com"
                        value={userData.name}
                        onChange={handleChange}
                        className={style.input} />

                    {errors.e1 ? (
                        <p className={style.p_errors}>{errors.e1}</p>
                    ) : errors.e2 ? (
                        <p className={style.p_errors}>{errors.e2}</p>
                    ) : (
                        <p className={style.p_errors}>{errors.e3}</p>
                    )
                    }

                    <label className={style.label}>PASSWORD</label>
                    <input type="password"
                        name="password"
                        placeholder="Min 6 charaters"
                        value={userData.name}
                        onChange={handleChange}
                        className={style.input} />

                    {errors.p1 ? (
                        <p className={style.p_errors}>{errors.p1}</p>
                    ) : <p className={style.p_errors}>{errors.p2}</p>
                    }

                    <button className={style.button} type="submit">LOGIN</button>
                </form>
            </div>
        </div>
    )
}

export default Form;