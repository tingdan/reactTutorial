import React from 'react';

var frenchGreeting = {
    hello: 'Bon Jour',
    goodbye: 'Au Revoir'
}


export const hello = (
    <h1 id='title'
        className='header'
        style={{backgroundColor: 'purple', color: 'yellow'}}>
        {frenchGreeting.hello}
    </h1>
)

export const goodbye = (
    <h1 id='title'
        className='header'
        style={{backgroundColor: 'yellow', color: 'purple'}}>
        {frenchGreeting.goodbye}
    </h1>
)
