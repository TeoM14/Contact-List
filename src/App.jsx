import { useState } from 'react'
import './App.css'
import ContactList from './componets/ContactList'
import SelectedContact from './componets/SelectedContact'

export default function App() {
  const [SelectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
    {SelectedContactId ? (
      <div>Selected Contact View</div>
    ) : (
      <ContactList />
      )}
    </>
  );
}


