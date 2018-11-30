import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import { Redirect } from "react-router-dom";
class GetPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            post: {},
        }
    }

    componentDidMount() {

        axios.get("http://45.55.26.18:3310/posts/" + this.props.id)
            .then(response => {
                console.log(response);
                this.setState({
                    post: response.data,
                })
            })
    }


    render() {
        // const { post } = this.state;
        console.log(this.props);
        return (
            <Redirect to={`/posts/${this.props.id}`} />
        )
    }
}

class MyForm extends Component {
    constructor(props) {
        super(props);

        // 初始化輸入框的 state 值為空
        this.state = {
            authorValue: '',
            titleValue: '',
            bodyValue: '',
            // 代表剛剛送出去的id，如果剛剛有送出去id代表會刷新這個null
            postId: null,

        };
        console.log(this.state.postId);

        this.handleChangeAuthor = this.handleChangeAuthor.bind(this);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeBody = this.handleChangeBody.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // onChange 事件處理函示
    handleChangeAuthor(event) {
        // event.target 是當前的 DOM elment
        // 從 event.target.value 取得 user 剛輸入的值
        // 將 user 輸入的值更新回 state
        this.setState({
            authorValue: event.target.value,
        });
    }
    handleChangeBody(event) {
        // event.target 是當前的 DOM elment
        // 從 event.target.value 取得 user 剛輸入的值
        // 將 user 輸入的值更新回 state
        this.setState({
            bodyValue: event.target.value,
        });
    }
    handleChangeTitle(event) {
        // event.target 是當前的 DOM elment
        // 從 event.target.value 取得 user 剛輸入的值
        // 將 user 輸入的值更新回 state
        this.setState({
            titleValue: event.target.value,
        });
    }

    // form onSubmit 事件處理函式
    handleSubmit(event) {
        axios.post('http://45.55.26.18:3310/posts', {
            title: this.state.titleValue,
            author: this.state.authorValue,
            body: this.state.bodyValue
        })
            .then(response => {
                this.setState({
                    postId: response.data.id,
                })

            })
            .catch(function (error) {
                console.log(error);
            });
        event.preventDefault();
    }

    render() {
        // 將 value 設定為 this.state.value
        // 並監聽 onChange 來更新 state
        const { postId } = this.state;
        console.log(this.state.postId);
        return (
            <div className="container-fluid">
                {!postId &&
                    <form onSubmit={this.handleSubmit}>
                        <p className="mt-2">Author:</p>
                        <input className="form-control col-md-3" type="text" placeholder="Default input" value={this.state.authorValue} onChange={this.handleChangeAuthor} />
                        <p className="mt-2">Title:</p>
                        <input className="form-control col-md-3" type="text" placeholder="Default input" value={this.state.titleValue} onChange={this.handleChangeTitle} />
                        <p className="mt-2">Body:</p>
                        <textarea className="form-control col-md-6" type="text" placeholder="Default input" rows="10" value={this.state.bodyValue} onChange={this.handleChangeBody} />
                        <button type="submit" className="btn btn-primary mt-3">Submit</button>
                    </form>
                }
                <div>
                    {postId && <GetPost id={this.state.postId} />}
                </div>
            </div>
        );
    }
}

export default MyForm;
