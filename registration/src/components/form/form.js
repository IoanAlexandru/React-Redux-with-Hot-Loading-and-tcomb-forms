import React from 'react';
import t from 'tcomb-form';

let Form = t.form.Form;

let Gender = t.enums({
  'Male': 'Male',
  'Female': 'Female'
});

let Person = t.struct({
  name: t.Str,
  surname: t.Str,
  email: t.Str,
  age: t.Num,
  gender: Gender
});

let Persons = t.list(Person);

let options = {
  fields: {
    name: {
      error: <p className="error">Enter your name</p>
    },
    surname: {
      error: <p className="error">Enter your surname</p>
    },
    email: {
      error: <p className="error">Enter your email</p>
    },   
    age: {
      error: <p className="error">Enter your age</p>
    },   
    gender: {
      error: <p className="error">Enter your gender</p>
    }      
  }
};

export default {
	Form, 
	Person,
	options
}
