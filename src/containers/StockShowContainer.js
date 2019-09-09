import React, { Component } from 'react';
import StockNews from '../components/StockNews'
import StockInfo from '../components/StockInfo'
import GraphChart from '../components/GraphChart'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import SectorPieChart from '../components/PieChart';
import Grid from '@material-ui/core/Grid';
import StockCard from '../components/StockCard'

  
const styles = {bar: {
    backgroundColor: '#eee',
},
icon: {
    marginLeft: '85%'
}}

class StockShowContainer extends Component {
    

    render() {
        return (
            <div style={styles.bar}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Grid container justify="center">
                            <GraphChart stockInfo={this.props.stockInfo} stockName={this.props.stockName}/>
                        </Grid>
                    </Grid>
                    <Grid item xs={10}>
                        <Grid container justify="flex-end">
                            
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default StockShowContainer;