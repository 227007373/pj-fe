import styles from '../quote.module.scss';
import FadeUp from '@/components/layout/animations/fadeUp';
const Quote = ({ image, quote }) => {
    return (
        <div className={styles.wrapper}>
            <FadeUp>
                <div className={styles.quoteWrapper}>
                    <div className={styles.quote}>{quote}</div>
                    <div className={styles.image}>
                        <img src={image} />
                    </div>
                </div>
            </FadeUp>
        </div>
    );
};
export default Quote;
