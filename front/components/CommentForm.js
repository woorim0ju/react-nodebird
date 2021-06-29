import { Form, Input, Button } from 'antd';
import React, { useCallback } from 'react';
import useInput from '../hooks/useInput';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const CommentForm = ({ post }) => {
    //const { me } = useSelector((state) => state.user);
    //const id = me && me.id //me?.id; 같은 코드, 로그인 하기 전, 내 아이디(로그인 후)
    const id = useSelector((state) => state.user.me?.id); //es6 로그인 안했을 경우(me= null) 대비용 추가
    const [commentText, onChangeCommentText] = useInput(''); //hooks folder

    const onSubmitForm = useCallback(() => {
        console.log(post.id, commentText); //게시글의 id의 댓글이기 때문에 post props로 전달받음
    }, [commentText]);

    return (
        <Form onFinish={onSubmitForm}>
            <Form.Item style={{ position: 'relative', margin: 0 }}>
                <Input.TextArea value={commentText} onChange={onChangeCommentText} rows={4} />
                <Button style={{ position: 'absolute', right: 0, bottom: -40 }} type='primary' htmlType='submit'>twit</Button>
            </Form.Item>
        </Form>
    )
};

CommentForm.propTypes = {
    post: PropTypes.object.isRequired,
}

export default CommentForm;