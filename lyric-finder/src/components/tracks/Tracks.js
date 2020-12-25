import React from 'react'
import { Consumer } from '../context';
import Spinner from '../spinner';
import Track from './Track'

function Tracks() {
    return (
        <Consumer>
            {value => {
                const { track_list, heading } = value;
                if (track_list === undefined || track_list.length <= 0) {
                    return <Spinner />
                } else {
                    return (
                        <>
                            <h3 className='text-center mb-4'>{heading}</h3>
                            <div className="row">
                                {track_list.map((item, index) => (
                                    <Track key={item.track.track_id} track={item.track} place={index + 1} />
                                ))}
                            </div>
                        </>
                    )
                }

            }}
        </Consumer>
    )
}

export default Tracks;