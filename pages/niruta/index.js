import styles from '../../styles/Home.module.css'
import nirutastyles from '../../styles/niruta.module.css'
import Head from 'next/head';
import Link from 'next/link';

export const getStaticProps = async() => {
    const res=await fetch('https://jsonplaceholder.typicode.com/users');
    const data=await res.json();

    return {
        props: {users:data}
    }

}

const Contact =({users})=>{
    return (
        <>
            <Head>  
                <title>Niruta | Contact </title>
                <meta name='keywords' content='niruta'></meta>
            </Head>
            <div>
                <h1>Contact Page</h1>
                <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
                {users.map(user => (   
                    <Link href={'/niruta/'+ user.id} key={user.id} legacyBehavior>
                        <a className={nirutastyles.single}>
                            <h3>{user.name}</h3>
                        </a>
                    </Link>   
                ))}
            </div>
        </>
    );
}

export default Contact;
