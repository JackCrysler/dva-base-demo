import React, { Component } from 'react'
import Markdown from 'markdown-it'

export default class question extends Component {
    state={
        q:''
    }
    componentDidMount(){
        let md = new Markdown()
        console.log(md)
        let q = `一副扑克牌一共54张，分别由2大类型组合而成：\n        [\"红桃\", \"黑桃\", \"方块\", \"梅花\"]\n        [\"A\", 2, 3, 4, 5, 6, 7, 8, 9, 10, \"J\", \"Q\", \"K\"]\n另外：\n        [\"大王\", \"小王\"]\n\n请根据以上数据生成54张扑克牌。\n\n\n\n——author——jack——",
        "questions_answer": "var types = [\"红桃\", \"黑桃\", \"方块\", \"梅花\"]; // 花色\nvar points = [\"A\", 2, 3, 4, 5, 6, 7, 8, 9, 10, \"J\", \"Q\", \"K\"]; // 点数\nvar cards = [\"大王\", \"小王\"]; // 所有扑克牌\n\n        // 遍历所有花色与点数\n        for (var i in types) {\n            for (var j in points) {\n                cards.push(types[i] + points[j])\n            }\n        }\n\nconsole.log(cards)`
        let result = md.render(q)
        this.setState((state)=>{
            return {   
                ...state,
                q:result
            }
        })
    }
    render() {
        let {q} = this.state
        return (
            <div>
                问题区
                <div dangerouslySetInnerHTML={{__html:q}}></div>
            </div>
        )
    }
}
