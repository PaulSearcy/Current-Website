import * as React from "react";

let backgroundImage = {backgroundImage: 'url('+'./src/images/contact-bg.jpg'+')',opacity: .8, marginTop: -20};

export const Contact = () => {
return <div>
        <div className="intro-header page-header" style={backgroundImage}>
            <h1>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                        <div className="site-heading">
                            <h1 style={{color: "#7AA3B8" }}>
                                Contact Me
                            </h1>
                            <hr className="small" />
                            <span className="subheading">Have questions? I have answers (maybe).</span>
                        </div>
                    </div>
                </div>
            </div>
            </h1>
        </div>

        <div className="container" style={{textAlign: "center"}}>
            <p> For now psearcy2@gmail.com . </p>
        </div>

        <hr />

      </div>
}