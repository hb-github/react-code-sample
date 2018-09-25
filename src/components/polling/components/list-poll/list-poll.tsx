import * as React from "react";
import "./list-poll-style.css";
import UpdatePollContainer from '../update-poll';
import { pollList, pollCreate, pollDelete, pollUpdate, pollToggleStatus } from "../../../../api/poll";
export interface PollingProps {
  listAction: (data: any) => any;
  selectedPollAction: (data: any) => any;
  poll: any;
  selectedPoll: any;
}
export interface State {
  isUpdate: boolean
  page: any
  total: any
  limit: any
}
export class List extends React.Component<PollingProps, State> {
  constructor(props: PollingProps) {
    super(props);
    this.state = {
      isUpdate: false,
      page: 1,
      total: 0,      
      limit: 0
    }
  }
  componentDidMount() {
    this.polls();
  }

  paginetion(value){
    if(value == 'increase' && ((this.state.total/this.state.limit) > this.state.page )){
      this.setState({'page': this.state.page + 1})
    }
    if(value == 'decrease' && this.state.page > 1) {
      this.setState({'page': this.state.page - 1})
    }
  }

  private polls = () => {
    pollList({ page: this.state.page })
      .then(success => {
        this.setState({limit: success["pollingList"].limit})
        this.setState({total: success["pollingList"].total})
        this.props.listAction(success["pollingList"].docs);
      })
      .catch(error => {
        console.log(error);
      });
  };

  deletePoll = data => {
    pollDelete({ pollId: data })
      .then(success => {
        this.polls();
      })
      .catch(error => {
        console.log(error);
      });
  };

  closeModel = () => {
    this.setState({ isUpdate: false })
  }

  setPoll = (data) => {
    this.props.selectedPollAction(data);
    this.setState({ isUpdate: true })

  }

  setStatus = (data) => {
    data.status == 'Inactive' ? data.status = "Active" : data.status = 'Inactive'
    pollToggleStatus({ "pollId": data._id, "status": data.status, activeTimeStamp: new Date() })
      .then(success => {
        this.polls();
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { poll } = this.props;

    if (this.state.isUpdate) {
      return (
        <div>
          <UpdatePollContainer closeModel={this.closeModel} />
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
                // console.log("field", field);
                return (
                  <li key={field._id} className="list-group-item col-sm-12">
                    {field.status == "Active" ? (<div className="list_items_active">{field.title}</div>) :
                      <div className="list_items_inactive">{field.title}</div>
                    }
                    <div className="row">
                      <label className="switch">
                        <input type="checkbox" readOnly checked={field.status == "Active" ? true : false} onClick={() => this.setStatus(field)} />
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
        </div>
      )
    } else {
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
              console.log("field", field);
              return (
                <li key={field._id} className="list-group-item col-sm-12">
                  {field.status == "Active" ? (<div className="list_items_active">{field.title}</div>) :
                    <div className="list_items_inactive">{field.title}</div>
                  }
                  <div className="row">
                    <label className="switch">
                      <input type="checkbox" readOnly checked={field.status == "Active" ? true : false} onClick={() => this.setStatus(field)} />
                      <span className="slider round"></span>
                    </label>
                    <button className="btn btn-warning editBtn" onClick={() => this.setPoll(field)}> Edit </button>
                    <button className="btn btn-danger" onClick={() => this.deletePoll(field._id)}> Delete </button>
                  </div>
                </li>
              );
            })}
          </ul>

            <div>              
              <button className="btn btn-secondry" onClick={() => this.paginetion('increase')}>Next</button>
              <button className="btn btn-secondry" onClick={() => this.paginetion('decrease')}>Pre</button>              
            </div>

        </div>

      )
    }
  }
}
