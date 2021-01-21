import React, { useContext } from 'react';
import {AppSettingsContext} from '../components/context/app-settings';

function ContentFunction(props) {
  const AppSettingsContext = useContext(AppSettingsContext);

  const handleButtonDisplay = e => {
    if(this.itemsDisplayed < 8){
      AppSettingsContext.toggleDisplay(true);
    } else {
      this.showButton;
    }
  }

  const handleCompletedItems = e => {
    if(this.itemCompleted !== true){
      AppSettingsContext.toggleDisplay(true);
    } else {
      return;
    }
  }

  return(
    <div>
      <p>Completed: {AppSettingsContext.itemCompleted}</p>
      <p>Displayed: {AppSettingsContext.itemsDisplayed}</p>
    </div>
  )
}