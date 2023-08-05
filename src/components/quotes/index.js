import styles from './quote.module.scss';
import Quote from './quote';
const Quotes = () => {
    return (
        <>
            <div className={styles.quotes}>
                <div className='container'>
                    <Quote
                        image={'image/dummy/Benjamin_Franklin.png'}
                        quote={'"An ounce of prevention is worth a pound of cure." - Benjamin Franklin'}
                    />
                    <Quote
                        image={'image/dummy/Desiderius_Erasmus.png'}
                        quote={'"Precaution is better than cure." - Desiderius Erasmus'}
                    />
                    <Quote
                        image={'image/dummy/Eleanor_Everet.png'}
                        quote={'“For safety is not a gadget but a state of mind.” – Eleanor Everet'}
                    />
                    <Quote
                        image={'image/dummy/Jim_Rohn.png'}
                        quote={`"Take care of your body. It's the only place you have to live." - Jim Rohn`}
                    />
                </div>
            </div>
        </>
    );
};
export default Quotes;
