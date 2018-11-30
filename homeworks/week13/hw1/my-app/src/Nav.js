import React from "react";

class Nav extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <div className="row d-flex justify-content-between mt-2 p-3 mx-0">
                <div className="left__side">
                    <h3 className="nav__title">Medium</h3>
                </div>
                <div className="right__side d-flex justify-content-around col-md-5 align-items-end">
                    <div className="mt-1 h-75">
                        <i className="fas fa-search"></i>
                    </div>
                    <div className="h-75">
                        <p className="mx-0 d-flex">Become a member</p>
                    </div>
                    <div className="h-75">
                        <p className="text__green">Sign in</p>
                    </div>
                    <div>
                        <button className="mt-2 text__green h-75">Get started</button>
                    </div>
                </div>

            </div>



        )
    }

}

export default Nav