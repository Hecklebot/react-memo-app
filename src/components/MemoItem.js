import React from 'react';

const MemoItem = ({ id, title, content, onRemove }) => {
  return (
    <tr align="center">
      <th>{id}</th>
      <td>{title}</td>
      <td>{content}</td>
      <td><button>Edit</button></td>
      <td><button onClick={(e) => {
        onRemove(id)}
      }>&times;</button></td>
    </tr>
  )
}

export default MemoItem;