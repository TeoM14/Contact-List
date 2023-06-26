import React from "react";

export default function ContactRow({ setSeclectedContactId, contact }) {
    return (
        <tr
            onClick={() => {
                setSeclectedContactId(contact.id);
            }}>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
        </tr>
    )
}