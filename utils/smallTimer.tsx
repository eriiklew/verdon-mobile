import React from 'react';
import Countdown from 'react-native-countdown-component';

const SmallTimer = (props: any) => {

    return (
        <Countdown
            until={props.time}
            onFinish={() => alert('finished')}
            size={props.size ? props.size : 20}
            timeToShow={['D', 'H']}
            timeLabels={{ d: 'Days', h: 'Hours' }}
        />
    )
}
export default SmallTimer;