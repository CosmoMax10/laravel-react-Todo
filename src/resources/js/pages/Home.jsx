import React from 'react';
import { Button, Card } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import MainTable from '../components/MainTable';

let rows = [
    {
        name: "モーリー",
        content: "肩トレ",
        editBtn: <Button color="secondary" variant="contained">編集</Button>,
        deleteBtn: <Button color="primary" variant="contained">完了</Button>,
    },{
        name: "ドンキーコング",
        content: "バナナ補給",
        editBtn: <Button color="secondary" variant="contained">編集</Button>,
        deleteBtn: <Button color="primary" variant="contained">完了</Button>,
    },
];


//ヘッダーのコンテンツ用の配列定義
const headerList = ['名前', 'タスク内容', '編集', '完了'];

function Home() {
    return (
        <div>
            <h1>タスク管理</h1>
            <MainTable headerList={headerList} rows={rows} />
        </div>
    )
}

export default Home;
