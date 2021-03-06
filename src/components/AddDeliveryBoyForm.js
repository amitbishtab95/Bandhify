// import { FilePicker } from 'react-file-picker'
import React, { useState, useEffect } from 'react'
import './SuperUser.css'

//for Api
import { APICall } from '../Utils/CommonFunctions';
import API from '../Utils/ApiConstant';

function AddDeliveryBoyForm() {
    return (
        <>
            <div className="main-outer-div">
                <div className="myorders-outer-div">
                    <div className=" deliveryboy-inner-div-form">
                        <h1>Add Delivery Boy</h1>
                        <form className="addDeliveryboy-form">
                            <span className="customSpan"></span>
                            <div class="form-group">
                                <label for="deliverboyName">Name</label>
                                <input type="text" class="form-control" id="deliveryboyName" placeholder="Name" />
                            </div>
                            <div class="form-group">
                                <label for="deliveryboyPhone">Phone No</label>
                                <input type="text" class="form-control" id="deliveryboyPhone" placeholder="Phone" />
                            </div>
                            <div class="form-group">
                                <label for="deliveryboyAddress">Address</label>
                                <textarea class="form-control" id="deliveryboyAddress" rows="3"></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary submitBtn">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddDeliveryBoyForm
