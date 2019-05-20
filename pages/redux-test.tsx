import * as React from 'react';
import Layout from '../components/layout';
import MyForm from '../components/my-form';
import MyTable from '../components/table/my-table';

export interface IReduxTestProps {
}

export default function ReduxTest(props: IReduxTestProps) {
    return (
        <Layout>
            <MyForm>
            </MyForm>
            <MyTable/>
        </Layout>
    );
}
