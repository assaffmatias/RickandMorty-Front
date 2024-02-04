const validate = (data)=>{
    const errors = {}

    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) errors.e1 = 'Invalid email';
    if(!data.email) errors.e2 = 'Enter an email';
    if(!data.email.length > 35) errors.e3 = 'Must be less than 35 characters' ;
    if(!/\d/.test(data.password)) errors.p1 = 'Must Have minus 1 number';
    if(data.password.length < 6 || data.password.length > 10) errors.p2 = 'Must be between 6 and 10 characters'
    return errors;
}

export default validate;