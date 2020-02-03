import React, { Component } from 'react';
import './CharacterList.css'
import ListGroup from 'react-bootstrap/ListGroup';
import FormControl from 'react-bootstrap/FormControl';
import Card from 'react-bootstrap/Card';
import axios from 'axios';



class CharacterList extends Component {

    state = {
        fullList: [],
        filteredList: [],
        uri: 'http://localhost:8085/all'
    }

    constructor(props){
        super(props);
        this.filterNames = this.filterNames.bind(this);
    }

    componentDidMount(){
        axios.get(this.state.uri)
        .then((response) => {
            const characters = response.data;
            this.setState({fullList: characters});
            this.setState({filteredList: this.state.fullList});
            return response;
        })
        .catch((error) => {
            console.log(error);
        });
    }

    filterNames(event){
        let namesList = this.state.fullList,
            newList = [],
            filter = event.target.value.toUpperCase(),
            length = filter.length;
        


        namesList.forEach(function(element){
            let trim = element.name.substring(0, length).toUpperCase();
            if(trim === filter){
                newList.push(element);
            }
        });

        this.setState({filteredList: newList});
    }

    render() {
      return (
        <div className='CharacterList'>
            <Card style={{ width: '18rem' }}>
                <FormControl type="text" placeholder="Type to Filter..." onChange={this.filterNames}/>
                <ListGroup>
                    {this.state.filteredList.map(character => <ListGroup.Item key={character._id} action href={character.wikiUrl} target="_blank">
                                                                    {character.name}
                                                               </ListGroup.Item>)}
                </ListGroup>
            </Card>
        </div>  
      )
    }
}

export default CharacterList;