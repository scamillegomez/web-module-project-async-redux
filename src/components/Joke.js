import React from 'react';
import {connect} from 'react-redux';
import { getJoke } from '../actions';
import { useState } from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/animation.json';
import styled from 'styled-components';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 85%;
    text-align: center;
    button {
        margin: 1%;
        border: 5px solid grey;
        border-radius: 10px;
        width: 20%;
        padding: 0.5%;
        background-color: grey;
        color: white;
        font-size: 1.2rem;
        font-weight: bold;
        &:hover{
            transform: scale(1.1);
        }
    }
    .title {
        font-size: 4rem;
    }
    .setup {
        font-size: 3.5rem;
        display: flex;
        justify-content: center;
        text-align: center;
    }
    .punch-line {
        font-size: 2.5rem;
    }
    .new-joke {
        margin-top: 2%;
    }
    .answer {
        margin-bottom: 2%;
    }
`

const LoadingContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15%;
`

const AnimationContainer = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center
`;

const Joke = (props) => {

    const [punchline, setPunchline] = useState('');
    const [title, setTitle] = useState('Get ready for some jokes!');
    const [isLaughing, setIsLaughing] = useState(false);
    const [answer,setAnswer] = useState(false);
    
    const handleFirstOnClick = () => {
        setTitle('');
        setPunchline('');
        setIsLaughing(false);
        setAnswer(true);
        return props.getJoke();
        
    }
    
    const handleOnClick = () => {
        setPunchline(props.joke.punchline);
        setIsLaughing(true);
        setAnswer(false);
    }


    if(props.isFetching){
       return (
        <LoadingContainer>
            <h2>Fetching some laughs!</h2>
        </LoadingContainer>
        )
    }

    return(
        <MainContainer>
            <h3 className='title'>{title}</h3>
            <h2 className='setup'>{props.joke.setup}</h2>
            
            <button className='new-joke' onClick={handleFirstOnClick}>GET A NEW JOKE</button>
            {answer && <button className='answer' onClick={handleOnClick}>GET ANSWER</button>}
            
           
           
            <h3 className='punch-line' style={{marginTop: '2%'}}>{punchline}</h3>
            {isLaughing && 
            <AnimationContainer>
                <Lottie 
                    animationData={animationData}
                />
                
            </AnimationContainer> 
                
            }
            
        </MainContainer>  
    )
}

const mapStateToProps = state => {
    return {
        joke: state.joke,
        error: state.error,
        isFetching: state.isFetching
    }
}

export default connect(mapStateToProps,{getJoke})(Joke); 