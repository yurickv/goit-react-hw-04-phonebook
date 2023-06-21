import css from './List-style.module.css';


export const ContactList = ({ visibleContacts, deleteContact }) => {

    return (
        <ul className={css.contactList}>
            {visibleContacts.map(({ id, name, number }) => (
                <li key={id} className={css.contactItem}>
                    {name}: {formatPhoneNumber(number)}
                    <button onClick={() => deleteContact(id)} className={css.deleteButton}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

function formatPhoneNumber(phoneNumberString) {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    var match = cleaned.match(/^(\d{1,3}|)?(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        var intlCode = (match[1] ? `+${match[1]} ` : '');
        return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
    }
    return null;
}