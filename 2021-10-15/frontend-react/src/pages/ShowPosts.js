import React from 'react';
import {useState, useEffect} from 'react'
import { Table } from 'antd';
import MainLayout from '../components/layouts/MainLayout';

const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Text',
      dataIndex: 'text',
      key: 'text',
    },
    {
      title: 'Author',
      dataIndex: 'user',
      key: 'user',
    },
    {
        title: 'Created At',
        dataIndex: 'createdAt',
        key: 'createdAt',
      }
  ];

function ShowPosts() {
    const [isLoading, setIsLoading] = useState(true);
    const [dbData, setDbData] = useState([])
    useEffect(() => {
        fetch('http://localhost:8081/api/post').then(res => {
            return res.json();
        }).then(data => {
            setIsLoading(false);
            setDbData(data);
            console.log(dbData);
        }).catch(e => console.log(e));
    }, [])

    if (isLoading) {
        return (
            <div>Posts are loading..</div>
        )
    }
    return(
        <MainLayout>
            <Table columns={columns} dataSource={dbData} />
            
        </MainLayout>
    );
}

export default ShowPosts;