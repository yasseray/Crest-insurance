import React from 'react';
import "../Views/premium.css"
import info from "../images/info.png"
import { Alert, Button, FormGroup, Input, Label } from 'reactstrap';

const premiumstep3 = () => {
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
                <div className='financediv43' >
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
                    <div className='input-boxesp3'>
                        <div className='px-5 mb-4'><h5><b>Please Review Information Before Submit</b></h5></div>
                        <div className='l1info'>
                            <div className='l1info1'>
                                <div className='info1'><h5><b>Name Of Company : Name of Company goes here</b></h5></div>
                                <div className='info1'><h5><b>GST :  09AXXCH7409R1ZZ</b></h5></div>
                                <div className='info1'><h5><b>Company Pancard :<span className='text-info'>company_pancard.jpg</span></b></h5></div>
                                <div className='info1'><h5><b>Bank Statement:<span className='text-info'>HDFC071220012.CSV</span></b></h5></div>
                            </div>
                            <div className='l1info2'>
                                <div className='info1'><h5><b>Address : 80, B, Shreyas Indl Estate, Off Link Rd, Nr Monginis, Andheri(w) Mumbai, Maharashtra	400053</b></h5></div>
                                <div className='info1'><h5><b>CIN : L21091XX2019OPC141451</b></h5></div>
                                <div className='info1'><h5><b>Directos Pancard :<span className='text-info'>directors_pamcard.jpg </span></b></h5></div>
                                <div className='info1'><h5><b>Name of Directors :<span className='text-info'>directors_names.jpg</span></b></h5></div>
                            </div>
                        </div>
                        <div className='w-100 d-flex margininfo align-items-center text-secondary mt-3'><h5><b>Click and view uploaded Document , Please click “Back” and edit information or document befor Final Submitting</b></h5></div>
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

export default premiumstep3;

