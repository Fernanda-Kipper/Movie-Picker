import {  useLocation } from 'react-router-dom';

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

export default function MyFeed(){
    let queryParams = useQuery()
    let code = queryParams.get('code')

    return(
        <h1 style={{color: '#000'}}>{code}</h1>
    )
}