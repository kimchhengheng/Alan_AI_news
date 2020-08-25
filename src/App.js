import React, {useEffect, useState} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import wordsToNumbers from 'words-to-numbers';
import Newscards from './components/NewsCards/NewsCards';

import useStyle from './styles.js';

// App is function component class( we can create class by class or function method ) we use arrow function to make the this binding to the app
// if we use class to define we have to get a constructor and render method 
// useEffect to call when the app finish render , componentdidmount

const alankey = 'e5f95ad6fc621984fe2793e93ccb2ac42e956eca572e1d8b807a3e2338fdd0dc/stage'


const App = () => {

    const classes = useStyle();
    const [newsArticles, setNewsArticles] = useState([]); // useState hook?
    const [activeArticle, setActiveArticles] = useState(-1);

    //by using useEffect, you tell React that your component needs to do something after render.
    useEffect(() => {
        alanBtn({
            key: alankey,
            onCommand: ({command, articles , number}) => {
                if(command ==="newHeadLines"){
                    setNewsArticles(articles);
                    setActiveArticles(-1);
                //     console.log("receive command");
                //    console.log(commandData.articles);
                }
                else if(command ==="hightlight"){
                    setActiveArticles((prevActiveArticles) => prevActiveArticles+1);
                }
                else if(command ==="open"){
                            // if number lenght >2 mean they get it as a string
                    const parseNumber =number.length>3? wordsToNumbers(number,{fuzzy:true}):number;
                    console.log(parseNumber);
                   
                    if(parseNumber>20){
                        alanBtn().playText('Please try that again');
                    }
                    else{
                        const article = articles[parseNumber-1];
                        window.open(article.url, '_blank');
                        alanBtn().playText('Opening');
                    }
                   
                }
            }
        })
    }, [])
    return (
        <div>
            <div className={classes.logoContainer}>
                <img src='https://alan.app/voice/images/previews/preview.jpg' className={classes.alanLogo} alt="alan Logo"/>

            </div>
                <Newscards articles={newsArticles} activeArticle={activeArticle} />
            
        </div>
    )
}

export default App;