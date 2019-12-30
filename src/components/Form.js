import React from 'react';
import './Form.css';

class Form extends React.Component {

  render() {
    const { title, content, onChange, onCreate, onKeyPress } = this.props;
    return (
      <div className="form-area">
        <h1 align="center">React-Memo-App</h1>
        <label>Title</label>
        <input type="text" className="form-control" placeholder="title" value={title} onChange={onChange} name="title" required/>
        <label>Content</label>
        <textarea 
          className="form-control" 
          placeholder="content" 
          value={content} 
          onChange={onChange} 
          onKeyPress={onKeyPress}  
          name="content"
          required
        />
        <button onClick={onCreate}>추가</button>
      </div>
    );
  }
}


export default Form;