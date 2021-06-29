import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Popover, Button, Avatar, List, Comment } from 'antd';
import { RetweetOutlined, HeartOutlined, MessageOutlined, EllipsisOutlined, HeartTwoTone } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import PostImages from './PostImages';
import CommentForm from './CommentForm';
import PostCardContent from './PostCardContent';

const PostCard = ({ post }) => {
    const { me } = useSelector((state) => state.user);
    const id = me && me.id //me?.id; 같은 코드, 내 아이디(로그인 후)
    const [liked, setLiked] = useState(false);
    const [commentFormOpened, setCommentFormOpened] = useState(false);
    const onToggleLike = useCallback(() => {
        setLiked((prev) => !prev); //toggle기능 false는 true로, true는 false로
    }, []);
    const onToggleComment = useCallback(() => {
        setCommentFormOpened((prev) => !prev);
    }, []);

    return (
        <div style={{ marginBottom: 20 }}>
            <Card cover={post.Images[0] && <PostImages images={post.Images} />} //post image가 1개 이상인 경우 이미지 보여줌
                //array 안 jsx를 넣을 경우 key를 넣어야함
                actions={[
                    <RetweetOutlined key='retweet' />,
                    liked
                        ? <HeartTwoTone twoToneColor='#f5b914' key='heart' onClick={onToggleLike} />
                        : <HeartOutlined key='hear' onClick={onToggleLike} />,
                    <MessageOutlined key='message' onClick={onToggleComment} />,
                    <Popover key='more' content={(
                        <Button.Group>
                            {/* 내 id가 있고(로그인 완료) 게시글 작성자의 id가 내 id가 같을때 
                        내 게시물에 수정/삭제 가능*/}
                            {id && post.User.id === id ? (
                                <>
                                    <Button>change</Button>
                                    <Button>delete</Button>
                                </>
                            ) : <Button>report</Button >}
                        </Button.Group>
                    )}>
                        <EllipsisOutlined />
                    </Popover>
                ]}
            >
                <Card.Meta
                    avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
                    title={post.User.nickname} description={<PostCardContent postData={post.content} />}
                />
            </Card>

            {commentFormOpened && (
                <div>
                    {/* 게시글의 id가 필요하여 post props로 전달 */}
                    <CommentForm post={post} />
                    <List
                        header={post.Comments.length}
                        itemLayout='horizontal'
                        dataSource={post.Comments}
                        renderItem={(item) => (
                            <li>
                                <Comment
                                    author={item.User.nickname}
                                    avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                                    content={item.content}
                                />
                            </li>
                        )}
                    />
                </div>)}
        </div>
    )
};

PostCard.propTypes = {
    //post: PropTypes.object.isRequired,
    post: PropTypes.shape({
        id: PropTypes.number,
        User: PropTypes.object,
        content: PropTypes.string,
        createdAt: PropTypes.object,
        Comments: PropTypes.arrayOf(PropTypes.object),
        Images: PropTypes.arrayOf(PropTypes.object)
    })
}

export default PostCard;