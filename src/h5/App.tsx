import { useState } from 'react';

import './App.css';
import 'antd/dist/antd.css';
import { StepForwardOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const Welcome = () => <div>Welcome</div>;

const Home = () => {
    return (
        <Button type="primary">
            Home <StepForwardOutlined />
        </Button>
    );
};
const Me = () => {
    return (
        <Button type="primary">
            Me
            <StepForwardOutlined />
        </Button>
    );
};
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/home" element={<Home />} />
                <Route path="/me" element={<Me />} />{' '}
                <Route
                    path="*"
                    element={
                        <main style={{ padding: '1rem' }}>
                            <p>There's nothing here!</p>
                        </main>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
