import styles from "./JournalForm.module.css"
import Button from "./../Button/Button"
import search from "./../../assets/search.png"
import tag from "./../../assets/tag.png"
import { useState } from "react";
import cn from "classnames";

function JournalForm({ onSubmit }) {

    const [formValidState, setFormValidState] = useState({
        title: true,
        text: true,
        date: true
    })

    const addJournalItem = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);
        let isFormValid = true;
        if (!formProps.title.trim().length) {
            setFormValidState(state => ({ ...state, title: false }))
            isFormValid = false
        } else {
            setFormValidState(state => ({ ...state, title: true }))
        }
        if (!formProps.text.trim().length) {
            setFormValidState(state => ({ ...state, text: false }))
            isFormValid = false
        }
        else {
            setFormValidState(state => ({ ...state, text: true }))
        }
        if (!formProps.date) {
            setFormValidState(state => ({ ...state, date: false }))
            isFormValid = false
        }
        else {
            setFormValidState(state => ({ ...state, date: true }))
        }
        if (!isFormValid) { return }
        onSubmit(formProps);
    }

    return (
        <form className={styles['journal-form']} onSubmit={addJournalItem}>
            <div className={styles['form-wrapper']}>
                <label htmlFor="title">
                    <input type='text' id="title" name="title" placeholder="Заголовок" className={cn(styles['input'], { [styles['invalid']]: !formValidState.title })} />
                </label>
            </div>

            <div className={styles['form-wrapper']}>
                <label htmlFor="date">
                    <img src={search} alt="" />
                    <input type="date" name="date" id="date" className={cn(styles['input'], { [styles['invalid']]: !formValidState.date })} />
                </label>
            </div>


            <div className={styles['form-wrapper']}>
                <label htmlFor="tag">
                    <img src={tag} alt="" />
                    <input type='text' id="tag" name="tag" placeholder="Теги" />
                </label>
            </div>

            <textarea name="text" id="" cols="30" rows="10" placeholder="Дорогой дневник, мне не подобрать слов, чтобы описать боль и унижение, которое я ..." className={cn(styles['input'], { [styles['invalid']]: !formValidState.text })} ></textarea>
            <Button text="Сохранить" />
        </form>
    )
}

export default JournalForm;