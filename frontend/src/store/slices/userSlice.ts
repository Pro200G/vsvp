import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  specialists: any[];
  clients: any[];
  selectedSpecialist: any | null;
  selectedClient: any | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: UserState = {
  specialists: [],
  clients: [],
  selectedSpecialist: null,
  selectedClient: null,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setSpecialists: (state, action: PayloadAction<any[]>) => {
      state.specialists = action.payload;
    },
    setClients: (state, action: PayloadAction<any[]>) => {
      state.clients = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setSpecialists, setClients, setLoading, setError } = userSlice.actions;
export default userSlice.reducer;