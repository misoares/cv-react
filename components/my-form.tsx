import * as React from 'react';
import { makeStyles, Theme, TextField } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { connect } from 'react-redux';
import { AppState } from '../redux/store';
import { thunkPostUsersAction } from '../redux/actions';
import { UserState } from '../redux/types';
import { User } from '../interfaces/interfaces';

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

interface IMyFormProps {
    thunkPostUsersAction: typeof thunkPostUsersAction
    userState: UserState
}

function MyForm(props: IMyFormProps) {
    const classes = useStyles();
    const initialState:User = {
        first_name: '',
        last_name: ''
    };

    const [state, setState] = React.useState(initialState);

    function handleSubmit(event) {
        props.thunkPostUsersAction(state)
        event.preventDefault();
    }

    return (
        <form className={classes.container} autoComplete="off" onSubmit={handleSubmit}>
            <TextField
                required
                label="First Name"
                placeholder="Placeholder"
                className={classes.textField}
                onChange={e => setState({ ...state, first_name: e.target.value })}
                margin="normal"
            />
            <TextField
                required
                label="Last Name"
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

const mapStateToProps = (state: AppState) => ({
    userState: state.userState,
})

export default connect(
    mapStateToProps,
    { thunkPostUsersAction }
  )(MyForm);