


import * as React from "react";
import './list-poll-style.css';
import { pollList, pollCreate } from "../../../api/poll";
export interface PollingProps {
    listAction: (data: any) => any;
    poll: any;
}
export class List extends React.Component<PollingProps, {}> {
    constructor(props: PollingProps) {
        super(props);
    }
    componentDidMount() {
        this.polls();
    }

    // List Api
    private polls = () => {
        pollList({ page: 1 })
            .then(success => {
                console.log("success", success);
                // console.log(success['pollingList'].docs);
                this.props.listAction(success["pollingList"].docs);
            })
            .catch(error => {
                console.log(error);
            });
    };
    render() {
        const { poll } = this.props;
        { console.log("poll", poll) }
        return (
            <div className="top-margin">
                <div className="row">
                    <div className="col-sm-12 list_heading">
                        <div className="txt1">Polling List</div>
                        <div className="col-sm-12">
                            <span className="txt2">
                                <button
                                    type="button"
                                    className="btn btn-primary">
                                    Create Poll
                </button>
                            </span>
                        </div>
                    </div>
                </div>

                <ul className="list-group">
                    <li className="list-group-item col-sm-12">
                        <div className="list_items">First item</div>
                        <div className="row">
                            <button className="btn btn-warning editBtn">
                                Edit
            </button>
                            <button className="btn btn-warning editBtn">
                                Activate
            </button>
                        </div>
                    </li>
                </ul>
            </div>

        );
    }
}
