import React from "react";

class PUBLIC extends React.Component {

    render() {
        const boxArr = [1, 2, 3, 4, 5, 6];
        return (
            <>
                <div className="px-0 d-flex col-lg-8 col-md-8 col-12 white flex-wrap about__banner_left justify-content-center">
                    {boxArr.map((num) => {
                        return (
                            <div className="col-lg-5 col-md-5 col-12 about__banner_box mx-3 mt-4">
                                <img className="mt-3" src="https://images.pexels.com/photos/260907/pexels-photo-260907.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350" alt="" />
                                <p className="mt-2">this is about public</p>
                                <div className="col-lg-12 col-md-12 px-0 d-flex about__banner_box__bottom">
                                    <div className="avator"></div>
                                    <div className="mx-2">
                                        <p className="my-0">Tiffany</p>
                                        <p className="my-0">7 min read</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="col-lg-4 col-md-4 col-4 float-right about__banner_right mt-5">
                    <h5 className="col-lg-10 col-md-10 col-10 text-center mx-auto">MORE WRITING ON PUBLIC</h5>
                    <p className="mt-5 mx-auto col-lg-10 col-md-10 col-10 text-center">The physics of flying dragons
                        Lesser-known causes of climate change
                        How to control machines with your thoughts
                        Killer robots and the moral dilemma of automation
                        How Pinterest hooks users
                        The driverless economy
                        Bitcoin for five-year-olds
                        Why you should encrypt your entire life
                        Machine learning and AI
                        The finer points of JavaScript
                        Silicon Valley’s industry dominance
                        App development tutorials
                        The future of biotech
                        Virtual reality films
                        Why quantum computing matters
                        The history of hashtags
                        Apple’s next move
                        When VR will go mainstream
                        What happened to Google Glass
                        Samsung’s weird emojis
                        Do’s and Don’ts of web typography</p>
                </div>
            </>


        )
    }

}


export default PUBLIC;