import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

const PostCardContent = ({ postData }) => {//게시글안에서 hashtag 추출 처리 정규식
    return (
        <div>
            {postData.split(/(#[^\s#]+)/g).map((item, i) => { //배열 hashtag 별로 쪼개기
                if (item.match(/(#[^\s#]+)/)) {
                    return <Link href={`/hashtag/${item.slice(1)}`} key={item.i}><a>{item}</a></Link> //item.slice(1) #....에서 #제거 후 next의 link 걸어주기
                }
                return item;
            })}
        </div>
    );
};

PostCardContent.propTypes = { postData: PropTypes.string.isRequired };

export default PostCardContent;