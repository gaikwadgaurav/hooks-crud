import React, {useState, useEffect } from "react";
import  { Form, Button, Table }from 'react-bootstrap';
// import { UseInput } from '../custom-hooks/UseInput';
import Axios from 'axios';
export default function  ProfileForm (props)
{
   // const  { value, bind, reset } = useInput('')
    const getUrlByID = "https://jsonplaceholder.typicode.com/posts";

    //Setting state
    const [data, setData ] = useState({
        name:'',
        email:''
    })

    //Duplicate Object for storing response data
    const [ FormList, setList] = useState([])

    const displayList =  FormList.map((list, index)=>{
        return (
            <tr key={index}> 
                <td>{list.name}</td>
                <td>{list.email}</td>
                <td> <Button onClick = { () => Update(list)} className="btnUpdate" variant="success"  />Update </td>
                <td> <Button className="btnDelete" variant="danger"  />Delete </td>
            </tr>
        )
    });

    //UPDATE METHOD
    function Update(list){
        console.log(list);
        props.history.push(`/Update/?name=${list.name}&email=${list.email}`)
    }

    //GET METHOD
    useEffect( () =>{
        Axios.get(getUrlByID)
            //Axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res=>{
                console.log(res.data);
                //setList(res.data)
            }
    )
            .catch(err => console.error(err))

    },[]);


    //POST METHOD
    const handleSubmit = (e) =>{
        e.preventDefault();
        // alert(`Submitting Name ${data.name}`)
        // alert(`Submitting Name ${data.email}`)
        Axios.post(getUrlByID,data)
            .then( res =>{
                console.log(res.data)
                const myData = [...FormList, res.data]
                setList(myData)
            })
            .catch()
    }


    function handleChange(e){
        const newData = {...data}
        newData[e.target.name] = e.target.value
        setData(newData)
    }

    //View
    return(
        <div className='container'>
            <Form  onSubmit = {handleSubmit}>
                <Form.Group controlId="formGroupName">
                    <Form.Label> Name </Form.Label>
                    {/*<Form.Control name = "name"  onChange = {e => setData.name(e.target.value)} value = {data.name} type="text" placeholder="Enter name" />*/}
                    <Form.Control  name = "name" onChange = {e => handleChange(e)} value = {data.name} type ="text" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Email</Form.Label>
                    {/*<Form.Control type="email"  onChange = {e => setData.email(e.target.value)} value = {data.email} placeholder="Email" />*/}
                    <Form.Control name = "email" onChange = {e => handleChange(e)} value = {data.email} type ="text" placeholder="Enter Name" />
                </Form.Group>
                <Button className="button" variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            <Table striped bordered hover size="sm">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email </th>
                </tr>
                </thead>
                <tbody>{displayList}</tbody>
            </Table>
        </div>
)
}