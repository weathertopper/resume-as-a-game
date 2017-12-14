let game_config = {
    hero: {
        color: 'green',
        bottom: 200, // change after reference_by
        left: (CONSTANTS.WINDOW_WIDTH - 50)/2, // change after reference_by
        width: 50,
        height: 50,
        has_gravity: true
    },
    playing_level: 'ready_player_one',
    frame_rate: 5,
    movement: {
        actions : { 
            left : 37,
            right: 39,
            jump : 38,
            duck : 40,  //  not used yet
            shoot: 32   //  not used yet
        },
        jump : {
            start_vel : 8,
            delta_factor: .875,
            vel_cap: 1,
            timeout: 10
        },
        apex : {
            frame_count : 0, //  removed earlier (add back);
            timeout: 10
        }, 
        fall : {
            start_vel : 1,
            delta_factor: 1.5,
            vel_cap: 8,
            timeout: 10
        },
        x_interval : 2
    },
    levels : {
        ready_player_one : {
            objects : {
                background : {
                    sky : {
                        color: 'lightblue',
                        bottom: 0,
                        left: 0,
                        width: CONSTANTS.WINDOW_WIDTH, 
                        height: CONSTANTS.WINDOW_HEIGHT,
                        static_position: true
                    },
                    sun : {
                        color: 'yellow',
                        bottom: 550,
                        left: 650,
                        width: 75, 
                        height: 75,
                    }
                },
                arena : {
                    left_wall: {
                        color: '',//invisible
                        bottom: 0,
                        left: 0 - CONSTANTS.WINDOW_WIDTH,
                        width: CONSTANTS.WINDOW_WIDTH,
                        height: CONSTANTS.WINDOW_HEIGHT
                    },
                    floor : {
                        color: 'blue',
                        bottom: 0,
                        left: 0,
                        width: CONSTANTS.WINDOW_WIDTH, 
                        height: 100
                    },
                    rock : {
                        color: `grey`,
                        bottom: 200,//change when reference_by implemented
                        left: 100,//change when reference_by implemented 
                        width: 100, 
                        height: 100,
                        has_gravity: true
                    }
                }
            }
        }
    }
}