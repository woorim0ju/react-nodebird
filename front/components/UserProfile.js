import React, { useCallback } from 'react';
import { Card, Avatar, Button } from 'antd'
import { useDispatch } from 'react-redux';
import { logoutAction } from '../reducers/user';

const UserProfile = () => {
    const dispatch = useDispatch();
    const onLogOut = useCallback(() => {
        dispatch(logoutAction());
    }, []);

    return (
        <div>
            <Card actions={[ //array이므로 key 삽입(react에서 array로 jsx 사용할 경우 key 필요)
                <div key="twit">twit<br />0</div>,
                <div key="followings">following<br />0</div>,
                <div key="followings">follower<br />0</div>,
            ]}>
                <Card.Meta title="goddino" avatar={<Avatar>god</Avatar>} /> 
                <Button onClick={onLogOut}>logout</Button>
            </Card>
        </div>
    )
}

export default UserProfile;