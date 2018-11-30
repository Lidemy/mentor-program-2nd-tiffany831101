import React from "react";
import TECH from "./Tech";
import BUSINESS from "./Business";
import PUBLIC from "./Public";
import CULTURAL from "./Cultural";
import LIFE from "./Life";

class AboutBanner extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tab: "TECH",
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState({
            tab: e.target.name,
        })
    }
    render() {
        const { tab } = this.state;
        const navArr = ["TECH", "CULTURAL", "PUBLIC", "BUSINESS", "LIFE"]
        return (
            <div>
                <div className="mt-5 about__banner col-lg-12 col-md-12 col-12 mb-5">
                    <div className="d-flex justify-content-between about__banner__nav flex-nowrap">
                        {navArr.map((item) => {
                            return (
                                <div className="col-lg-2 col-md-2 col-2 text-center">
                                    <a name={item} className={"text-center " + (tab === item && "active")} onClick={this.handleClick}>{item}</a>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 col-12 about__banner__info mt-3">
                    {tab === 'TECH' && <TECH />}
                    {tab === 'BUSINESS' && <BUSINESS />}
                    {tab === 'PUBLIC' && <PUBLIC />}
                    {tab === 'CULTURAL' && <CULTURAL />}
                    {tab === 'LIFE' && <LIFE />}
                </div>

            </div>
        );

    }
}

export default AboutBanner;