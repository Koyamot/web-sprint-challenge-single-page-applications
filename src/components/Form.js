import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";
import styled from "styled-components";
import "./form.css";


const PizzaForm = styled.form`
background-color: white;
padding: 24px;
width: 400px; 
margin: 0 auto;
display: flex;
flex-direction: column;
justify-content: center;
border-radius: 4px;
`;

const Form = () => {
    const [orderForm, setOrderForm] = useState({
        name: "",
        email: "",
        instructions: "",
        size: "",
        pepperoni: false,
        sausage: false,
        mushroom: false,
        olives: false,
        pineapple: false,
        peppers: false,
        artichokes: false,
        anchovies: false,
        cheese: false,
        seasoning: false,
        terms: true
    })

    const [buttonDisabled, setButtonDisabled] = useState(true);

 

    const [serverErrors, setServerErrors] = useState("");

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        instructions: "",
        size: "",
        pepperoni: "",
        sausage: "",
        mushroom: "",
        olives: "",
        pineapple: "",
        peppers: "",
        artichokes: "",
        anchovies: "",
        cheese: "",
        seasoning: "",
        terms: ""
    })

    const [order, setOrder] = useState({});

    const validateChange = (e) => {
        yup
        .reach(orderSchema, e.target.name)
        .validate(e.target.value)
        .then((valid) => {
            setErrors({
            ...errors,
            [e.target.errors]: ""
            });
        })
        .catch((err) => {
            console.log(err)

        setErrors({
         ...errors,
        [e.target.name]: err.errors[0]  
        });
    });

    };

    const submit = (e) => {
        e.preventDefault();
        console.log("form submitted!");
        axios
        .post("https://reqres.in/api/users", orderForm)
        .then((response) => {
            console.log("success!", response.data);
            setOrder(response.data);
            setServerErrors(null);
            setOrderForm({
                name: "",
                email: "",
                instructions: "",
                size: "",
                pepperoni: false,
                sausage: false,
                mushroom: false,
                olives: false,
                pineapple: false,
                peppers: false,
                artichokes: false,
                anchovies: false,
                cheese: false,
                seasoning: false,
                terms: true
            });
        })
        .catch((err) => {
            setServerErrors("error!");
        });
    };
    const handleChange = (e) => {
        e.persist();
        console.log("input changed!", e.target.value);
        const newOrder = {
            ...orderForm,
            [e.target.name]: 
                e.target.type === "checkbox" ? e.target.checked : e.target.value
        };

        validateChange(e);
        setOrderForm(newOrder);
    }

    const orderSchema = yup.object().shape({
        name: yup.string().min(2, "Please enter at least 2 characters").required("Please enter your name"),
        email: yup
        .string()
        .email("Must be a valid email")
        .required("Must include an email"),
        instructions: yup.string(),
        size: yup.string().oneOf(["Small", "Medium", "Large"]).required("Select a size"),
        pepperoni: yup.boolean().oneOf([true, false]),
        sausage: yup.boolean().oneOf([true, false]),
        mushroom: yup.boolean().oneOf([true, false]),
        olives: yup.boolean().oneOf([true, false]),
        pineapple: yup.boolean().oneOf([true, false]),
        peppers: yup.boolean().oneOf([true, false]),
        artichokes: yup.boolean().oneOf([true, false]),
        anchovies: yup.boolean().oneOf([true, false]),
        cheese: yup.boolean().oneOf([true, false]),
        seasoning: yup.boolean().oneOf([true, false]),
        terms: yup.boolean().oneOf([true], "Please agree to Terms & Conditions")

    });



    useEffect(() => {
        orderSchema.isValid(orderForm).then((isValid) => {
          setButtonDisabled(!isValid);
        });
      }, [orderForm, orderSchema]);

    return (
        <div className="formApp">
            <h1>Create your "Fancy Shmancy" Pizza!!</h1>
            <p>Don't see one of your favorite toppings? Please ask for it in the "Special Instructions" and we'll do our best to make it happen!</p>
            <PizzaForm onSubmit={submit}>
            {serverErrors ? <p className="error">{serverErrors}</p> : null}
                <label htmlFor="name">
                    Name: 
                    <input type="text" id="name" name="name" data-cy="name" value={orderForm.name} onChange={handleChange}/>
                    {errors.name.length > 0 ? <p className="error">{errors.name}</p> : null}
                </label>
                <label>
                    Email:
                    <input
                    id="email"
                    type="text"
                    name="email"
                    value={orderForm.email}
                    onChange={handleChange}
                    />
                    {errors.email.length > 0 ? (
                    <p className="error">{errors.email}</p>
                    ) : null}
                </label>
                <label htmlFor="size">
                    Size:  
                <select data-cy="size" id="size" name="size" value={orderForm.size} onChange={handleChange}>
                    <option>--Please Select A Size--</option>
                    <option name="small">Small</option>
                    <option name="medium">Medium</option>
                    <option name="large">Large</option>
                </select>
                </label>
                <div className="all-toppings">
                <div className="toppings toppings1">
                <label htmlFor="pepperoni">                     
                    <input data-cy="pepperoni" type="checkbox" id="pepperoni" name="pepperoni" checked={orderForm.pepperoni} onChange={handleChange}/>
                    Pepperoni
                </label>
                <label htmlFor="sausage">                    
                    <input data-cy="sausage" type="checkbox" id="sausage" name="sausage" checked={orderForm.sausage} onChange={handleChange}/>
                    Sausage 
                </label>
                <label htmlFor="mushroom">
                    <input data-cy="mushroom" type="checkbox" id="mushroom" name="mushroom" checked={orderForm.mushroom} onChange={handleChange}/>
                    Mushrooms
                </label>
                <label htmlFor="olives">
                    <input data-cy="olives" type="checkbox" id="olives" name="olives" checked={orderForm.olives} onChange={handleChange}/>
                    Olives
                </label>
                <label htmlFor="pineapple">
                    <input data-cy="pineapple" type="checkbox" id="pineapple" name="pineapple" checked={orderForm.pineapple} onChange={handleChange}/>
                    Pineapple
                </label>
                </div>
                <div className="toppings toppings2">
                <label htmlFor="peppers">
                    <input data-cy="peppers" type="checkbox" id="peppers" name="peppers" checked={orderForm.peppers} onChange={handleChange}/>
                    Green Peppers
                </label>
                <label htmlFor="artichokes">
                    <input data-cy="artichokes" type="checkbox" id="artichokes" name="artichokes" checked={orderForm.peppers} onChange={handleChange}/>
                    Artichokes
                </label>
                <label htmlFor="anchovies">
                    <input data-cy="anchovies" type="checkbox" id="anchovies" name="anchovies" checked={orderForm.anchovies} onChange={handleChange}/>
                    Anchovies
                </label>
                <label htmlFor="cheese">
                    <input data-cy="cheese" type="checkbox" id="cheese" name="cheese" checked={orderForm.olives} onChange={handleChange}/>
                    Extra Cheese
                </label>
                <label htmlFor="seasoning">
                    <input data-cy="seasoning" type="checkbox" id="seasoning" name="seasoning" checked={orderForm.seasoning} onChange={handleChange}/>
                    Fancy Shmancy Seasoning
                </label>
                </div>
                </div>
                <label htmlFor="instructions">
                    Special Instructions: 
                    <input type="textarea" id="instructions" name="instructions" data-cy="instructions" value={orderForm.instructions} onChange={handleChange}/>
                </label>
                <label htmlFor="terms" className="terms">
                    <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    checked={orderForm.terms}
                    onChange={handleChange}
                    />
                    Terms & Conditions
                    {errors.terms.length > 0 ? (
                    <p className="error">{errors.terms}</p>
                    ) : null}
                </label>
                <button data-cy="submit" disabled={buttonDisabled} type="submit">Add to Order</button>
                <pre>{JSON.stringify(order, null, 2)}</pre>
            </PizzaForm>
        </div>
    )
};

export default Form;