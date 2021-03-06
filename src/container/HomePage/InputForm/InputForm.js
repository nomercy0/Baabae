import React from "react";
import { Formik, ErrorMessage, Field, Form } from "formik";
import { Col, Row, Button, label, FormGroup } from "react-bootstrap";
import axios from 'axios'
import * as Yup from "yup";

const schema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Email is invalid").required("Email is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  agreement: Yup.bool().required("Accept Terms & Conditions is required'"),
  newsletter: Yup.bool().required("Newsletter is required'"),
  phoneNumber: Yup.string()
    .matches(/^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/, {
      message: "Invalid Phone Number",
    })
    .required("PhoneNumber is required"),
  adhaarNumber: Yup.string()
    .matches(/^\D?(\d{16})$/, {
      message: "Invalid Adhaar  Number",
    })
    .required("AdhaarNumber is required"),
  address: Yup.string().required("Adress is required"),
});

const InputForm = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",

        city: "",
        state: "",
        phoneNumber: "",
        adhaarNumber: "",
        address: "",
        agreement: true,
        newsletter: true,
      }}
      validationSchema={schema}
      onSubmit={(fields, { setSubmitting }) => {

        // axios.put(`https://sheets.googleapis.com/v4/spreadsheets/1tMiNp9UZLKgU4mHt5TGvccjZ3Q6SRtJeEs4IO1rCboI/values/Sheet1!A1:D5?valueInputOption=USER_ENTERED`,{
        //   "range": "Sheet1!A1:D5",
        //   "majorDimension": "ROWS",
        //   "values": [
        //     ["Item", "Cost", "Stocked", "Ship Date"],
        //     ["Wheel", "$20.50", "4", "3/1/2016"],
        //     ["Door", "$15", "2", "3/15/2016"],
        //     ["Engine", "$100", "1", "3/20/2016"],
        //     ["Totals", "=SUM(B2:B4)", "=SUM(C2:C4)", "=MAX(D2:D4)"]
        //   ],
        // })
      
      }}
      render={({ errors, status, touched,handleSubmit,isSubmitting }) => (
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Row className="justify-content-left">
              <Col md="6" xs="6">
                <div className="input-wrapper">
                  <label>First Name</label>
                  <Field
                    placeholder="Enter First name"
                    type="text"
                    name="firstName"
                    className={
                      "form-control" +
                      (errors.firstName && touched.firstName
                        ? " is-invalid"
                        : "")
                    }
                  />

                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
              </Col>
              <Col md="6" xs="6">
                <div className="input-wrapper">
                  <label>Last Name</label>
                  <Field
                    placeholder="Enter Last name"
                    type="text"
                    name="lastName"
                    className={
                      "form-control" +
                      (errors.lastName && touched.lastName ? " is-invalid" : "")
                    }
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
              </Col>
              <Col md="6" xs="6">
                <div className="input-wrapper">
                  <label>Email Address</label>
                  <Field
                    placeholder="Enter Email address"
                    type="email"
                    name="email"
                    className={
                      "form-control" +
                      (errors.email && touched.email ? " is-invalid" : "")
                    }
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
              </Col>

              <Col md="6" xs="6">
                <div className="input-wrapper">
                  <div>State</div>

                  <Field as="select" name="state" style={{ width: "100%" }}>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value=" Bihar">Bihar</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Goa">Goa</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>
                  </Field>
                  <ErrorMessage
                    name="state"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
              </Col>
              <Col md="6" xs="6">
                <div className="input-wrapper">
                  <label>City</label>
                  <Field
                    placeholder="Enter City Name"
                    type="text"
                    name="city"
                    className={
                      "form-control" +
                      (errors.city && touched.city ? " is-invalid" : "")
                    }
                  />
                  <ErrorMessage
                    name="city"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
              </Col>
              <Col md="6" xs="6">
                <div className="input-wrapper">
                  <label>Phone Number</label>
                  <Field
                    placeholder="Enter Phone Number"
                    type="text"
                    name="phoneNumber"
                    className={
                      "form-control" +
                      (errors.phoneNumber && touched.phoneNumber
                        ? " is-invalid"
                        : "")
                    }
                  />
                  <ErrorMessage
                    name="phoneNumber"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
              </Col>
              <Col md="6" xs="6">
                <div className="input-wrapper">
                  <label>Adhaar Number</label>
                  <Field
                    placeholder="Enter Adhaar Number"
                    type="text"
                    name="adhaarNumber"
                    className={
                      "form-control" +
                      (errors.adhaarNumber && touched.adhaarNumber
                        ? " is-invalid"
                        : "")
                    }
                  />
                  <ErrorMessage
                    name="adhaarNumber"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
              </Col>
              <Col md="6" xs="6">
                <div className="input-wrapper">
                  <label>Address</label>
                  <Field
                    placeholder="Enter Address"
                    type="text"
                    name="address"
                    className={
                      "form-control" +
                      (errors.address && touched.address ? " is-invalid" : "")
                    }
                  />
                  <ErrorMessage
                    name="address"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
              </Col>
              <Col md="12">
                <div role="group" aria-labelledby="checkbox-group">
                  <label>
                    <Field type="checkbox" name="agreement" />
                    &nbsp; Do you accept our term and conditions?
                  </label>
                  <label>
                    <Field type="checkbox" name="newsletter" />
                    &nbsp; Do you want to receive newsletters and regular
                    notifications on your email and phone number?
                  </label>
                </div>
              </Col>
            </Row>
            
          </FormGroup>
          <Button
              type="submit"
              style={{ background: "#ed3237", width: "100%", fontsize: "13px" }}
              disabled={isSubmitting}
            >
              Register as Baabae Seller
            </Button>
        </Form>
      )}
    />
  );
};

export default InputForm;
