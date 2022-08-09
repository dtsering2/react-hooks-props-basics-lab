export default function AboutMe({bio}){
    if(bio.length === 0){
        return <p style = "display: none"></p>
    }else{
        return<p>{bio}</p>
    }
}