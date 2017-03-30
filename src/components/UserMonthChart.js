import React from 'react';
import RC2 from 'react-chartjs2';


// class Pie extends Component {
//   render() {
//     return (
//       <RC2 data={data} type='pie' />
//     );
//   }
// }

export default function UserMonthChart(props) {
    const cfCount = count(props.monthColors)
    const lkLabels = Object.keys(cfCount)
    
    const data = {
    labels: lkLabels,
    datasets: [{
        data: values(cfCount),
        backgroundColor: lkLabels
        // hoverBackgroundColor: [
        // '#FF6384',
        // '#36A2EB',
        // '#FFCE56'
        // ]
    }]
};


    function count(monthColors) {
        const colorCount = {}
        monthColors.forEach((monthColor) => {
            let indexColor = monthColor.color.hexColor
            if (colorCount[indexColor]) colorCount[indexColor] = colorCount[indexColor] + 1
            else colorCount[indexColor] = 1;
        })
        return colorCount;
    }

    function values (monthColorsCount) {
        const colorValues = []
        Object.keys(monthColorsCount).forEach((key) => {
            colorValues.push(monthColorsCount[key])
        })
        return colorValues;
    }

    function mood () {
        
    }

    
    

    

    
    return (
        <div className='container'>
            <div className='10 columns' style={{ backgroundColor: '#E6E6E6', height: 500 }}>
                <div>
                     <RC2 data={data} type='pie' />
                </div>
            </div>
        </div>
    );
}