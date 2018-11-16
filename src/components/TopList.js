import React, { Component } from 'react';
import PropTypes from 'prop-types';

import StyledTopList, { Table } from '../styles/StyledTopList';
import { getDataSettings } from '../utilities/store';

class TopList extends Component {
  render() {
    const data = getDataSettings(this.props.size)[this.props.speed];
    let sortedData =
      data && data.sort((a, b) => b.points - a.points).slice(0, 10);
    return (
      <StyledTopList>
        {data && data.length > 0 ? (
          <React.Fragment>
            <h2>
              List for {this.props.size} unit grid for speed {this.props.speed}
            </h2>
            <Table>
              <tbody>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Score</th>
                </tr>
                {sortedData.map((el, i) => {
                  return (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{el.name}</td>
                      <td>{el.points}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </React.Fragment>
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
