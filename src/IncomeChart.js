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
import { ArgumentScale, ValueScale,} from '@devexpress/dx-react-chart';
import {
    curveCatmullRom,
    line,
} from 'd3-shape';
import './IncomeChart.css';
import { Slider } from 'devextreme-react/slider';
import 'devextreme/dist/css/dx.light.css';

const Line = props => (
    <LineSeries.Path
        {...props}
        path={line()
            .x(({ arg }) => arg)
            .y(({ val }) => val)
            .curve(curveCatmullRom)}
    />
);

const Root = props => (
    <Legend.Root {...props} sx={{ display: 'flex', margin: 'auto', flexDirection: 'row' }} />
);
const Label = props => (
    <Legend.Label {...props} sx={{ mb: 1, whiteSpace: 'nowrap' }} />
);
const Item = props => (
    <Legend.Item {...props} sx={{ flexDirection: 'column-reverse' }} />
);

const StyledDiv = styled('div')(() => ({
    [`&.IncomeChartTitle`]: {
      textAlign: 'center',
      width: '100%',
      marginBottom: '10px',
    },
}));

const Text = ({ text }) => {
    const [mainText, subText] = text.split('\\n');
    return (
      <StyledDiv className="IncomeChartTitle">
        <Typography component="h3" variant="h5">
          {mainText}
        </Typography>
        <Typography variant="subtitle1">{subText}</Typography>
      </StyledDiv>
    );
};

const modifyDomain = () => [0, 100];
// function IncomeChart() {
//     const [position, setPosition] = React.useState(3);

    
//     const chartData = [
//         {x1 : 5, y1 : 95},
//         {x1 : 25, y1 : 25},
//         {x1 : 95, y1 : 5},
//         {x2 : 5 - position, y2 : 95 - position},
//         {x2 : 25 - position, y2 : 25 - position},
//         {x2 : 95 - position, y2 : 5 - position},
//     ];


//     return (
//         <div className = "IncomeChart">
//             <Paper>
//                 <Chart data={chartData}>
//                     <ArgumentScale modifyDomain={() => [0, 100]}/>
//                     <ValueScale modifyDomain={() => [0, 100]}/>
                    
//                     {/* <ValueAxis title="test" showTicks={false} showLabels={false}/> */}
//                     <LineSeries name="Original Demand" valueField="x1" argumentField="y1" seriesComponent={Line}/>
//                     <LineSeries name="Demand after income change" valueField="x2" argumentField="y2" seriesComponent={Line}/>
//                     {/* <ArgumentAxis position="bottom" wholeRange={[0,100]}/> */}
//                     <Legend position = "bottom" rootComponent={Root} itemComponent={Item} labelComponent={Label} />
//                     <Title
//                         text="Demand of an Inferior Good vs. % Change in Income"
//                         textComponent={Text}
//                     />
//                 </Chart>
//                 <Slider
//                     // aria-label = "IncomeChange"
//                     min = {-5}
//                     max = {5}
//                     // step = {1}
//                     onChangeChanged={(_, value) => setPosition(value)}
//                     value = {position}
//                     // valueLabelDisplay = "auto"
//                     // valueLabelFormat = {(value) => {return `${value}%`;}}
//                 />
//                 <p>% Change in Income</p>
                
//             </Paper>
//         </div>
//     );
// }

class IncomeChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value : 3
        };
        this.chartData = [
            {x1 : 5, y1 : 95},
            {x1 : 25, y1 : 25},
            {x1 : 95, y1 : 5},
            {x2 : 5 - this.state.value, y2 : 95 - this.state.value},
            {x2 : 25 - this.state.value, y2 : 25 - this.state.value},
            {x2 : 95 - this.state.value, y2 : 5 - this.state.value},
        ];

        this.handleValueChange = this.handleValueChange.bind(this);
    }

    handleValueChange(e) {
        const newValue = e.value;
        this.setState({
            value: newValue
        });
        this.chartData = [
            {x1 : 5, y1 : 95},
            {x1 : 25, y1 : 25},
            {x1 : 95, y1 : 5},
            {x2 : 5 - this.state.value, y2 : 95 - this.state.value},
            {x2 : 25 - this.state.value, y2 : 25 - this.state.value},
            {x2 : 95 - this.state.value, y2 : 5 - this.state.value},
        ];
    }

    

    render() {
        return (
            <div className = "IncomeChart">
                <Paper>
                    <Chart data={this.chartData}>
                        <ArgumentScale modifyDomain={() => [0, 100]}/>
                        <ValueScale modifyDomain={() => [0, 100]}/>
                        <ArgumentAxis showLabels={false}/>

                        <ValueAxis showLabels={false}/>
                        <LineSeries name="Original Demand" valueField="x1" argumentField="y1" seriesComponent={Line}/>
                        <LineSeries name="Demand after income change" valueField="x2" argumentField="y2" seriesComponent={Line}/>
                        <Legend position = "bottom" rootComponent={Root} itemComponent={Item} labelComponent={Label} />
                        <Title
                            text="Demand of an Inferior Good vs. % Change in Income"
                            textComponent={Text}
                        />
                    </Chart>
                    <Slider
                        min={-5}
                        max={5}
                        value={this.state.value}
                        onValueChanged={this.handleValueChange}
                    />
                    <p>% Change in Income</p>
                </Paper>
            </div>
        );
    }
}

export default IncomeChart;