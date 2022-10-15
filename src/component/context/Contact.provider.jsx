import React from "react";
import { ContactReducer } from "./contact.reducer";
///dar createContext ldai har meghdar ya motghayyeri dad
export const ContactContext = React.createContext({
  //maghadir defauit
  contacts: [],
  contactDispatch: () => {},
});

const ContactProvider = ({ children }) => {
  const [contacts, contactDispatch] = React.useReducer(ContactReducer, [    {
    id: 0,
    userProfile: "https://avatars.dicebear.com/api/avataaars/y.svg",
    name: "nahid",
    email: "email@gmail.com",
    phone: "0987687654",
    age: "12",
    country: "iran",
    favorite: false,
  },
  {
    id: 1,
    userProfile: "https://avatars.dicebear.com/api/avataaars/your.svg",
    name: "reza",
    email: "email@gmail.com",
    phone: "0987687654",
    age: "34",
    country: "aragh",
    favorite: true,
  },
  {
    id: 2,
    userProfile: "https://picsum.photos/20",
    name: "ali",
    email: "email@gmail.com",
    phone: "0987687654",
    age: "67",
    country: "turkey",
    favorite: false,
  },
  {
    id: 3,
    userProfile: "https://picsum.photos/20",
    name: "shahin",
    email: "email@gmail.com",
    phone: "0987687654",
    age: "54",
    country: "rom",
    favorite: true,
  }]);
 //har context yek provider darad ke mesl ye khorshid componentharo dar bar migire vaghti to app tarif beshe 
  return (
    <ContactContext.Provider
      value={{
        contacts,
        contactDispatch,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export default ContactProvider;
