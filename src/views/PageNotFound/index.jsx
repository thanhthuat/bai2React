import React from 'react';
import Layout from '../../HOCs/Layout';
import imgPageNotFound from '../../assets/page_not_found.png';

function PageNotFount(props) {
    return (
        <Layout>
                <img src={imgPageNotFound} style={{width:"100%"}} alt="" />
        </Layout>
    );
}

export default PageNotFount;