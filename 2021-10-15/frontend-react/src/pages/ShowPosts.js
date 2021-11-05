import React from 'react';
import {useState, useEffect} from 'react'
import { Table, Button } from 'antd';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layouts/MainLayout';

const columns = [
    {
      title: 'Pealkiri',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Kirjeldus',
      dataIndex: 'text',
      key: 'text',
    },
    {
      title: 'Autor',
      dataIndex: 'user',
      key: 'user',
    },
    {
        title: 'Loodud',
        dataIndex: 'createdAt',
        key: 'createdAt',
    },
    {
        title: 'Muuda',
        key: 'edit',
        render: () => (
            <Button>
                <Link to="">Muuda</Link>
            </Button>
        )
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
            <div>Postid laevad..</div>
        )
    }
    return(
        <MainLayout>
            <Table columns={columns} dataSource={dbData} />
            
        </MainLayout>
    );
}

export default ShowPosts;