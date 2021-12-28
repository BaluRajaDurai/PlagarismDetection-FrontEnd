import React, { useState } from "react";
import AdminNavbar from "../../Headers/AdminNavbar";
import { ThemeProvider } from "@material-ui/core/styles";
import Theme from "../../Theme";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import ListAltIcon from "@mui/icons-material/ListAlt";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
import usePagination from "./Pagination";
import { default as data } from "./Mock_Data.json";

const ViewReport = () => {
  let [page, setPage] = useState(1);
  const PER_PAGE = 4;

  const count = Math.ceil(data.length / PER_PAGE);
  const _DATA = usePagination(data, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  return (
    <div>
      <ThemeProvider theme={Theme}>
        <AdminNavbar />
      </ThemeProvider>
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
              <ListAltIcon style={{ fontSize: 50, color: "#6c63ff" }} />
              <span class="ms-3 fw-bold fs-5 text-dark ">
                Available Reports
              </span>
              <p class="ms-5"></p>
            </div>
          </Paper>
        </Box>
      </div>
      <div class="container-fluid">
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: "100%",
              height: 490,
              marginTop: "2%",
            },
          }}
        >
          <Paper elevation={1}>
            <div class="row">
              {_DATA.currentData().map((v) => {
                return (
                  <div class="col-6 mt-4">
                    <div class="card">
                      <div class="card-header">
                        <h5 class="text-start ">
                          Report from faculty1 {v.sku}{" "}
                        </h5>
                        {/* < DeleteForeverIcon  style={{ marginLeft: "95%", color: "red",fontSize: 30 }}/> */}
                      </div>
                      <div class="card-body">
                        <p class="card-text text-start mt-3 ">
                          All students completed test with 30% plagiarism.{" "}
                          {v.sku}
                        </p>
                        <Button
                          variant="contained"
                          size="small"
                          style={{ marginTop: "4%", fontWeight: 600 }}
                          endIcon={<EditIcon />}
                          data-bs-toggle="modal"
                          data-bs-target="#addreview"
                        >
                          Add Review
                        </Button>
                        <Button
                          variant="contained"
                          color="error"
                          size="small"
                          style={{
                            marginLeft: "5%",
                            marginTop: "4%",
                            fontWeight: 600,
                          }}
                          startIcon={<DeleteForeverIcon />}
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div class="mt-2 mb-2 d-flex justify-content-end">
              <Pagination
                showFirstButton
                showLastButton
                onChange={handleChange}
                count={count}
                page={page}
              />
            </div>
          </Paper>
        </Box>
      </div>
      <div class="container mt-3"></div>
      <div
        class="modal fade"
        id="addreview"
        tabindex="-1"
        aria-labelledby="addreviewLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Write a review
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3 text-start">
                  <label for="recipient-name" class="col-form-label">
                    Recipient:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="recipient-name"
                    value="@Faculty"
                  />
                </div>
                <div class="mb-3 text-start">
                  <label for="message-text" class="col-form-label ">
                    Message:
                  </label>
                  <textarea class="form-control" id="message-text"></textarea>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Send message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewReport;
