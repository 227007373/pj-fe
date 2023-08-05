import styles from './discuss.module.scss';
import CusTextField from '../cusTextField';
import { useContext } from 'react';
import { UserContext } from '@/contexts/user.context';
import { useState } from 'react';
import axios from 'axios';
const Discuss = ({ data, setData }) => {
    const { user, setUser } = useContext(UserContext);
    const [error, setError] = useState([]);
    const [form, setForm] = useState({
        username: '',
        content: '',
    });
    const onChange = (e) => {
        setForm((p) => {
            return {
                ...p,
                [e.target.name]: e.target.value,
            };
        });
    };
    const sendComment = () => {
        let temp = [];
        if (form.content.replace(' ', '') == '') {
            temp.push('Content');
        }
        if (temp.length > 0) {
            setError(temp);
        } else {
            setError([]);

            axios({
                method: 'post',
                url: `${process.env.NEXT_PUBLIC_BASEURL}/comment`,
                data: {
                    username: user.username,
                    content: form.content,
                },
                headers: { Authorization: `Bearer ${user.token}` },
            }).then(function (res) {
                setForm({
                    username: '',
                    content: '',
                });
                axios({
                    method: 'get',
                    url: `${process.env.NEXT_PUBLIC_BASEURL}/comment/getAll`,
                }).then(function (res) {
                    setData(res.data);
                });
            });
        }
    };
    return (
        <div className={styles.discuss}>
            <div className='container'>
                {data?.map((e, i) => {
                    const now = new Date();
                    const dateToCheck = new Date(e.date);
                    const diffInMs = now.getTime() - dateToCheck.getTime();
                    const isWithin24Hours = diffInMs <= 24 * 60 * 60 * 1000;
                    let date = new Date(e.date);
                    const hours = date.getHours();
                    const minutes = date.getMinutes();
                    const seconds = date.getSeconds();
                    const formattedHours = hours.toString().padStart(2, '0');
                    const formattedMinutes = minutes.toString().padStart(2, '0');
                    const formattedSeconds = seconds.toString().padStart(2, '0');
                    const day = date.getDate();
                    const month = date.getMonth() + 1; // add 1 because getMonth() returns a zero-based index
                    const year = date.getFullYear();

                    // Format the day, month, and year as two-digit strings
                    const formattedDay = day.toString().padStart(2, '0');
                    const formattedMonth = month.toString().padStart(2, '0');

                    // Combine the formatted day, month, and year into a single string
                    const dateString = `${formattedDay}/${formattedMonth}/${year}`;
                    const timeString = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
                    if (isWithin24Hours) {
                        date = timeString;
                    } else {
                        date = dateString;
                    }
                    return (
                        <div
                            key={i}
                            className={styles.commentWrapper}
                        >
                            <div className={styles.comment}>
                                <div>
                                    {e.username} <span>{date}</span>:
                                </div>

                                <div>{e.content}</div>
                            </div>
                        </div>
                    );
                })}

                {user.token.length > 0 ? (
                    <div className={styles.leaveComment}>
                        <CusTextField
                            label='comment'
                            name='content'
                            value={form.content}
                            onChange={onChange}
                            error={error.includes('Content')}
                            errormsg={error.includes('Content') ? 'this field is required' : ''}
                            onKeyPress={(e) => {
                                if (e.key.toLowerCase() == 'enter') {
                                    sendComment();
                                }
                            }}
                        />
                    </div>
                ) : null}
            </div>
        </div>
    );
};
export default Discuss;
