import React, { Component } from 'react';

type ClockState = {
    time: Date;
};

type NoticeProps = {
    msg: string;
};

export class Clock extends Component<{}, ClockState> {
    static defaultProps = {
        msg: 'Hello everyone!',
    };
    constructor(props) {
        super(props);
    }

    tick() {
        this.setState({
            time: new Date(),
        });
    }

    componentWillMount() {
        this.tick();
    }

    componentDidMount() {
        setInterval(() => this.tick(), 1000);
    }

    render() {
        return (
            <>
                <p>{this.props.msg}</p>
                <p>
                    The current time is {this.state.time.toLocaleTimeString()}
                </p>
            </>
        );
    }
}
