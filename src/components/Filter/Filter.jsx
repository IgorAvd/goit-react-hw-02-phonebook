import { FilterDescr } from './Filter.styled';

export const Filter = ({ contacts, filter, handleFilterChange }) => {
  const handleFilterSubmit = e => {
    const filterValue = e.target.value.toLowerCase().trim();

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue)
    );

    handleFilterChange(filteredContacts);
  };

  return (
    <div>
      <FilterDescr>Find contacts by name</FilterDescr>
      <input type="text" name="name" required onChange={handleFilterSubmit} />
    </div>
  );
};
