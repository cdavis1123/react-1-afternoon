import React, {Component} from 'react';

export default class FilterObject extends Component{
constructor (){
    super();

    this.state = {
        dogs: [
            {
              name: 'Lily',
              breed: 'Jack Russel',
              age: 14,  
            },
            {
              name: 'Stanley',
              breed: 'Parsons Russel',
              age: 5,  
            },
            {
               name: 'Molly',
               breed: 'Yorkie',
               age: 7,
            }
        ],
        userInput: '',
        filteredDogs: []
    }
}


handleChange(val){
    this.setState({userInput: val});
}


filterDogs(prop){

}

    render(){
        return (
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'> Orginal: {JSON.stringify(this.state.dogs, null, 10)}</span>
                <input className='inputLine' onChange={(e) => this.handleChange(e.target.value)}/>
                <button className='confirmationButton' onClick={() => this.filterDogs(this.state.userInput)}>Filter</button>
                <span className='resultsBox filterObjectRB'> Filtered: {JSON.stringify(this.state.filteredDogs, null, 10)}</span>
            </div>
        )
    }
}