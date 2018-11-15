import React, { Component } from 'react';
import PropTypes from 'prop-types';

import StyledTopList, { Table } from '../styles/StyledTopList';
import { getDataSettings } from '../utilities/store';

class TopList extends Component {
  render() {
    const data = getDataSettings(this.props.size)[this.props.speed];
    const sortedResults =
      data &&
      Object.keys(data)
        .reverse()
        .slice(0, 10);
    return (
      <StyledTopList>
        <h2>
          List for {this.props.size} unit grid for speed {this.props.speed}
        </h2>
        <br />
        {sortedResults && sortedResults.length > 0 ? (
          <Table>
            <tbody>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Score</th>
              </tr>
              {sortedResults.map((rez, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{data[rez]}</td>
                  <td>{rez}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <h2>{'No results!'}</h2>
        )}
      </StyledTopList>
    );
  }
}

TopList.propTypes = {
  speed: PropTypes.number.isRequired,
  size: PropTypes.string.isRequired
};

export default TopList;
