import styles from "./JournalForm.module.css"
import Button from "./../Button/Button"
import search from "./../../assets/search.png"
import tag from "./../../assets/tag.png"
import { useContext, useEffect, useReducer, useRef } from "react";
import cn from "classnames";
import { INITIAL_STATE, formReducer } from "./JournalForm.state";
import Input from './../Input/Input'
import { UserContext } from "../../context/user.context";



function JournalForm({ onSubmit }) {

    const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
    const { isValid, isFormReadyToSubmit, values } = formState;
    const titleRef = useRef();
    const dateRef = useRef();
    const postRef = useRef();
    const { userId } = useContext(UserContext);

    const focusError = (isValid) => {
        switch (true) {
            case !isValid.title:
                titleRef.current.focus();
                break;
            case !isValid.date:
                dateRef.current.focus();
                break;
            case !isValid.post:
                postRef.current.focus();
                break;
        }
    }

    useEffect(() => {
        let timerId;
        if (!isValid.date || !isValid.post || !isValid.title) {
            focusError(isValid);
            timerId = setTimeout(() => {
                dispatchForm({ type: 'RESET_VALIDITY' });
            }, 2000);
        }
        return () => {
            clearTimeout(timerId);
        };
    }, [isValid]);

    useEffect(() => {
        if (isFormReadyToSubmit) {
            onSubmit(values);
            dispatchForm({ type: 'CLEAR' });
        }
    }, [isFormReadyToSubmit, values, onSubmit]);


    const onChange = (e) => {
        dispatchForm({ type: 'SET_VALUE', payload: { [e.target.name]: e.target.value } });
    };

    const addJournalItem = (e) => {
        e.preventDefault();
        dispatchForm({ type: 'SUBMIT' });
    }

    return (

        <form className={styles['journal-form']} onSubmit={addJournalItem}>
            {userId}
            <div className={styles['form-wrapper']}>
                <label htmlFor="title">
                    <Input appearence="title" type='text' ref={titleRef} onChange={onChange} value={values.title} name='title' placeholder="Заголовок" isValid={!isValid.title} />
                </label>
            </div>

            <div className={styles['form-wrapper']}>
                <label htmlFor="date">
                    <img src={search} alt="" />
                    <Input type='date' ref={dateRef} onChange={onChange} name='date' value={values.date ? new Date(values.date).toISOString().slice(0, 10) : ''} id="date" isValid={!isValid.title} />
                </label>
            </div>


            <div className={styles['form-wrapper']}>
                <label htmlFor="tag">
                    <img src={tag} alt="" />
                    <Input type='text' onChange={onChange} id="tag" value={values.tag} name='tag' placeholder='Теги' />
                </label>
            </div>

            <textarea name="post" ref={postRef} id="" onChange={onChange} value={values.post} cols="30" rows="10" placeholder="Дорогой дневник, мне не подобрать слов, чтобы описать боль и унижение, которое я ..." className={cn(styles['input'], {
                [styles['invalid']]: !isValid.post
            })} ></textarea>
            <Button text="Сохранить" />
        </form>

    )
}

export default JournalForm;