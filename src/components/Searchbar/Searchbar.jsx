import { useState } from "react"
import PropTypes from 'prop-types';

export const Searchbar = ({ onSubmit }) => {
    const [searchQuery, setSearchQuery] = useState('')
     const handleSubmit = event => {
       event.preventDefault();
       if (searchQuery) {
         onSubmit(searchQuery);
         resetForm();
       }
    };
    
  const resetForm = () => {
    setSearchQuery('');
    };
    const handleInputChange = event => {
      setSearchQuery(event.target.value.trim().toLowerCase());
    };

    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchQuery}
          onChange={handleInputChange}
        />
      </form>
    );
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};