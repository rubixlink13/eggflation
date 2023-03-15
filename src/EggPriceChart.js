import * as React from 'react';
import Paper from '@mui/material/Paper';
import {
    Chart,
    ArgumentAxis,
    ValueAxis,
    ScatterSeries,
    Title,
    Tooltip,
} from '@devexpress/dx-react-chart-material-ui';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { ArgumentScale, ValueScale, EventTracker, HoverState } from '@devexpress/dx-react-chart';
import {
    curveCatmullRom,
    line,
} from 'd3-shape';
import { scaleTime } from 'd3-scale';
import './EggPriceChart.css';

// const Line = props => (
//     <LineSeries.Path
//         {...props}
//         path={line()
//             .x(({ arg }) => arg)
//             .y(({ val }) => val)
//             .curve(curveCatmullRom)}
//     />
// );

const StyledDiv = styled('div')(() => ({
    [`&.EggPriceChartTitle`]: {
      textAlign: 'center',
      width: '100%',
      marginBottom: '10px',
    },
}));

const Text = ({ text }) => {
    const [mainText, subText] = text.split('\\n');
    return (
      <StyledDiv className="EggPriceChartTitle">
        <Typography component="h3" variant="h5">
          {mainText}
        </Typography>
        <Typography variant="subtitle1">{subText}</Typography>
      </StyledDiv>
    );
};

const data = [
    {date: new Date(2020, 5, 22), price: 22.58},
    {date: new Date(2021, 0, 21), price: 21.44},
    {date: new Date(2021, 3, 15), price: 31.48},
    {date: new Date(2021, 4, 27), price: 22.10},
    {date: new Date(2021, 5, 24), price: 23.99},
    {date: new Date(2021, 6, 15), price: 23.99},
    {date: new Date(2021, 7, 12), price: 24.83},
    {date: new Date(2021, 7, 26), price: 32.51},
    {date: new Date(2021, 8, 30), price: 31.82},
    {date: new Date(2021, 9, 14), price: 32.69},
    {date: new Date(2023, 1, 1), price: 100.49},
    {date: new Date(2023, 2, 1), price: 112.99},

];

const format = () => tick => tick;

class EggPriceChart extends React.PureComponent{
    constructor(props) {
        super(props);

        this.state = {
            data,
            hover: undefined,
            targetItem: undefined,
        };

        this.changeHover = hover => this.setState({ hover });
        this.changeTargetItem = targetItem => this.setState({targetItem});
    }
    
    render () {
        const { data: chartData, hover, targetItem } = this.state;
        return (
            <div className = "EggPriceChart">
                <Paper>
                    <Chart data={chartData}>
                        <ArgumentScale factory={scaleTime}/>
                        <ValueScale />
                        <ArgumentAxis />
                        <ValueAxis />
                        <ScatterSeries name="Egg Prices" argumentField="date" valueField = "price" />
                        <Title
                            text="Egg Prices over Time"
                            textComponent={Text}
                        />
                        <EventTracker />
                        <HoverState hover={hover} onHoverChange={this.changeHover} />
                        <Tooltip targetItem={targetItem} onTargetItemChange={this.changeTargetItem} />
                    </Chart>
                </Paper>
            </div>
        )
    }
}

export default EggPriceChart;