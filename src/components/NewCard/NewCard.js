import React, { useState, usedEffect, useRef, useEffect, createRef} from 'react';
import {Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import useStyle from './styles'
import className from 'classnames';


const Newcard = ({ article:{description, publishedAt, source,title,url,urlToImage}, i, activeArticle}) => {
    const classes = useStyle();
    const [elRefs, setElRefs] = useState([]);
    const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop -50);

    useEffect( ()=>{
        setElRefs((refs) => Array(20).fill().map((_, j)=>refs[j]||createRef()));
    }, [])
    useEffect(()=>{
        if(i === activeArticle && elRefs[activeArticle]){
            scrollToRef(elRefs[activeArticle]);
        }

    }, [i, activeArticle, elRefs])
    return (
        <Card ref={elRefs[i]} className={className(classes.card, activeArticle === i? classes.activeCard: null) }> 
            <CardActionArea href={url} target="_blank">
                <CardMedia className={classes.media} image={urlToImage || 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.octopus-news.com%2F&psig=AOvVaw0VL3cgzT8Es8cv3u1bnzEx&ust=1598400491645000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPiPnIKItesCFQAAAAAdAAAAABAE'}/> 
                <div className={classes.details}>
                    <Typography variant="body2" color="textSecondary" component="h2">{(new Date(publishedAt)).toDateString()}</Typography>
                    <Typography variant="body2" color="textSecondary" component="h2">{source.name}</Typography>
                </div>
                <Typography className={classes.title} gutterBottom variant="h5">{title}</Typography>
                <CardContent >
                    <Typography variant="body2" color="textSecondary" component="p">{description} </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary">Learn More</Button>
                <Typography variant="h5" color="textSecondary">{i+1}</Typography>
            </CardActions>
        </Card>
    );
}

export default Newcard;