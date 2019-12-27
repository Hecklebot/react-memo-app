import React from 'react';
import MemoItem from './MemoItem';

const MemoList = ({ memos, onRemove }) => {
  return (
    <div>
      <table className="table">
        <tr align="center">
          <th>id</th>
          <th>Title</th>
          <th>Content</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        {memos.map(({ id, title, content }) => (
          <MemoItem key={id} id={id} title={title} content={content} onRemove={onRemove} />
        ))}
      </table>
    </div>
  );
}

export default MemoList;