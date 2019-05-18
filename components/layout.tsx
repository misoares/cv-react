import * as React from 'react';
import Navbar from './navbar';

export interface ILayoutProps {
    children: JSX.Element[] | JSX.Element
}

export default function Layout (props: ILayoutProps) {
    return (
      <div style={{ backgroundColor: '#f2f2f2' }}>
        <Navbar />
        <br />
        <div style={{ maxWidth: '1000px', margin: '0 auto'}}>
            <div style={{marginRight: '1%', marginLeft:'1%'}}>{props.children}</div>
        </div>
      </div>
    );
}

