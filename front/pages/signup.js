import React, { useCallback, use, useState } from 'react';
import Head from 'next/head';
import { Form, Input, Checkbox, Button } from 'antd';
import styled from 'styled-components';

import AppLayout from '../components/AppLayout';
import useInput from '../hooks/useInput';

const ErrorMsg = styled.div`color:red`;

const signup = () => {
    //hooks 중복제거 hook/useInput.js import 
    const [id, onChangeId] = useInput('');
    const [nickname, onChangeNickname] = useInput('');
    const [password, onChangePw] = useInput('');

    const [passwordCheck, setPasswordCheck] = useState('');
    const [passwordError, setPasswordError] = useState(false); //password = passwordCheck
    const onChangePwCheck = useCallback((e) => { //validation check1
        setPasswordCheck(e.target.value);
        setPasswordError(e.target.value !== password); //password가 일치하지 않으면 setPasswordError가 true
    }, [password]);

    const [term, setTerm] = useState('');
    const [termError, setTermError] = useState(false);
    const onChangeTerm = useCallback((e) => {
        setTerm(e.target.checked); //약관 동의
        setTermError(false); //false 아래 onSubmit에서 true check
    }, []);

    const onSubmit = useCallback(() => { //validation check2
        if (password !== passwordCheck) {
            return setPasswordError(true);
        }
        if (!term) {
            return setTermError(true);
        }
        console.log(id, password, term); //server 보내기 전 체크
    }, [password, passwordCheck, term]);

    return (
        <AppLayout>
            <Head>
                <title>
                    Sign up |  Nodebird
                </title>
            </Head>
            <Form onFinish={onSubmit}>
                <div>
                    <label htmlFor="user-id">ID</label>
                    <br />
                    <Input name='user-id' value={id} required onChange={onChangeId} />
                </div>
                <div>
                    <label htmlFor="user-nickname">Nickname</label>
                    <br />
                    <Input name='user-nickname' value={nickname} onChange={onChangeNickname} />
                </div>
                <div>
                    <label htmlFor="user-pw">Password</label>
                    <br />
                    <Input name='user-pw' type='password' value={password} required onChange={onChangePw} />
                </div>
                <div>
                    <label htmlFor="user-pw-check">Password Check</label>
                    <br />
                    <Input name='user-pwcheck' type='password' value={passwordCheck} required onChange={onChangePwCheck} />
                    {passwordError && <ErrorMsg>password is not same</ErrorMsg>}
                </div>
                <div>
                    <Checkbox name='user-term' checked={term} onChange={onChangeTerm}>위의 약관에 동의합니다.</Checkbox>
                    {termError && <ErrorMsg>약관에 동의해주세요.</ErrorMsg>}
                    <div style={{ marginTop: 20 }}>
                        {/* htmlType='submit' 버튼 클릭시 form에서 onFinish가 호출됨 */}
                        <Button type='primary' htmlType='submit'>apply</Button>
                    </div>
                </div>
            </Form>
        </AppLayout>
    )
};

export default signup;

