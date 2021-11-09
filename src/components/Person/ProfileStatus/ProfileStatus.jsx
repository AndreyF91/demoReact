import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  changeMode = () => {
    this.setState({
      editMode: true,
    });
  };
  unChangeMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  };

  focusInput = (e) => {
    e.target.select();
  };

  onStatusChange = (e) => {
    this.setState({
      status: e.target.value,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }

  render() {
    return (
      <div className="profile__info">
        {this.state.editMode ? (
          <input
            autoFocus={true}
            onFocus={this.focusInput}
            onBlur={this.unChangeMode}
            onChange={this.onStatusChange}
            type="text"
            value={this.state.status}
          />
        ) : (
          <span onClick={this.changeMode}>
            {this.props.status || "Введите статус"}
          </span>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
