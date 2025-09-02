
import data from "../data.json"
import Accordian from "./Accordian"

const Faq=()=>{
     console.log(data.faqs)
    return (<div>
        <h1>faQ</h1>

        <ul>
            {
                data.faqs.map((ele,index)=>{
                    return <Accordian qna={ele}/>
                })
            }
        </ul>

    </div>)
}

export default Faq;