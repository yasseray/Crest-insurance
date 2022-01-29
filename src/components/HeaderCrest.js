import React from "react"
import "./styles.css"

const  HeaderCrest = () => {
  return (
    <div className="header-_crest">
      
      <div className="header-black">
        <div className="flex-row">
          <p className="txt-agent">Agent Register</p>
          <p className="txt-advisor">Advisor Register</p>
          <p className="txt-login">Login</p>
        </div>
      </div>
      
      <div className="flex-row">
        <div className="logo flex-row-vcenter">
          <img
            src="https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cfed/34c8/8f529ef747630a3a5bed6e2d52f2272a"
            alt="pic"
            className="standard-collection-0"
          />
          <p className="txt-945 flex-vcenter-hcenter">rest</p>
        </div>
        <div className="flex-row-vcenter">
          <p className="txt-027">Home</p>
          <div className="group-59 flex-row">
            <p className="txt-462">Agent</p>
            {/* <img
              src="https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ff6/93c8/f92705c692a8a87a74a86eb2cf88eb88"
              alt="image not found"
              className="ic-sharp-arrow-drop-down"
            /> */}
          </div>
          <p className="txt-727">Premium Finance</p>
          <div className="flex-row">
            <p className="txt-832">Advisory</p>
            {/* <img
              src="https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ff6/93c8/f92705c692a8a87a74a86eb2cf88eb88"
              alt="not found"
              className="ic-sharp-arrow-drop-down1"
            /> */}
          </div>
        </div>
      </div>
    </div>
  )
}
export default HeaderCrest
