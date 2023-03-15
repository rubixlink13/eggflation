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

const StyledDiv = styled('div')(() => ({
    [`&.Equilibrium`]: {
      textAlign: 'center',
      width: '100%',
      marginBottom: '10px',
    },
}));

const Root = props => (
    <Legend.Root {...props} sx={{ display: 'flex', margin: 'auto', flexDirection: 'row' }} />
);
const Label = props => (
    <Legend.Label {...props} sx={{ mb: 1, whiteSpace: 'nowrap' }} />
);
const Item = props => (
    <Legend.Item {...props} sx={{ flexDirection: 'column-reverse' }} />
);

const Text = ({ text }) => {
    const [mainText, subText] = text.split('\\n');
    return (
      <StyledDiv className="Equilibrium">
        <Typography component="h3" variant="h5">
          {mainText}
        </Typography>
        <Typography variant="subtitle1">{subText}</Typography>
      </StyledDiv>
    );
};

const modifyDomain = () => [0, 100];

class Equilibrium extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            supply : -15,
            demand : 15
        };
        this.chartData = [
            {s1q : 15, s1p : 0},
            {s1q : 100, s1p : 100},
            {s2q : 0, s2p : 0},
            {s2q : 85, s2p : 100},
            {d1q : 0, d1p : 100},
            {d1q : 85, d1p : 0},
            {d2q : 15, d2p : 100},
            {d2q : 100, d2p : 0},
        ];

        this.handleSupplyChange = this.handleSupplyChange.bind(this);
        this.handleDemandChange = this.handleDemandChange.bind(this);
    }

    handleSupplyChange(e) {
        const newValue = e.value;
        this.setState({
            supply: newValue
        });

        this.chartData = [
            {s1q : 15, s1p : 0},
            {s1q : 100, s1p : 100},
            {s2q : 15 + this.state.supply, s2p : 0},
            {s2q : 100 + this.state.supply, s2p : 100},
            {d1q : 0, d1p : 100},
            {d1q : 85, d1p : 0},
            {d2q : this.state.demand, d2p : 100},
            {d2q : 85 + this.state.demand, d2p : 0},
        ];
    }

    handleDemandChange(e) {
        const newValue = e.value;
        this.setState({
            demand: newValue
        });

        this.chartData = [
            {s1q : 15, s1p : 0},
            {s1q : 100, s1p : 100},
            {s2q : 15 + this.state.supply, s2p : 0},
            {s2q : 100 + this.state.supply, s2p : 100},
            {d1q : 0, d1p : 100},
            {d1q : 85, d1p : 0},
            {d2q : this.state.demand, d2p : 100},
            {d2q : 85 + this.state.demand, d2p : 0},
        ];
    }


    
    
    render() {
        return (
            <div className = "Equilibrium">
                <Paper>
                    <Chart data={this.chartData}>
                        <ArgumentScale modifyDomain={modifyDomain} />
                        <ValueScale modifyDomain={modifyDomain} />
                        <ArgumentAxis showLabels={false}/>
                        <ValueAxis showLabels={false}/>
                        <LineSeries name="Supply" argumentField="s1q" valueField="s1p"/>
                        <LineSeries name="Supply*" argumentField="s2q" valueField="s2p"/>
                        <LineSeries name="Demand" argumentField="d1q" valueField="d1p"/>
                        <LineSeries name="Demand*" argumentField="d2q" valueField="d2p"/>
                        <Legend position = "bottom" rootComponent={Root} itemComponent={Item} labelComponent={Label} />
                        <Title
                            text="Equilibrium of the Egg Market"
                            textComponent={Text}
                        />
                    </Chart>
                    <p>Supply:</p>
                    <Slider
                        min={-30}
                        max={30}
                        value={this.state.supply}
                        onValueChanged={this.handleSupplyChange}
                    />
                    <p>Demand:</p>
                    <Slider
                        min={-30}
                        max={30}
                        value={this.state.demand}
                        onValueChanged={this.handleDemandChange}
                    />
                </Paper>
            </div>
        )
    }
}

export default Equilibrium;