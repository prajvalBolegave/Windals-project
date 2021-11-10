import React from 'react';
import { useEffect } from 'react';
import "./Adminhome.css";
import { useHistory } from 'react-router';
import { Button } from 'react-bootstrap';

export default function Adminhome() {
    const history = useHistory();
    const checkAuthentication = async () => {
        try {
            const response = await fetch('http://localhost:5000/adminhome', {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            const data = await response.json();
            console.log(data);
            if (!response.status === 200) {
                throw new Error(response.error);
            }
        } catch (error) {
            console.log(error);
            history.push('/adminlogin');
        }

    }


    // useEffect(() => {
    //     checkAuthentication();
    // }, []);


    return (
        <div className="adminHome">
            <h1>This will be ADMIN PAGE </h1>
            <Button variant="primary">Primary</Button>
        </div>
    )
}
