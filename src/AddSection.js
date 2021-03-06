import "./AddSection.css";
import React, { Component } from 'react';
import {createSection} from './redux/actions/sectionActions';
import PropTypes from 'prop-types';
import {connect } from 'react-redux';

 class AddSection extends Component {

  constructor(props) {
    super(props);
      this.state = {
        name: ''
      };
      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
      this.setState({ [e.target.name]: e.target.value });
    }
  
    onSubmit(e) {
      e.preventDefault();
  
      const section = {
        name: this.state.name,
      };
  
      this.props.createSection(section);
    }
  render() {
    return (
      <div>
                  <form className="AddSection__form" onSubmit={this.onSubmit}>
  
                  <div className="form-group">
                      <label><h4>Nazwa sekcji</h4></label>
                      <input type="text" className="form-control" placeholder="Podaj nazwę" 
                      name="name" 
                      onChange={this.onChange}
                      value={this.state.name}/>
                  </div>
  
                  <button type="submit" class="btn btn-dark">Zapisz</button>
              </form>
              </div>
    );
  }
}

AddSection.propTypes = {
  createSection: PropTypes.func.isRequired
}
export default connect(null, {createSection})(AddSection)




// function AddSection() {
//   return (
//     <div>
//                 <form className="AddSection__form" onSubmit={this.onSubmit}>

//                 <div className="form-group">
//                     <label><h4>Nazwa sekcji</h4></label>
//                     <input type="text" className="form-control" placeholder="Podaj nazwę" 
//                     name="name" 
//                     onChange={this.onChange}
//                     value={this.state.name}/>
//                 </div>

//                 <button type="submit" class="btn btn-dark">Zapisz</button>
//             </form>
//             </div>
//   );
// }

// export default AddSection;
