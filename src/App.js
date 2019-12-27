import React from 'react';
import './App.css';
import Form from './components/Form';
import MemoList from './components/MemoList';

class App extends React.Component {

  id=2;

  state = {
    inputTitle: "",
    inputContent: "",
    memos: [{
      id: 1,
      title: "메모제목",
      content: "메모내용"
    }]
  }

  handleChange = (e) => {
    if(e.target.name === "title") {
      this.setState({
        inputTitle: e.target.value
      })
    } else {
      this.setState({
        inputContent: e.target.value
      })
    }
  }

  handleCreate = (e) => {
    this.setState(prevState => {
      const { memos, inputTitle, inputContent } = prevState;
      memos.push({
        id: this.id++,
        title: inputTitle,
        content: inputContent
      });
      return {
        inputTitle: '',
        inputContent: '',
        memos,
      };
    });
  }

  handleRemove = (id) => {
    const { memos } = this.state;
    this.setState({
      memos: memos.filter(memo => memo.id !== id)
    });
  }

  render() {
    const { inputTitle, inputContent, memos } = this.state;
    const { handleChange, handleCreate, handleRemove } = this;

    return (
      <div className="App">
        <Form 
          title={inputTitle}
          content={inputContent}
          onChange={handleChange}
          onCreate={handleCreate}
        />
        <MemoList
          memos={memos}
          onRemove={handleRemove}
        />
      </div>
    );
  }
}

export default App;
