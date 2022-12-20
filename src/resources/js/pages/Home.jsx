import React, {useState, useEffect} from 'react';
import axios from 'axios';

import { Button, Card } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import MainTable from '../components/MainTable';



function Home() {


    //ヘッダーのコンテンツ用の配列定義
    const headerList = ['名前', 'タスク内容', '編集', '完了'];

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPostsData();
    },[]);

    const getPostsData = () => {

        axios
        .get('/api/posts')
        .then(response => {
        setPosts(response.data);
        console.log(response.data);
        })
        .catch(() => {
            console.log('通信に失敗しました。');
        })

    };

    let rows = [];

    posts.map((post) =>
        rows.push({
            name: post.name,
            content: post.content,
            editBtn: <Button color='secondary' variant='contained'>編集</Button>,
            deleteBtn: <Button color='primary' variant='contained'>完了</Button>
        }))


    return (
        <div>
            <h1>タスク管理</h1>
            <MainTable headerList={headerList} rows={rows} />
        </div>
    )
}

export default Home;
