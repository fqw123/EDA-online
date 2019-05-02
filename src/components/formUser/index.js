import React, { Component } from 'react';
import Model from './model';
import View from './view';

export default function(props) {
    return (
        <div>
            <Model {...props}>
                {prop=><View {...props} {...prop}  />}
            </Model>
        </div>
    );
   
}
