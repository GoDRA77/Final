// LogPage.jsx
import React, { useEffect, useState } from 'react';

const Log = () => {
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        // Fetch logs or set logs from wherever you get them
        // For demonstration purposes, initializing with dummy logs
        const dummyLogs = [
            'Log entry 1',
            'Log entry 2',
            'Log entry 3',
            // Add more logs as needed
        ];

        setLogs(dummyLogs);
    }, []);

    return (
        <div>
            <h2>Log Page</h2>
            <ul>
                {logs.map((log, index) => (
                    <li key={index}>{log}</li>
                ))}
            </ul>
        </div>
    );
};

export default Log;
