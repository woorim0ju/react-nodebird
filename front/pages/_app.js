import React from 'react';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import Head from 'next/head'; //html Head 태그 접근
import wrapper from '../store/configureStore';

// _app.js: pages들의 공통 부분 작업 (antd import)
//AppLayout.js: 공통 아닌 부분 작업
const Nodebird = ({ Component }) => {
    return (
        <>
        <Head>
            <meta charSet="utf-8"></meta>
            <title>
                Nodebird
            </title>
        </Head>
            <Component />
        </>
    )
};

Nodebird.prototype = {
    Component: PropTypes.elementType.isRequired,
}

export default wrapper.withRedux(Nodebird);  