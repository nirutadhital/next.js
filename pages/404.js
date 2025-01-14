import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
    const router=useRouter();//method used to redirect the user
    useEffect(()=>{
        //console.log('use effect run')
        setTimeout(()=>{
            // router.go(-1)//-1---backward rote  +1--forward route
            router.push('/');
        },3000)

    },[])


    return ( 
        <div className="not-found">
            <h1>Ooops.....</h1>
            <h2>That page cannot be found</h2>
            <p>Go back to the <Link href="/">Homepage</Link></p>
        </div>
     );
}
 
export default NotFound;