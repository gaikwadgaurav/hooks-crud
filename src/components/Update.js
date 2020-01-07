import React, { useState, useEffect } from 'react'
import Axios from "axios";
import { Button, Form } from "react-bootstrap";
export default function Update(props) {
    const getUrlByID = "https://jsonplaceholder.typicode.com/posts";

    //Setting state
    const [data, setData] = useState({
        name: '',
        email: ''
    });


    //PUT METHOD
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = props.match.params.name;
        alert(`Submitting Name ${data.name}`);
        alert(`Submitting Name ${data.email}`);
        Axios.put(getUrlByID + name, data)
            .then(res => {
                console.log(res.data);
                props.history.push("/");
                // const myData = [...FormList, res.data]
                //  setList(myData)
                props.history.params("/")
            })
            .catch()
    };

    //GET METHOD
    useEffect(() => {
        console.log(props);

        const name = props.match.params.name;
        console.log('[name]', Location);
        Axios.get(getUrlByID + name)
            // Axios.get(`https://jsonplaceholder.typicode.com/posts/${name}`)
            .then((res) => {
                console.log(res.data);
                setData(res.data);
            })
            .catch(err => console.error(err));

    }, []);


    function handleChange(e) {
        const newData = { ...data };
        newData[e.target.name] = e.target.value;
        setData(newData)
    }
    console.log('data', data);
    return (
        <div className='container'>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formGroupName">
                    <Form.Label> Name </Form.Label>
                    {/*<Form.Control name = "name"  onChange = {e => setData.name(e.target.value)} value = {data.name} type="text" placeholder="Enter name" />*/}
                    <Form.Control name="name" onChange={e => handleChange(e)} value={data.name} type="text" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Email</Form.Label>
                    {/*<Form.Control type="email"  onChange = {e => setData.email(e.target.value)} value = {data.email} placeholder="Email" />*/}
                    <Form.Control name="email" onChange={e => handleChange(e)} value={data.email} type="text" placeholder="Enter Name" />
                </Form.Group>
                <Button className="button" variant="primary" type="submit">
                    Submit
            </Button>
            </Form>
        </div>
    )
}