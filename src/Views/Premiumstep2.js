import React from 'react';
import "../Views/premium.css"
import info from "../images/info.png"
import { Alert, Button, FormGroup, Input, Label } from 'reactstrap';

const Premium = () => {
    return (
        <div className='mainDiv'>
            <div className="financeDiv">
                <div className="financediv1">
                    <div className='subfinacediv1'>
                    </div>
                    <div className='subfinacediv2' >
                        <h3><b>Apply for Premium Finance </b></h3>
                    </div >
                    <div className='subfinacediv3' >
                        <img src={info} />
                    </div>
                </div>
                <div className="financediv2 px-3" >
                    <h5 className='dashhead pr-2'><b>DashBoard</b></h5>
                    <h5 className='font-weight-bold' ><b> >></b></h5>
                    <h5><b> Premium Finance </b></h5> </div>
                <div className='financediv33' >
                    <div className='mandatory pr-5' >
                        <h5> <sup className='text-danger' > * </sup>Mandatory Fields</h5>
                    </div>
                    <div className='financediv31' >
                        <nav >
                            <a href className="done" >
                                <span>Step One <br />
                                    Enter Your Details </span> </a> <a href className="current" >
                                <span>
                                    Step Two <br />
                                    Upload Documents </span> </a> <a href>
                                <span>
                                    Submit <br />
                                    Submit your application </span> </a> <a style={
                                        { border: "none", backgroundColor: "none" }} >

                            </a>
                        </nav>
                    </div>
                    <div className='w-100 d-flex justify-content-center align-items-center mt-2 mb-3'>
                        <div className='financediv4'>
                            <h5 className='Paragraph'> Placeholder for Success / Error message </h5>
                        </div>
                    </div>
                    <div className='input-boxesp2'>
                        <div className='input-boxes-1'>
                            <div className='input-boxes-111' >
                                {/* <FormGroup>
                                    <Label className='h5'>
                                    Company Pan Card<sup className='text-danger'>*</sup>
                                    </Label>
                                    <Input type='file' className='inputfinance1' id='login-email'  />
                                    <Label className='h6'>File Type : JPG, PDF</Label>
                                </FormGroup> */}
                                <div className="custominputsize">
                                    <Label className='h5'>Company Pan Card<sup className='text-danger'>*</sup></Label>
                                    <div className="custom-file">
                                        <input
                                            type="file"
                                            className="custom-file-input"
                                            aria-describedby="inputGroupFileAddon01"
                                        />
                                        <label className="custom-file-label" htmlFor="inputGroupFile01" />
                                        <label className=''>File Type : JPG, PDF</label>
                                    </div>
                                </div>

                            </div>
                            <div className='input-boxes-112' >
                                <div className="custominputsize">
                                    <Label className='h5'>6 Months Bank statement<sup className='text-danger'>*</sup></Label>
                                    <div className="custom-file">
                                        <input
                                            type="file"
                                            className="custom-file-input"
                                            aria-describedby="inputGroupFileAddon01"
                                        />
                                        <label className="custom-file-label" htmlFor="inputGroupFile01" />
                                        <label className=''>File Type : XLS,CSV, PDF</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='input-boxes-2' >
                            <div className='input-boxes-211' >
                                <div className="custominputsize">
                                    <Label className='h5'>Directors Pan Card<sup className='text-danger'>*</sup></Label>
                                    <div className="custom-file">
                                        <input
                                            type="file"
                                            className="custom-file-input"
                                            aria-describedby="inputGroupFileAddon01"
                                        />
                                        <label className="custom-file-label" htmlFor="inputGroupFile01" />
                                        <label className=''>File Type : JPG, PDF</label>
                                    </div>
                                </div>
                            </div>
                            <div className='input-boxes-212' >
                            <div className="custominputsize">
                                <Label className='h5'>Name of Directors in Company<sup className='text-danger'>*</sup></Label>
                                    <div className="custom-file">
                                        <input
                                            type="file"
                                            className="custom-file-input"
                                            aria-describedby="inputGroupFileAddon01"
                                        />
                                        <label className="custom-file-label" htmlFor="inputGroupFile01" />
                                <label className=''>File Type : JPG, PDF</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mb-50 mx-50 rounded p-3 bgalert mt-3'>
                        <div className='alert-body alertbodyflexbutton'>
                            <Button className='mr-3 px-4 bgback' color='secondary'>Back</Button>
                            <Button className='marginRIGHT px-4 text-white' color='primary'>Next</Button>
                        </div>
                    </div>
                    <div className='notetext px-5 mt-4'>
                        <h6><b>Instructions for Use - </b></h6>
                        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pellentesque enim elementum pharetra in. Congue bibendum diam sed elementum aliquet faucibus quis augue at.</h6>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Premium;

