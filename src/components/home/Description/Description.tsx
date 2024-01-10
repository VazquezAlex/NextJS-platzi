// Core imports.
import Image from 'next/image';

// Local imports.
import styles from './Description.module.sass';

const Description = (): JSX.Element => {

    return (
        <section className = { styles.Description }>
            <Image 
                alt="Description" 
                height = { 300 }
                src="/images/description.jpeg"
                width = { 500 }
                // priority = { false } // Deactivate lazy loading with false.
                // quality = { 100 }    // Changes the quality of the image, the default is 75 (%).
            />
            <div className={styles.Description__text}>
                <h2>Bring the future today</h2>
                <p>Future World: Your Gateway to Tomorrow&apos;s Tech! Dive into a world of cutting-edge gadgets and gear. Stay ahead of the curve and redefine your digital lifestyle with us.</p>
            </div>
        </section>
    );
}

export default Description;
