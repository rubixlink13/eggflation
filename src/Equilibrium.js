import * as React from 'react';
import Paper from '@mui/material/Paper';
import {
    Chart,
    LineSeries,
    ArgumentAxis,
    ValueAxis,
    Title,
    Legend,
} from '@devexpress/dx-react-chart-material-ui';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { ArgumentScale, ValueScale, } from '@devexpress/dx-react-chart';
import { Slider } from 'devextreme-react/slider'
import 'devextreme/dist/css/dx.light.css';

import './Equilibrium.css'

class Equilibrium extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className = "Equilibrium">

            </div>
        )
    }
}

export default Equilibrium;