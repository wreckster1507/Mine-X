import Navbar from './Navbar';


import React from 'react';
import { useLocation } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const SummaryPage = () => {
    const location = useLocation();
    const { summary, importantData } = location.state || {};

    const chartData = Object.entries(importantData).map(([key, value]) => ({
        name: key.replace(/([A-Z])/g, ' $1'),
        value: typeof value === 'number' ? value : 0
    }));

    return (
        <div>
            <Navbar />
            <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-4">
                        <h1 className="text-3xl font-bold text-white">Shift Log Summary</h1>
                    </div>
                    <div className="p-6">
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Summary</h2>
                            <p className="text-gray-600 leading-relaxed">{summary}</p>
                        </div>
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Important Data</h2>
                            <div className="bg-gray-50 rounded-lg p-4">
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {Object.entries(importantData).map(([key, value]) => (
                                        <li key={key} className="flex items-center">
                                            <span className="w-4 h-4 bg-indigo-500 rounded-full mr-2"></span>
                                            <span className="font-medium text-gray-700">{key.replace(/([A-Z])/g, ' $1')}:</span>
                                            <span className="ml-2 text-gray-600">{value}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Visualization</h2>
                            <div className="bg-gray-50 rounded-lg p-4" style={{ height: '400px' }}>
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={chartData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="value" fill="#4F46E5" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SummaryPage;
