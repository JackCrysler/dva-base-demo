import React, { Component } from 'react'
import Question from './question'
import Answer from './answer'
export default class index extends Component {
    render() {
        return (
            <div>
                <h1>dashboard</h1>
                <div>
                    <div className="left">
                        <Question></Question>
                    </div>
                    <div className="right">
                        <Answer></Answer>
                    </div>
                </div>
            </div>
        )
    }
}
