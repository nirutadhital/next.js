import styles from '../../styles/Home.module.css'
import Head from 'next/head';

const Contact =()=>{
    return (
        <>
            <Head>  
                <title>Niruta | Contact </title>
                <meta name='keywords' content='niruta'></meta>
            </Head>
            <div>
                <h1>Contact Page</h1>
                <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
            </div>
        </>
    );
}

export default Contact;
