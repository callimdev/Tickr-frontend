import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { MenuIcon } from '@material-ui/icons';
import UserBar from './UserBar'
import { TextField, Fab } from '@material-ui/core'
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone'
import Grid from '@material-ui/core/Grid'

const styles = {
    bar: {
        backgroundColor: '#fb8c00',
    },
    button: {
        marginLeft: "10%",
        marginTop: "5%"
    }
}

class NavBar extends Component {
    constructor(){
        super()
        this.state = {
            search: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSearch = (event) => {
        event.preventDefault()
        this.props.handleSearch(this.state.search)
    }

    render() {
        return (

            <Grid container >
                <AppBar position="static" style={styles.bar}>
                    <Toolbar>
                    <Grid item xs={10}>
                    <IconButton edge="start"  aria-label="menu">
                        {this.props.user &&
                        <UserBar user={this.props.user} logOut={this.props.logOut}/> 
                        }
                        
                    </IconButton>
                    <Typography variant="h6">
                        TICKR
                    </Typography>
                    </Grid>
                    <Grid item xs={2}>
                    <div>
                        <form>
                            
                            <TextField
                                id="outlined-email-input"
                                label="search"
                                type="search"
                                name="search"
                                autoComplete="search"
                                margin="normal"
                                variant="outlined"
                                onChange={this.handleChange}/
                            >
                            {/* <Button 
                            onClick={this.handleSearch}
                            variant="outlined" 
                            >
                            Find Stock</Button> */}
                            <Fab color="#bdbdbd" aria-label="add" onClick={this.handleSearch} style={styles.button}>
                                <SearchTwoToneIcon />
                            </Fab>
                        </form>
                        
                    </div>
                    </Grid>
                    </Toolbar>
                </AppBar>
            </Grid>       
        );
    }
}

export default NavBar;