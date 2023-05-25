import { useState } from "react";
import { styled } from "styled-components";

function Counter(){
    const [count, SetCount] = useState(0);

    //+1 해주는 함수 (+1 버튼 클릭 시 실행)
    const increase = () => {
        SetCount(count+1);
    };

    //-1 해주는 함수 (-1 버튼 클릭 시 실행)
    const decrease = () => {
        SetCount(count-1);
    };

    return(
        <Wrap>
            <div className="count">{count}</div>
            <button className="increase" onClick={increase}>+1</button>
            <button className="decrease" onClick={decrease}>-1</button>
        </Wrap>
    );
}

const Wrap = styled.div`
    text-align: center;
    height: 200px;
    width: 60%;
    border-radius: 10px;
    box-shadow: 5px 5px 5px 5px gray;
    background-color: beige;
    margin: 20px;
    padding: 20px;

    .count{
        font-size: 50px;
        margin: 20px;
    };
    button{
        height: 40px;
        width: 40px;
    }
    .increase{
        background-color: pink;
    };
    .decrease{
        background-color: skyblue;
    };
`;

export default Counter;