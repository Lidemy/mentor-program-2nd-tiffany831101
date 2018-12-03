import React from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
class Post extends React.Component {
    constructor(props) {
        console.log(props);
        // {id: 1}你按哪個就會顯示他的id
        super(props);
        this.state = {
            post: {},
        }
    }
    componentDidMount() {
        const { match } = this.props;
        axios.get("http://45.55.26.18:3310/posts/" + match.params.id).then(response => {
            this.setState({
                post: response.data,
            })
        })
    }

    render() {
        const { post } = this.state;
        const { match, history } = this.props;
        return (
            <div>
                <Link className="btn btn-primary mt-2" to="/">Back</Link>
                <h3>{post.title}</h3>
                <div>id:{match.params.id}</div>
                <p>Author：{post.author}</p>
                <p>Content：{post.body}</p>

            </div>
        )
    }
}

export default Post;