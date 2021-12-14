import React, {useRef } from 'react';
import undraw_studentsignup from '../Assets/undraw_studentsignup.svg';
import TextField from '@mui/material/TextField';
import {Button,FormControl} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useForm } from "react-hook-form";


const StudentSignup = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const password = useRef({});
    password.current = watch("password", "");

    const onSubmit = (data) => console.log(data);
    // console.log(errors)


    return ( 

        <div class="container-fluid">
            <div class="row">
                <div class="col-6 mt-5" >
                    <img src={undraw_studentsignup} height={600} alt='welcome'/>
                </div>
                <div class="col-6 s" style={{position: 'absolute', marginLeft: '45%'}}>
                    <div class="mt-5 " >   
                        <div className="App__form" >

                            <h1 class="fw-bolder mt-5 mb-4" style={{ color:'#6C63FF'}}>
                                Student Signup
                            </h1>

                            <form onSubmit={handleSubmit(onSubmit)}>

                                <TextField 
                                id="outlined-basic" 
                                name="name" 
                                label="Student Name" 
                                variant="outlined" 
                                fullWidth 
                                {...register("name", { required: "Student Name is required.",pattern: {
                                    value: /^[A-Za-z]+$/i,
                                    message: "This is not a valid email",
                                    } })}
                                error={Boolean(errors.name)}
                                helperText={errors.name?.message}
                                />
                                <FormControl fullWidth  style={{ marginBottom: '27px'}}>
                                    <InputLabel id="simple-select-label">Branch</InputLabel>
                                    <Select
                                    labelId="simple-select-label"
                                    id="simple-select"
                                    name="branch"
                                    label="Age"
                                    {...register("branch", { required: true, })}
                                    error={Boolean(errors.branch)}
                                    >
                                
                                    <MenuItem value={"CSE"}>CSE</MenuItem>
                                    <MenuItem value={"IT"}>IT</MenuItem>
                                    <MenuItem value={"ECE"}>ECE</MenuItem>
                                    <MenuItem value={"EEE"}>EEE</MenuItem>

                                    </Select>
                                    {errors?.branch?.type === "required" && <p class="ms-3 mt-1" style={{ color:'#dc3545',fontSize: '13px'}}>Branch is required.</p>}
                                </FormControl> 
                                
                                <TextField 
                                id="outlined-basic"
                                label="E-mail"
                                variant="outlined"
                                fullWidth
                                name="email"
                                {...register("email", { required: "E-mail Address is required.",pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: "This is not a valid email",
                                    }, })}
                                error={Boolean(errors.email)}
                                helperText={errors.email?.message}
                                />

                                <TextField
                                id="outlined-basic"
                                label="Password"
                                variant="outlined"
                                fullWidth
                                name="password"
                                {...register("password", { required: "Password is required.",
                                minLength: {
                                    value: 4,
                                    message: "Password must be more than 4 characters",
                                },
                                maxLength: {
                                    value: 10,
                                    message: "Password cannot exceed more than 10 characters",
                                },})}
                                error={Boolean(errors.password)}
                                helperText={errors.password?.message}
                                />

                                <TextField
                                id="outlined-basic"
                                label="Confirm Password"
                                variant="outlined"
                                fullWidth
                                name="cnfrmpassword"
                                {...register("cnfrmpassword", { required: "Confirm Password is required.",
                                validate: value =>
                                value === password.current || "The passwords do not match"})}
                                error={Boolean(errors.cnfrmpassword)}
                                helperText={errors.cnfrmpassword?.message}
                                />
                    
                                <Button variant="contained" color="primary" type="submit" className="btns">
                                    Sign Up
                                </Button>        
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

     );
}
 
export default StudentSignup;