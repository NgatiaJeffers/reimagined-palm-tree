import React, { Fragment, useState } from "react";

const DonateForm = () => {
  const [formData, setFormData] = useState({
    phoneNumber: "",
    amount: "",
    accountNumber: "",
    errors: {},
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      errors: {
        ...formData.errors,
        [name]: null,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //validate form input
    const errors = {};
    if (!formData.phoneNumber.match(/^(\+254|0)[1-9]\d{8}$/)) {
      errors.phoneNumber = "Please enter a valid phone number";
    }

    if (!formData.amount || Number(formData.amount) <= 0) {
      errors.amount = "Please enter a valid amount";
    }

    if (!formData?.accountNumber) {
      errors.accountNumber = "Please select an account number";
    }

    // If there are errors, set them back to their state
    if (Object.keys(errors).length > 0) {
      setFormData({ ...formData, errors });
    } else {
      // Submit form data
      console.log(formData);
    }
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <div className="input-group mb-3">
              <input
                type="text"
                className={`form-control ${
                  formData.errors.phoneNumber ? "is-invalid" : ""
                }`}
                id="phone"
                name="phoneNumber"
                placeholder="+254XXXXXXXXX *"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
              <div className="invalid-feedback">
                {formData?.errors?.phoneNumber}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="input-group mb-3">
              <input
                type="number"
                className={`form-control ${
                  formData.errors.amount ? "is-invalid" : ""
                }`}
                id="amount"
                name="amount"
                placeholder="Amount *"
                value={formData.amount}
                onChange={handleChange}
              />
              <div className="invalid-feedback">{formData?.errors?.amount}</div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="input-group">
              <select
                className={`form-select ${
                  formData.errors.accountNumber ? "is-invalid" : ""
                }`}
                aria-label="Default select example"
                id="accountNumber"
                name="accountNumber"
                value={formData.accountNumber}
                onChange={handleChange}
              >
                <option value="">Account Number (Project) *</option>
                <option value="1">Bike Ride</option>
                <option value="2">Crafts</option>
                <option value="3">Donation</option>
                <option value="4">KBCM</option>
                <option value="5">Movember</option>
                <option value="6">Patient Costs</option>
                <option value="7">Rafting</option>
                <option value="8">Therapies</option>
              </select>
              <div className="invalid-feedback">
                {formData?.errors?.accountNumber}
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <button type="submit" className="btn-donate">
              Donate
            </button>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default DonateForm;
