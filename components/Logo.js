import React, { Component } from 'react';

export default () => (
    <svg 
            width="180"
            height="160"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            viewBox="0 0 180 200"

        >
        
            <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{'stopColor':'#7f00ff',stopOpacity:'1'}} />
                    <stop offset="100%" style={{'stopColor':'#e100ff',stopOpacity:'1'}} />
                </linearGradient>
            </defs>
            <path className="logo__path"
            d="M 10,150 L 90,10 L 170,150 z"
            fill="transparent"
            stroke="url(#grad1)" 
            strokeWidth="5"
            />
            
        </svg>
)