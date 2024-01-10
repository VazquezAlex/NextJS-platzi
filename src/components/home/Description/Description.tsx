
// Local imports.
import styles from './Description.module.sass';

const Description = (): JSX.Element => {

    return (
        <section className = { styles.Description }>
            <img src="/images/description.jpeg" alt="Description" />
            <div className={styles.Description__text}>
                <h2>Bring the future today</h2>
                <p>Future World: Your Gateway to Tomorrow&apos;s Tech! Dive into a world of cutting-edge gadgets and gear. Stay ahead of the curve and redefine your digital lifestyle with us.</p>
            </div>
        </section>
    );
}

export default Description;
