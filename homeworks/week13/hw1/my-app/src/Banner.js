import React from "react";
class Banner extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div className="container-fluid banner_box">
                <div className="banner__bg">
                    <div className="col-lg-6 col-md-6 col-6 px-4 py-4">
                        <div className="banner__title">
                            <h2>
                                Welcome to Medium, where words matter.
                            </h2>
                        </div>
                        <div className="banner__body">
                            <p>We’ll deliver the best stories and ideas on the topics you care about most straight to your homepage, app, or inbox.</p>
                        </div>
                        <div className="d-flex mt-5 banner__button col-lg-8 col-md-8 justify-content-around">
                            <button className="col-lg-5 col-md-5">Get started</button>
                            <button className="col-lg-5 col-md-5">Learn more</button>
                        </div>
                    </div>
                </div>
                <div className="mt-5 d-flex justify-content-between post__bottom__intro col-lg-8 col-md-12 py-3 flex-wrap">
                    <div className="col-lg-6 col-md-6 col-12">
                        <h5>Feature For Members</h5>
                    </div>
                    <div className="col-lg-2 col-md-12 col-12">
                        <p>More></p>
                    </div>
                </div>
            </div>

        )




    }
}

export default Banner;