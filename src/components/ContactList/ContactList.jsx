import css from './List-style.module.css';


export const ContactList = ({ visibleContacts, deleteContact }) => {
    return (
        <ul className={css.contactList}>
            {visibleContacts.map(({ id, name, number }) => (
                <li key={id} className={css.contactItem}>
                    {name}: {number}
                    <button onClick={() => deleteContact(id)} className={css.deleteButton}>Delete</button>
                </li>
            ))}
        </ul>
    );
};