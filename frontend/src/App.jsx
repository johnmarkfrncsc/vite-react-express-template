import React from "react";

const App = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Hello there</h1>
                    <p className="py-6">Get started with your new React app using Vite and Tailwind CSS.</p>
                    <button className="btn btn-primary" onClick={() => alert("Button clicked!")}>
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default App;
