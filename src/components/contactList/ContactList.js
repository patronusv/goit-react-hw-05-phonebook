import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from './contactListItem/ContactListItem';
import ContactListWrapper from './ContactListStyled';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ContactList = ({ contacts, filter, onBtnClick }) => {
  return (
    <ContactListWrapper>
      <TransitionGroup component="ul" className="list">
        {contacts
          .filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
          .map(item => (
            <CSSTransition key={item.id} timeout={250} classNames="my-list-item">
              <ContactListItem item={item} onBtnClick={onBtnClick} />
            </CSSTransition>
          ))}
      </TransitionGroup>
    </ContactListWrapper>
  );
};

export default ContactList;
ContactListItem.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
  onBtnClick: PropTypes.func.isRequired,
};
