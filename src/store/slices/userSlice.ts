import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import userActions, {
  Product,
  addNotification,
  fetchCartItems,
  getNotifications,
  getProducts,
  getToken,
  login,
  logout,
  readNotification,
  register,
} from '../actions/UserActions';

export interface UserState {
  token: string;
  email: string;
  userId: string;
  name: string;
  loading: boolean;
  isAuthenticated: boolean;
  admin: boolean;
  products: Product[];
  cart: Product[];
  notifications: any[];
}

const initialState: UserState = {
  token: '',
  email: '',
  userId: '',
  name: '',
  loading: false,
  isAuthenticated: false,
  admin: false,
  products: [],
  cart: [],
  notifications: [],
};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: userActions,
  extraReducers: builder => {
    builder.addCase(getToken.pending, (state: UserState) => {
      state.loading = true;
    });
    builder.addCase(getToken.fulfilled, (state: UserState, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.name = action.payload.name;
      state.userId = action.payload.userId;
      state.email = action.payload.email;
    });
    builder.addCase(getToken.rejected, (state: UserState) => {
      state.loading = false;
      state.isAuthenticated = false;
    });
    builder.addCase(login.pending, (state: UserState) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state: UserState, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.name = action.payload.name;
      state.userId = action.payload.userId;
      state.email = action.payload.email;
    });
    builder.addCase(login.rejected, (state: UserState) => {
      state.loading = false;
      state.isAuthenticated = false;
    });
    builder.addCase(register.pending, (state: UserState) => {
      state.loading = true;
    });
    builder.addCase(register.fulfilled, (state: UserState, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.name = action.payload.name;
      state.userId = action.payload.userId;
      state.email = action.payload.email;
    });
    builder.addCase(register.rejected, (state: UserState) => {
      state.loading = false;
      state.isAuthenticated = false;
    });
    builder.addCase(logout.pending, (state: UserState) => {
      state.loading = true;
    });
    builder.addCase(logout.fulfilled, (state: UserState, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.name = action.payload.name;
      state.userId = action.payload.userId;
      state.email = action.payload.email;
    });
    builder.addCase(logout.rejected, (state: UserState) => {
      state.loading = false;
      state.isAuthenticated = false;
    });
    builder.addCase(getProducts.pending, (state: UserState) => {
      state.loading = true;
    });
    builder.addCase(
      getProducts.fulfilled,
      (state: UserState, action: PayloadAction<Product[]>) => {
        state.loading = false;
        state.products = action.payload;
      },
    );
    builder.addCase(getProducts.rejected, (state: UserState) => {
      state.loading = false;
    });
    builder.addCase(fetchCartItems.pending, state => {
      state.loading = true;
    });
    builder.addCase(
      fetchCartItems.fulfilled,
      (state, action: PayloadAction<Product[]>) => {
        state.loading = false;
        state.cart = action.payload;
      },
    );
    builder.addCase(fetchCartItems.rejected, state => {
      state.loading = false;
    });
    builder.addCase(getNotifications.pending, state => {
      state.loading = true;
    });
    builder.addCase(
      getNotifications.fulfilled,
      (state, action: PayloadAction<any[]>) => {
        state.loading = false;
        state.notifications = action.payload;
      },
    );
    builder.addCase(getNotifications.rejected, state => {
      state.loading = false;
    });
    builder.addCase(addNotification.pending, state => {
      state.loading = true;
    });
    builder.addCase(
      addNotification.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        if (action.payload) {
          state.notifications.push(action.payload);
        }
      },
    );
    builder.addCase(addNotification.rejected, state => {
      state.loading = false;
    });
    builder.addCase(readNotification.pending, state => {
      state.loading = true;
    });
    builder.addCase(
      readNotification.fulfilled,
      (state, action: PayloadAction<any[]>) => {
        state.loading = false;
        state.notifications = action.payload;
      },
    );
    builder.addCase(readNotification.rejected, state => {
      state.loading = false;
    });
  },
});
fetchCartItems;
export const {AdminOff, AdminOn, AddToCart} = userSlice.actions;

export default userSlice.reducer;
