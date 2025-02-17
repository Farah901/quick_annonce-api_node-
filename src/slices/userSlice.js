import { createSlice } from '@reduxjs/toolkit';

// L'état initial pour l'utilisateur
const initialState = {
  user: null, // Démarre sans utilisateur connecté
  role: null, // Aucune role par défaut
  token: null, // Aucun token par défaut
  isAuthenticated: false, // L'authentification est false au départ
};

// Créer un slice pour l'utilisateur
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Action pour la connexion d'un utilisateur
    login: (state, action) => {
      const { role, token } = action.payload;
      state.user = { role };
      state.token = token;
      state.isAuthenticated = true; // L'utilisateur est maintenant authentifié
      state.role = role; // Assigner le rôle à l'utilisateur
    },
    // Action pour la déconnexion de l'utilisateur
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.role = null;
    },
  },
});

// Export des actions
export const { login, logout } = userSlice.actions;

// Export du reducer
export default userSlice.reducer;
