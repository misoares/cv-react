import * as React from 'react';
import { makeStyles, Theme, TextField } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import axios from 'axios';

export interface IMyFormProps {
}

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: 1,
        marginRight: 1,
        width: 200,
    }
}));

export default function MyForm(props: IMyFormProps) {
    const classes = useStyles();
    const initialState = {
        name: '',
        job: ''
    };

    const [state, setState] = React.useState(initialState);

    function handleSubmit(event) {
        alert('A name was submitted: ' + state.name + " " + state.job);
        axios.post('https://reqres.in/api/users', state)
            .then((response) => {
                console.log(response)
                return response;
            })
            .catch((error) => {
                console.log(error);
            });
        event.preventDefault();
    }

    return (
        <form className={classes.container} autoComplete="off" onSubmit={handleSubmit}>
            <TextField
                required
                id="standard-required"
                label="Name"
                placeholder="Placeholder"
                className={classes.textField}
                onChange={e => setState({ ...state, name: e.target.value })}
                margin="normal"
            />
            <TextField
                id="standard-required"
                label="Job"
                placeholder="Placeholder"
                helperText="Full width!"
                margin="normal"
                onChange={e => setState({ ...state, job: e.target.value })}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <Fab color="primary" aria-label="Add" type="submit">
                <AddIcon />
            </Fab>
        </form>
    );
}
