// Core imports.
import Image from 'next/image';

// Local imports.
import styles from './Description.module.sass';

const PLACEHOLDER_IMAGE = 'data:image/jpeg;base64,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';

const Description = (): JSX.Element => {

    return (
        <section className = { styles.Description }>
            <div className = { styles.Description__imageContainer }>
                <Image 
                    alt="Description" 
                    src="/images/description.jpeg"
                    fill // Occupies all the space of its container, container needs to be relative.
                    placeholder = 'blur' // Displays a 'skeleton' showing the image is still loading.
                    blurDataURL = { PLACEHOLDER_IMAGE }
                    // height = { 300 }
                    // width = { 500 }
                    // priority = { false } // Deactivate lazy loading with false.
                    // quality = { 100 }    // Changes the quality of the image, the default is 75 (%).
                />
            </div>
            <div className={styles.Description__text}>
                <h2>Bring the future today</h2>
                <p>Future World: Your Gateway to Tomorrow&apos;s Tech! Dive into a world of cutting-edge gadgets and gear. Stay ahead of the curve and redefine your digital lifestyle with us.</p>
            </div>
        </section>
    );
}

export default Description;
