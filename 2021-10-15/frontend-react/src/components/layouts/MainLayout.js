import { Layout } from 'antd';
import React from 'react';

const { Footer, Content } = Layout; 

const MainLayout =({children}) => {
  return (
    <>
      <Layout>
        <Content style={{padding: '25px'}}>
          {children}
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </>
  );
}

export default MainLayout;