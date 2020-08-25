import React from 'react';
import {Grid, Grow, Typography} from '@material-ui/core';
import Newscard from '../NewCard/NewCard';

import useStyles from './styles'

const infoCards = [
    { color: '#00838f', title: 'Latest News', text: 'Give me the latest news' },
    { color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
    { color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
    { color: '#283593', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
  ];

const Newscards = ({articles}) => {
    const classes = useStyles();

    if(!articles.length){
        return (
            <Grow in>
                <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {infoCards.map((infocard)=>( 
                     <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
                          <div className={classes.card} style={{backgroundColor: infocard.color}}>
                             <Typography variant="h5">{infocard.title}</Typography>
                             {infocard.info ? 
                                (<Typography variant="h6">
                                    <strong>
                                        {infocard.title.split(' ')[2]} :
                                    </strong>
                                    <br/>
                                    {infocard.info}
                                </Typography>) 
                                : null
                             }
                             <Typography variant="h6">Try saying: <br/> {infocard.text}</Typography>
                          </div>
                    </Grid>                 
                ))}
                </Grid>
            </Grow>);
    }

    return (
        <Grow in>
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {articles.map((article, i) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} style={{display: 'flex'}}>
                        <Newscard article={article} i={i}/>
                    </Grid> 
                ))}
            </Grid>
        </Grow>
    );
}



export default Newscards;