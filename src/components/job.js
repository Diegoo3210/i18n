import React from "react";
import {FormattedDate} from 'react-intl';
import {FormattedNumber} from 'react-intl';
import { defineMessages, FormattedMessage } from "react-intl";

const messages = defineMessages({
  item: {
    id: "app.item",
    defaultMessage:
      "{}",
  },
});
const Job = (props) => {
  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>{props.offer.name}</td>
      <td>{props.offer.company}</td>
      <td>
      <FormattedMessage
      value = { props.offer.salary} {...messages.item}/> 
      </td>
      <td>{props.offer.city}</td>
      <td>
  <FormattedDate
    value={new Date(props.offer.date)}
    year='numeric'
    month='long'
    day='numeric'
    weekday='long'
  />
</td>
<td>
        <FormattedNumber
          value={new Number(props.offer.views)}
          locale="en-US"
          maximumFractionDigits={3}
          minimumFractionDigits={0}
          minimumIntegerDigits={1}
          notation="standard"
          numberingSystem="latn"
          signDisplay="auto"
          style="decimal"
          useGrouping="always"          
        />
      </td>
    </tr>
  );
};

export default Job;
