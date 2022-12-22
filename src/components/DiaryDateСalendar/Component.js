import React from 'react';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import { DateForm, DateInput, DateButton } from './Component.styled';

export const DiaryDateСalendar = () => {
  return <MyDTPicker />;
};
class MyDTPicker extends React.Component {
  render() {
    return (
      <Datetime
        dateFormat="DD.MM.YYYY"
        timeFormat={false}
        closeOnSelect={true}
        initialValue={new Date()}
        renderInput={this.renderInput}
      />
    );
  }

  renderInput(props, openCalendar) {
    return (
      <DateForm>
        <DateInput {...props} />

        <DateButton type="button" onClick={openCalendar}>
          <svg width="18" height="20">
            <path d="M14 9h-2v2h2V9ZM10 9H8v2h2V9ZM6 9H4v2h2V9Z" />
            <path d="M16 2h-1V0h-2v2H5V0H3v2H2C.89 2 .01 2.9.01 4L0 18a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2Zm0 16H2V7h14v11Z" />
          </svg>
        </DateButton>
      </DateForm>
    );
  }
}
