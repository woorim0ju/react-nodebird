export const initialState = {
    mainPosts: [{
        id: 1,
        User: {
            id: 1,
            nickname: 'inki',
        },
        content: 'first post #post #goddino',
        Images: [
            { src: 'https://i1.daumcdn.net/thumb/C300x300/?fname=https://blog.kakaocdn.net/dn/PMel5/btq0Vo8b6jN/4GrJVyHRVNm2kJvoijjIxK/img.jpg' },
            { src: 'https://i1.daumcdn.net/thumb/C300x300/?fname=https://blog.kakaocdn.net/dn/bU3cQ5/btq0XpyZRHk/kk7IjOub3wpyM8OgVq4W21/img.jpg' },
            { src: 'https://i1.daumcdn.net/thumb/C300x300/?fname=https://blog.kakaocdn.net/dn/bmtBaz/btq0ZMmqBUX/n5QKzYkfZ5RaXtBP3DsbiK/img.jpg' },
        ],
        Comments: [{
            User: {
                nickname: 'inki'
            },




            content: 'hello there'
        }, {
            User: {
                nickname: 'inki'
            },
            content: 'hello there'
        }]
    }],
    imagePaths: [],
    postAdded: false,
}

const ADD_POST = 'ADD_POST';
export const addPost = {
    type: ADD_POST,
}

const dummyPost = {
    id: 2,
    content: 'its dummy data',
    User: {
        id: 1,
        nickname: 'inki'
    },
    Images: [],
    Contents: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                mainPosts: [dummyPost, ...state.mainPosts], //dummypost를 앞에 추가하여 가장 위에 게시물로 업데이트 됨
                postAdded: true,
            }
        default:
            return state;
    }
}

export default reducer;