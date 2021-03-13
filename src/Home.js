import './styles/pages/Home.css'

export default function Home(){
    return(
        <div className="container">
            <a href="https://www.instagram.com/oauth/authorize?client_id=1038111153379820&redirect_uri=https://does-this-match-my-feed.vercel.app/&scope=user_profile,user_media&response_type=code">Open insta auth</a>
        </div>
    )
}