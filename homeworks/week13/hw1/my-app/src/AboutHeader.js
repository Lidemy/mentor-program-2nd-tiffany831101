import React from "react";
class AboutHeader extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="col-lg-12 col-md-12 col-12 about__header">
                    <div className="col-lg-6 col-md-6 col-6">
                        <p className="about__header__title">Welcome to Medium, where words matter.</p>
                    </div>
                </div>
                <div className="about__header__img col-lg-12 col-md-12 col-12">
                    <img src="https://images.pexels.com/photos/9816/pexels-photo-9816.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350" alt="" />
                </div>
                <div className="about__header__info col-lg-12 col-md-12 col-12">
                    <div className="about__header__info d-flex justify-content-center col-lg-8 col-md-8 col-8 mx-auto">
                        <p className="text-center">Ideas and perspectives you won’t find anywhere else.</p>
                    </div>
                    <div className="about__header__info d-flex justify-content-center col-lg-10 col-md-10 col-10 mx-auto">
                        <p className="text-center">Medium taps into the brains of the world’s most insightful writers, thinkers, and storytellers to bring you the smartest takes on topics that matter. So whatever your interest, you can always find fresh thinking and unique perspectives.</p>
                    </div>

                </div>
            </div>
        )
    }


}

export default AboutHeader;