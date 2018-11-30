import React from "react";
import { Link, withRouter } from "react-router-dom";
class PostBottom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: props,
        }
    }
    render() {
        let postArr = this.state.post.posts.state.posts;
        console.log(postArr);
        return (
            <div>
                <div className="container-fluid mt-5 d-flex justify-content-between">
                    <div className="col-lg-8">
                        {postArr.map((p) => {
                            if (p.id > 3) {
                                return (
                                    <div key={p.id} className="post__box col-12 d-flex justify-content-between mb-3">
                                        {/* 圖片 */}
                                        {/* 標題 */}
                                        <div className="col-lg-8 post__box__content">
                                            <div className="post__title post__box__content">

                                                <Link to={`/posts/${p.id}`}>
                                                    {p.title}
                                                </Link>
                                            </div>
                                            {/* 內文 */}
                                            <div className="post__body">
                                                <p className="card-title text-white post__box__content">
                                                    <Link to={`/posts/${p.id}`}>
                                                        {p.body}
                                                    </Link></p>
                                                <p className="post__author">
                                                    <Link to={`/posts/${p.id}`}>
                                                        {p.author}
                                                    </Link></p>
                                            </div>
                                        </div>
                                        <div className="post__image col-lg-4">
                                            <img src="https://images.pexels.com/photos/1068523/pexels-photo-1068523.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350" className="img-fluid" alt="Responsive image"></img>
                                        </div>
                                        {/* 作者 */}

                                    </div>
                                )
                            }

                        })}
                    </div>

                    <div className="col-lg-4">
                        <div className="bottom__right__title text-center">
                            <h5 className="mt-3 py-4">Popular on Medium</h5>
                        </div>
                        <div className="bottom__right__body d-flex justify-content-betweeen mb-4">
                            <div className="body__num col-lg-2 col-md-2">01</div>
                            <div className="body__content col-lg-10 col-md-10">
                                <div className="col-12 body__content__title">Google Employees: Our Executives Engaged in Abuse. Don’t Let Kink and Polyamory </div>
                                <div className="col-12 body__content__author mt-2">Liz Fong-Jones</div>
                            </div>

                        </div>
                        <div className="bottom__right__body d-flex justify-content-betweeen mb-4">
                            <div className="body__num col-lg-2 col-md-2">02</div>
                            <div className="body__content col-lg-10 col-md-10">
                                <div className="col-12 body__content__title">Google Employees: Our Executives Engaged in Abuse. Don’t Let Kink and Polyamory </div>
                                <div className="col-12 body__content__author mt-2">Liz Fong-Jones</div>
                            </div>

                        </div>
                        <div className="bottom__right__body d-flex justify-content-betweeen mb-4">
                            <div className="body__num col-lg-2 col-md-2">03</div>
                            <div className="body__content col-lg-10 col-md-10">
                                <div className="col-12 body__content__title">Google Employees: Our Executives Engaged in Abuse. Don’t Let Kink and Polyamory </div>
                                <div className="col-12 body__content__author mt-2">Liz Fong-Jones</div>
                            </div>

                        </div>
                        <div className="bottom__right__body d-flex justify-content-betweeen mb-4">
                            <div className="body__num col-lg-2 col-md-2">04</div>
                            <div className="body__content col-lg-10 col-md-10">
                                <div className="col-12 body__content__title">Google Employees: Our Executives Engaged in Abuse. Don’t Let Kink and Polyamory </div>
                                <div className="col-12 body__content__author mt-2">Liz Fong-Jones</div>
                            </div>

                        </div>



                    </div>
                </div>
            </div>);
    }

}

export default PostBottom;