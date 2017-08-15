import * as React from "react";

let backgroundImage = { backgroundImage: 'url(' + './src/images/noding.jpg' + ')', opacity: .8, marginTop: -20 };

export const Main = () => {
    return <div>
        <div className="intro-header page-header" style={backgroundImage}>
            <h1>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                        <div className="site-heading">
                            <h1 style={{color: 'rgb(122, 163, 184)'}}>
                                <img src="./src/images/nodeJSDark.png" className="img-circle" />
                                <img src="./src/images/128TypeScript.png" className="img-circle" />
                                <img src="./src/images/128React.png" className="img-circle" />
                            </h1>
                            <hr className="small" />
                            <span className="subheading">Node + TypeScript + React</span>
                        </div>
                    </div>
                </div>
            </div>
            </h1>
        </div>

        <div className="container" style={{ textAlign: "center" }}>
            <h3>Basic Example </h3>
            <p> I've put together this website to demonstrate the above technologies. </p>
        </div>
        <hr />

    </div>
}
