import React from 'react';
import Countdown from 'react-native-countdown-component';

const Timer = (props: any) => {

    return (
        <Countdown
            until={props.time}
            onFinish={() => alert('finished')}
            size={props.size ? props.size : 16}
            timeToShow={props.timeToShow ? props.timeToShow : ['D', 'H', 'M']}
            timeLabels={props.timeLabels ? props.timeLabels : { d: 'Days', h: 'Hours', m: 'Minutes' }}
            timeLabelStyle={props.color ? props.color : { color: '#C2FFD9' }}
        />
    )
}
export default Timer;
