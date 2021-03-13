import {  useLocation } from 'react-router-dom';

export default function MyFeed(){
    let completeQueryParam = useLocation().search
    let code = completeQueryParam.split('=')[1]

    return(
        <h1 style={{color: '#000'}}>{code}</h1>
    )
}