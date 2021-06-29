import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';
import { useSelector } from 'react-redux';

import UserProfile from '../components/UserProfile';
import LoginForm from '../components/LoginForm';
import styled, { createGlobalStyle } from 'styled-components';

const SearchInput = styled(Input.Search)` 
vertical-align: middle` //inline style에서 styled component 변경-> 리렌더링 최적화

// 아래 스크롤바 지우기
const Global = createGlobalStyle` 
    .ant-row { margin-right: 0 !important; margin-left: 0 !important}
    .ant-col: first-child {padding-left: 0 !important;}
    .ant-col: last-child {pddding-right: 0 !important;}
`;

const AppLayout = ({ children }) => {
    //const [isLoggedIn, setIsLoggedIn] = useState(false); //dummy data로 login 처리 
    //redux 처리, useSelector로 받아서 씀
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

    return (
        <div>
            <Global />
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href='/'><a>Nordbird</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href='/profile'><a>Profile</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <SearchInput enterButton />
                </Menu.Item>
                <Menu.Item>
                    <Link href='/signup'><a>Signup</a></Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6}>
                    {/* dummy data로 login 처리 */}
                    {/* LoginForm에서 로그인을 하는 순간 setIsLoggedIn = true -> isLoggedIn = true -> UserProfile component 실행 */}
                    {/* {isLoggedIn? <UserProfile setIsLoggedIn={setIsLoggedIn}/> : <LoginForm setIsLoggedIn={setIsLoggedIn}/>} */}
                    {isLoggedIn ? <UserProfile /> : <LoginForm />}
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}>
                    <a href="https://goddino.tistory.com/" target="_blank" rel="noreferrer noopener">Made by Goddino</a>
                </Col>
            </Row>
        </div>
    )
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired, //node.js아닌 react의 node
};

export default AppLayout;