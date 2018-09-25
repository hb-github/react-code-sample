import * as React from "react";
import "./list-poll-style.css";
import { pollList, pollCreate, pollDelete, pollUpdate, pollToggleStatus } from "../../../api/poll";
export interface PollingProps {
  listAction: (data: any) => any;
  poll: any;
}
export interface State {
  selectedPoll: any;
}
export class List extends React.Component<PollingProps, State> {
  constructor(props: PollingProps) {
    super(props);
  }
  componentDidMount() {
    this.polls();
  }

  // List Poll

  private polls = () => {
    pollList({ page: 1 })
      .then(success => {
        // console.log("success", success);        
        this.props.listAction(success["pollingList"].docs);        
      })
      .catch(error => {
        console.log(error);
      });
  };

  // Delete Poll

  deletePoll = data => {
    pollDelete({ pollId: data })
      .then(success => {
        this.polls();
      })
      .catch(error => {
        console.log(error);
      });
  };

// Update Poll 

  setPoll = (data) => {

    console.log(data);
  }

// Sete status

setStatus = (data) => {

  data.status == 'Inactive' ? data.status = "Active" : data.status = 'Inactive'

  pollToggleStatus({"pollId":data._id, "status":data.status, activeTimeStamp: new Date()})
  .then(success => {
    this.polls();
  })
  .catch(error => {
    console.log(error);
  });
}

  render() {
    const { poll } = this.props;
    // {
    //   console.log("poll", poll);
    // }

    return (
      <div className="top-margin">
        <div className="row">
          <div className="col-sm-12 list_heading">
            <div className="txt1">Polling List</div>
            <div className="col-sm-12">
              <span className="txt2">
                {/* <button type="button" className="btn btn-primary">
                  Create Poll
                </button> */}
              </span>
            </div>
          </div>
        </div>

        <ul className="list-group">
          {poll.map((field, number) => {
            return (      
              <li key={field._id} className="list-group-item col-sm-12">
              { field.status == "Active" ? ( <div className="list_items_active">{field.title}</div> ) :
                  <div className="list_items_inactive">{field.title}</div>
              }
                <div className="row">
                  <label className="switch">
                  <input type="checkbox" readOnly checked={ field.status == "Active" ? true : false } onClick={() => this.setStatus(field)} />
                  <span className="slider round"></span>
                  </label>                  
                  <button className="btn btn-warning editBtn" onClick={() => this.setPoll(field)}> Edit </button>
                  <button className="btn btn-danger" onClick={() => this.deletePoll(field._id)}> Delete </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
