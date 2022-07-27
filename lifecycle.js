class Lifecycle extends React.Component{

    constructor(props){
        super(props);  
        this.state = { name:'jane'};      
    }

    componentWillMount(){
        console.log(" in component will mount");
    }
    changeState(){
        this.setState({ name:'john'});
    }

    render(){
        console.log('in render');
        return( 
        <div> hello from render!
            <button type="button" onClick={this.changeState.bind(this)}> Change</button>
        </div>
        )
    }
    componentDidMount(){
        console.log(" in component did mount")
    }

    shouldComponentUpdate(){
        console.log('should component update?' )
        return true;
    }

    componentWillUpdate(){
        console.log("will component update")
    }

    componentDidUpdate(){
        console.log("component did update")
    }


}

ReactDOM.render(<Lifecycle name="John"/>, document.getElementById('mountNode'));