import React from 'react';
import ReactDOM from 'react-dom';
import './board.css';
import './navbar.css';

function Nav(props) {
  return (
    <ul className="nav">
      <li className="nav-board">
          Boards
      </li>
      <li className='nav-home'>Home</li>
      <li id='navbar-logo'>Prello</li>
      <li className="menu clickable">
          Menu
      </li>
      <li className='sign-out clickable'>Sign Out</li>
    </ul>
  );
}


class ModalHeader extends React.Component {
  render() {
    return (
    <div className='modal-header'>
      <form className='title-form'>
        <input className='title' type='text' />
      </form>
      <span className='close'>&times;</span>
      <h4 className='creator-header'></h4>
    </div>
    );
  }
}

class ModalDate extends React.Component {
  render() {
    return (
    <div>
      <h3 className='date-text inline'>Due Date: </h3>
      <div className='button'>Edit Date</div>
      <form className='date-form'>
        <input type='datetime-local'></input>
      </form>
    </div>
  );
  }
}

class ModalLabel extends React.Component {
  render() {
    return (
      <div className='modal-label'>
        <h5 className='inline'>Label: </h5>
        <ul className='label-container inline selected-label for-label'></ul>
        <div className='label-button button'>Add Label</div>
        <div className='picker label-picker'>
          <form className='label-form'>
            <input className='label-input' type='text' placeholder='Label Name' />
          </form>
          <ul className=" label-container">
            <li className="label green-label click"></li>
            <li className="label blue-label click"></li>
            <li className="label red-label click"></li>
            <li className="label yellow-label click"></li>
            <li className="label orange-label click"></li>
          </ul>
        </div>
      </div>
    );
  }
}

class ModalMember extends React.Component {
  render() {
    return (
      <div className=" member-list">
        <h3 className=" inline">Members: </h3>
        <div className=" member-button button">Edit Members</div>
        <ul className=" selected-label label-container inline for-member"></ul>
        <div className=" picker member-picker">
          <form className="member-form">
            <input className=" member-input" type="text" placeholder="Member Name"/>
          </form>
        </div>
      </div>
    );
  }
}

class ModalDescription extends React.Component {
  render() {
    return (
      <div className=" description">
        <h3>Description</h3>
        <p className="description-text"></p>
        <textarea className="description-input" rows="8"></textarea>
        <div className=" description-button button">Edit Description</div>
      </div>
    );

  };
}

class ModalComment extends React.Component {
  render() {
    return (
      <div className=" comment-section">
        <h3>Comment</h3>
        <textarea className="comment-input" rows="3"></textarea>
        <div className=" comment-button button">Comment</div>
        <ul></ul>
      </div>
    );
  }
}

class ModalFooter extends React.Component {
  render() {
    return (
      <div className=" modal-footer">
        <div className=" button remove">Remove Card</div>
      </div>
    );

  }
}
class ModalCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lid: this.props.lid,
      cid: this.props.cid,
    };
  }
  render() {
    var cardId = 'modalCard-' + this.state.lid + '-' + this.state.cid;

    return (
      <div id={cardId} className={this.props.visibility + ' card'}>
        <ModalHeader />
        <ModalDate />
        <ModalLabel />
        <ModalMember />
        <ModalDescription />
        <ModalComment />
        <ModalFooter />
      </div>
    );
  }
}

class MiniCard extends React.Component {

  render() {
    return (
      <li className='mini-card' onClick={this.props.onClick}>
        <div>Title</div>
        <ul className='label-container'></ul>
      </li>
    );
  }
}

class Card extends React. Component {
  constructor(props) {
    super(props);
    this.state = {
      cid: this.props.cid,
      lid: this.props.lid,
      visibility: 'none'
    };
  }

  handleClick() {
    console.log('hello');
    ReactDOM.render(
      <ModalCard lid={this.props.lid} cid={this.props.cid} visibility={'visible'}/>,
       document.getElementById('modal-root')
     );
    this.setState({visibility: 'visible'});
  }

  render() {
    // ReactDOM.render(
    //   <ModalCard lid={this.state.lid} cid={this.state.cid} visibility={this.state.visibility}/>,
    //    document.getElementById('modal-root')
    //  );
    return (
      <MiniCard key={this.props.key} cid={this.state.cid} lid={this.state.lid} onClick={this.handleClick.bind(this)}/>
    );
  }
}

class CardList extends React.Component {
  createDomCard(list) {
    console.log(list);
    return list.map((cid) =>
    <Card key={'card-'+cid} cid={cid} lid={this.props.lid}/>
  );
  }

  render() {
    return(
      <ul className='card-list'>
        {this.createDomCard(this.props.cards)}
      </ul>
    );
  }
}

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.lid,
      cardList: [],
    }
  }
  handleClick() {
    var currentList = this.state.cardList;
    currentList.push(currentList.length);

    this.setState({cardList:currentList});


    //ReactDOM.render(<List />, document.getElementById('lol'));
  }
  render() {
    return(
      <li id={'list-'+this.state.id}>
        <form className='list-form'>
          <input className='list-title' type='text'/>
        </form>
        <span className='close list-close'>&times;</span>
        <CardList lid={this.state.id} cards={this.state.cardList} />
        <p className="add-card clickable" onClick={this.handleClick.bind(this)}>Add Card</p>
      </li>
    );
  }
}

class ListOfList extends React.Component {
  constructor() {
    super();
    this.state = {
      lists: []
    }
  }

  createDomList(list) {
    console.log(list);
    return list.map((lid) =>
    <List key={'list-'+lid} lid={lid}/>
  );
  }

  handleClick() {
    var currentLists = this.state.lists;
    currentLists.push(currentLists.length);

    this.setState({lists: currentLists});
  }

  render() {
    var lists = this.state.lists;
    var domLists = this.createDomList(lists);

    return (
      <ul id='lol' className='lol'>
        {domLists}
        <li id='addList' onClick={this.handleClick.bind(this)} className='clickable'>Add List</li>
      </ul>
    );
  }
}

class BoardSection extends React.Component {
  render() {
    return (
      <div className='main'>
        <ListOfList />
      </div>
    );
  }
}

class AllSection extends React.Component {
  render() {
    return (
      <div className='fullscreen'>
        <Nav />
        <BoardSection />
      </div>
    );
  }
}




ReactDOM.render(
  <AllSection />,
  document.getElementById('root')
);
