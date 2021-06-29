import React, { useCallback } from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
//import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import { useDispatch } from 'react-redux';
import { loginAction } from '../reducers/user';

//return 안에 객체 형태로 style 삽입하면 안됨   
// {} === {} //결과: false 객체는 모양이 같더라도 같지 않음
//style={{}} 의 inline 방식의 {{}} 의 객체가 매번 다른것으로 인식이 되어 매번 리렌더링 되므로 사용하면 안됨
//styled component 로 만들어 최적화 시킴

//리렌더링: react에서 이전것과 지금것을 비교하여 바뀐 부분이 감지되면 return 안의 바뀐 부분만(전체는 아님) 다시 렌더링함
const ButtonWrapper = styled.div`margin-top: 10px`;   //div tag의 css 적용된 ButtonWrapper

const FormWrapper = styled(Form)`padding: 10px`; ``

const LoginForm = () => { //setIsLoggedIn validation 아래 
    //redux- action dispatch 
    const dispatch = useDispatch();


    const [id, onChangeId] = useInput(''); //hooks 중복제거
    const [password, onChangePassword] = useInput('');

    //const [id, setId] = useState('');
    //const [password, setPassword] = useState('');

    //props로 넘겨주는  속성은 useCallback 사용
    // const onChangeId = useCallback((e) => {
    //     setId(e.target.value);
    // }, []);

    // const onChangePassword = useCallback((e) => {
    //     setPassword(e.target.value);
    // }, []);

    const onSubmitForm = useCallback(() => { //dummy data로 로그인 처리
        console.log(id, password);
        //setIsLoggedIn(true);
        dispatch(loginAction({ id, password })); //action dispatch
    }, [id, password]);


    return ( //vitual dom
        // form에서 button 누르면 onFinish 속성 적용, onFinish는 이미 e.preventDefault 적용되어 쓸필요없음
        <FormWrapper onFinish={onSubmitForm}> 
            <div>
                <label htmlFor='user-id'>ID</label>
                <br />
                <Input name='user-id' value={id} onChange={onChangeId} required />
            </div>
            <div>
                <label htmlFor='user-password'>Password</label>
                <br />
                <Input name='user-password' type="password" value={password} onChange={onChangePassword} required />
            </div>
            <ButtonWrapper>
                {/* htmlType="submit" -> form의 onFinish가 자동 호출 submit 기능 */}
                <Button type="primary" htmlType="submit" loading={false}>login</Button>
                <Link href='/signup'><a><Button>sign up</Button></a></Link>
            </ButtonWrapper>
            <div>

            </div>
        </FormWrapper>
    )
}

// LoginForm.propTypes = { //validation
//     setIsLoggedIn: PropTypes.func.isRequired,
// };

export default LoginForm;