// import React from 'react'
// import { Link } from 'react-router-dom'
// import { ArrowRight, CheckCircle } from 'lucide-react'
// import Navbar from './Navbar'

// // Placeholder components to replace shadcn/ui
// // In a real project, you'd import these from your UI library
// const Button = ({ children, variant, className, ...props }) => (
//     <button
//         className={`px-4 py-2 rounded-md ${variant === 'outline'
//             ? 'border border-blue-500 text-blue-500 hover:bg-blue-50'
//             : 'bg-blue-500 text-white hover:bg-blue-600'
//             } ${className}`}
//         {...props}
//     >
//         {children}
//     </button>
// )

// const Input = ({ className, ...props }) => (
//     <input
//         className={`px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
//         {...props}
//     />
// )

// export default function Home() {
//     return (
//         <div className="flex flex-col min-h-screen">
//             <Navbar />
//             <main className="flex-grow">
//                 <section className="bg-gray-50 py-12 md:py-24 lg:py-32">
//                     <div className="container mx-auto px-4 text-center">
//                         <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
//                             Welcome to <span className='text-indigo-600'>MineX</span>
//                         </h1>
//                         <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
//                             Empowering your digital journey with innovative solutions. Discover how we can transform your business today.
//                         </p>
//                         <div className="mt-10 flex justify-center gap-4">
//                             <Button>Get Started</Button>
//                             <Button variant="outline">Learn More</Button>
//                         </div>
//                     </div>
//                 </section>
//                 <section id="features" className="py-12 md:py-24 lg:py-32">
//                     <div className="container mx-auto px-4">
//                         <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
//                         <div className="grid gap-8 md:grid-cols-3">
//                             <div className="flex flex-col items-center text-center">
//                                 <CheckCircle className="h-12 w-12 text-blue-500 mb-4" />
//                                 <h3 className="text-xl font-semibold mb-2">Easy Integration</h3>
//                                 <p className="text-gray-600">Seamlessly integrate our solutions into your existing systems.</p>
//                             </div>
//                             <div className="flex flex-col items-center text-center">
//                                 <CheckCircle className="h-12 w-12 text-blue-500 mb-4" />
//                                 <h3 className="text-xl font-semibold mb-2">Scalable Architecture</h3>
//                                 <p className="text-gray-600">Grow your business with our scalable and flexible solutions.</p>
//                             </div>
//                             <div className="flex flex-col items-center text-center">
//                                 <CheckCircle className="h-12 w-12 text-blue-500 mb-4" />
//                                 <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
//                                 <p className="text-gray-600">Our dedicated team is always here to help you succeed.</p>
//                             </div>
//                         </div>
//                     </div>
//                 </section>

//             </main>
//             <footer className="bg-white shadow-sm mt-auto">
//                 <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
//                     <p className="text-sm text-gray-500">
//                         © {new Date().getFullYear()} MineX Inc. All rights reserved.
//                     </p>
//                     <nav className="flex gap-4 mt-4 sm:mt-0">
//                         <Link to="/terms" className="text-sm text-gray-500 hover:text-blue-500">Terms of Service</Link>
//                         <Link to="/privacy" className="text-sm text-gray-500 hover:text-blue-500">Privacy</Link>
//                     </nav>
//                 </div>
//             </footer>
//         </div>
//     )
// }

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Navbar from './Navbar';

// Placeholder components to replace shadcn/ui
const Button = ({ children, variant, className, ...props }) => (
    <button
        className={`px-4 py-2 rounded-md ${variant === 'outline'
            ? 'border border-blue-500 text-blue-500 hover:bg-blue-50'
            : 'bg-blue-500 text-white hover:bg-blue-600'
            } ${className}`}
        {...props}
    >
        {children}
    </button>
);

const Input = ({ className, ...props }) => (
    <input
        className={`px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
        {...props}
    />
);

export default function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate data fetching
        const timer = setTimeout(() => {
            setLoading(false); // Stop loading after 2 seconds
        }, 500);

        return () => clearTimeout(timer); // Cleanup on component unmount
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <section className="bg-gray-50 py-12 md:py-24 lg:py-32">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                            Welcome to <span className='text-indigo-600'>MineX</span>
                        </h1>
                        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
                            Empowering your digital journey with innovative solutions. Discover how we can transform your business today.
                        </p>
                        <div className="mt-10 flex justify-center gap-4">
                            <Button>Get Started</Button>
                            <Button variant="outline">Learn More</Button>
                        </div>
                    </div>
                </section>
                <section id="features" className="py-12 md:py-24 lg:py-32">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
                        <div className="grid gap-8 md:grid-cols-3">
                            <div className="flex flex-col items-center text-center">
                                <CheckCircle className="h-12 w-12 text-blue-500 mb-4" />
                                <h3 className="text-xl font-semibold mb-2">Easy Integration</h3>
                                <p className="text-gray-600">Seamlessly integrate our solutions into your existing systems.</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <CheckCircle className="h-12 w-12 text-blue-500 mb-4" />
                                <h3 className="text-xl font-semibold mb-2">Scalable Architecture</h3>
                                <p className="text-gray-600">Grow your business with our scalable and flexible solutions.</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <CheckCircle className="h-12 w-12 text-blue-500 mb-4" />
                                <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                                <p className="text-gray-600">Our dedicated team is always here to help you succeed.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="bg-white shadow-sm mt-auto">
                <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} MineX Inc. All rights reserved.
                    </p>
                    <nav className="flex gap-4 mt-4 sm:mt-0">
                        <Link to="/terms" className="text-sm text-gray-500 hover:text-blue-500">Terms of Service</Link>
                        <Link to="/privacy" className="text-sm text-gray-500 hover:text-blue-500">Privacy</Link>
                    </nav>
                </div>
            </footer>
        </div>
    );
}
