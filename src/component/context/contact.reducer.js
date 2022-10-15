//reducer miad state ro bar asas yeseri action update mikone
//paylod khodemon pas midim va ettelaeati hastesh ke gharare baraye update behesh pas bedim
///type noe action ro mide
function ContactReducer(state, action) {
    const { type, payload } = action;
        switch(type){
            case contactActions.add:
                return [...state,payload]
            case contactActions.delete:
                return state.filter(contact=>contact.id!==payload.id)
            case contactActions.update:
                return state.map(contact=>contact.id===payload.id ?payload :contact)
            case contactActions.check:
                return state.map(contact=>contact.id===payload.id ?{...contact,favorite:!contact.favorite} :contact)
            default:
              return  state
        }
  }
  
  const contactActions = {
    add: "ADD_CONTACT",
    delete: "REMOVE_CONTACT",
    update: "UPDATE_CONTACT",
    check: "FAVORITE_CONTACT",
  };
  
  export { contactActions, ContactReducer };
  