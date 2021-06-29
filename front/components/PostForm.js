import { Form, Input, Button } from 'antd';
import React, { useCallback, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../reducers/post';

const PostForm = () => {
    const { imagePaths } = useSelector((state) => state.post);
    const dispatch = useDispatch();
    const imageInput = useRef();
    const [text, setText] = useState('');
    const onSubmit = useCallback(() => {
        dispatch(); //post 추가하기
        setText('');
    }, []);
    const onChangeText = useCallback((e) => {
        setText(e.target.value);
    }, []);
    const onClickImageUpload = useCallback(() => {
        imageInput.current.click();
    }, [imageInput.current]); //imageInput.current로 image에 접근

    return (
        <Form style={{ margin: '10px 0 20px' }} encType='multipart/form-data' onFinish={onSubmit}>
            <Input.TextArea value={text} onChange={onChangeText} maxLength={140} placeholder="how are you feeling today?" />
            <div>
                {/* useRef를 이용해 dom, input에 접근하여 file 창 오픈 */}
                <input type='file' multiple hidden ref={imageInput} />
                <Button onClick={onClickImageUpload}>image upload</Button>
                <Button type='primary' style={{ float: 'right' }} htmlType='submit'>twit</Button>
            </div>
            <div>{imagePaths.map((v) =>
                <div style={{ display: 'inline-block' }}>
                    <img src={v} style={{ width: '200px' }} alt={v} />
                    <div><Button>delete</Button></div>
                </div>)}
            </div>
        </Form>
    )
};

export default PostForm;