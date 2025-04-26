const initialState = [];

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'INSERT':
      return [...state, action.payload]; 

    case 'UPDATE':
      return state.map((item, index) => 
        index === action.payload.index ? { ...item, ...action.payload.newData } : item
      );

    case 'DELETE':
      return state.filter((_, index) => index !== action.payload);

    default:
      return state;
  }
}

export const insert = (newUser) => ({
    type: 'INSERT',
    payload: newUser
  });
  
export const update = (index, newData) => ({
    type: 'UPDATE',
    payload: { index, newData }
});
 
export const del = (index) => ({
    type: 'DELETE',
    payload: index
});
  