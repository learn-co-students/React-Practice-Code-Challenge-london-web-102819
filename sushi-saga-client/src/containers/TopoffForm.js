import React from 'react'

class TopoffForm extends React.Component{
    state = {
        budget: 0
    }
    onChange = (e) =>{
        this.setState({
           [e.target.name]: parseInt(e.target.value)
        })
    };
    onSubmit = (e) =>{
        e.preventDefault();
        this.props.onTopoff(this.state.budget);
        this.props.showTopOff(); 
    };
    
    render(){
        const {showTopOff, topOff} = this.props 
        return(
            <div>
                <button className="ui icon button" onClick={showTopOff}>
                    <i className="money bill alternate outline icon"></i>
                </button>
                {
                    topOff && 
                    <div className="grouped fields" onChange={this.onChange}>
                        <div className="inline fields">
                            <label htmlFor="budget">How much:</label>
                            <div className="field">
                                <div className="ui radio checkbox">
                                    <input type="radio" name="budget" value='15'/>
                                    <label>$15</label>
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui radio checkbox">
                                    <input type="radio" name="budget" value='30' />
                                    <label>$30</label>
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui radio checkbox">
                                    <input type="radio" name="budget" value='50' />
                                    <label>$50</label>
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui radio checkbox">
                                    <input type="radio" name="budget" value='100' />
                                    <label>$100</label>
                                </div>
                            </div>
                            <input type='submit' onClick={this.onSubmit}></input>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default TopoffForm