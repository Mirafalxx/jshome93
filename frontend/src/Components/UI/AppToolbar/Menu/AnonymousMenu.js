import { Button } from '@material-ui/core';
import {Link} from 'react-router-dom';
import React from 'react';

const AnonymousMenu = () => {
    return (
        <>
            <Button component={Link} color='inherit'>Sign Up</Button>
            <Button component={Link} color='inherit'>Sign in</Button>
        </>
    )
}

export default AnonymousMenu
