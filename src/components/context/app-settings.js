import { render } from "react-dom";
import React from react;

export const AppSettingsContext = React.createContext();

class AppSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      itemCompleted: true,
      itemsDisplayed: 0,
      defaultSort: '',
      showButton: true,
      toggleDisplay: this.toggleDisplay
    }
  }

  toggleDisplay = (itemCompleted) => { this.setState({itemCompleted }) }

  render() {
    return (
      <AppSettingsContext.provider value={this.state}>
        {this.props.children}
        {/* Create if statement that if less than n number display list else if greater create next and previous buttons */}
      </AppSettingsContext.provider>
    )
  }
}

export default AppSettings;