import React, { Component } from 'react';
import StyledTopList, { Table } from '../styles/StyledTopList';

class TopList extends Component {
  render() {
    return (
      <StyledTopList>
        <h2>List</h2>
        <br />
        <h2>Top 10</h2>
        <Table>
          <tbody>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Score</th>
            </tr>
            <tr>
              <td>data</td>
              <td>data</td>
              <td>data</td>
            </tr>
          </tbody>
        </Table>
      </StyledTopList>
    );
  }
}

export default TopList;
