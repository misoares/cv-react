import * as React from 'react';
import { makeStyles, Theme, TextField } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import axios from 'axios';
import { connect } from 'react-redux';
import { AppState } from '../redux/store';
import { thunkPostUsers } from '../redux/actions';
import { UserState } from '../redux/types';


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

const mapStateToProps = (state: AppState) => ({
    userState: state.userState,
})

interface IMyFormProps {
    thunkPostUsers: typeof thunkPostUsers
    userState: UserState
}

function MyForm(props: IMyFormProps) {
    const classes = useStyles();
    const initialState = {
        first_name: '',
        last_name: ''
    };

    const [state, setState] = React.useState(initialState);

    function handleSubmit(event) {
        //alert('A name was submitted: ' + state.name + " " + state.job);
        props.thunkPostUsers(state)
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
                onChange={e => setState({ ...state, first_name: e.target.value })}
                margin="normal"
            />
            <TextField
                id="standard-required"
                label="Job"
                placeholder="Placeholder"
                helperText="Full width!"
                margin="normal"
                onChange={e => setState({ ...state, last_name: e.target.value })}
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
export default connect(
    mapStateToProps,
    { thunkPostUsers }
  )(MyForm);