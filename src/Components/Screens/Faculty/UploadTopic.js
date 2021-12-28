import FacultyNavbar from "../../Headers/FacultyNavbar";
import { ThemeProvider } from "@material-ui/core/styles";
import Theme from "../../Theme";
import React from "react";
import TextField from "@mui/material/TextField";
import { Button, FormControl } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import bcrypt from "bcryptjs";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddCircleIcon from "@mui/icons-material/AddCircle";


const UploadTopic = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // console.log(errors)

    
}

  return (
    <div>
      <ThemeProvider theme={Theme}>
        <FacultyNavbar />
      </ThemeProvider>
      <ToastContainer />
      <div class="mt-5">
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: "100%",
              height: 128,
              marginTop: "2%",
            },
          }}
        >
          <Paper elevation={1}>
            <div class="mt-5 ms-5 ">
              <GroupAddIcon style={{ fontSize: 50, color: "#6c63ff" }} />
              <span class="ms-3 fw-bold fs-5 text-dark ">Add Topic</span>
              <p class="ms-5"></p>
            </div>
          </Paper>
        </Box>
      </div>
      <div class="container-fluid mt-3">
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: "100%",
              height: 450,
              marginTop: "2%",
            },
          }}
        >
          <Paper elevation={1}>
            <h4 class="ms-4 mt-3">Add Faculty</h4>
            <div class="mt-5 ms-5 me-5 ">
              <form onSubmit={handleSubmit(onSubmit)} class="row g-3">
                <div class="col-6">
                <label for="name" class="form-label">Subject Name</label>
                  <TextField
                    id="outlined-basic"
                    name="name"
                    label="Subject"
                    variant="outlined"
                    fullWidth
                    {...register("name", {
                      required: "Subject Name is required.",
                    })}
                    error={Boolean(errors.name)}
                    helperText={errors.name?.message}
                  />
                </div>
                <div class="col-6">
                <label for="name" class="form-label">Topic Name</label>
                  <TextField
                    id="outlined-basic"
                    name="name"
                    label="Topic"
                    variant="outlined"
                    fullWidth
                    {...register("name", {
                      required: "Topic Name is required.",
                    })}
                    error={Boolean(errors.name)}
                    helperText={errors.name?.message}
                  />
                </div>
                <div class="col-6">
                <label for="name" class="form-label">Select Branch</label>
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
                </div>
               
                <div class="mt-5 d-flex justify-content-center">
                  <Button variant="contained" type="submit">
                    <AddCircleIcon />
                    <span class="fw-bold ms-1 "> Add Topic </span>
                  </Button>
                </div>
              </form>
            </div>
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
            
          </Paper>
        </Box>
      </div>
    </div>
  );
};

export default UploadTopic;
