import React from 'react';
import Head from 'next/head';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

import AppLayout from '../components/AppLayout';

const profile = () => {
    //dummy data
    const followerList = [{nickname: 'goddino'}, {nickname: 'god'}, {nickname: 'dino'}];
    const followingList = [{nickname: 'hello'}, {nickname: 'hi'}, {nickname: 'dino'}];

    return (
        <div>
            <Head>
                 <title>Profile | Nodebird</title>
            </Head>
            <AppLayout>
                <NicknameEditForm />
                <FollowList header="Following list" data={followingList} />
                <FollowList header="Follower list" data={followerList} />
            </AppLayout>
        </div>
    )
};

export default profile;

