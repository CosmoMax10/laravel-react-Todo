import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '@material-ui/core';

function Example() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>
                        こんにちは。
                        <div className="card-body">I'm an example component!</div>

                        <Button color='primary' variant='contained' href={`/`}>Homeに遷移</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;
