//en el store esta el estado global
import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './slices/authSlice';
import { uiSlice } from './ui/uiSlice';
import { calendarSlice } from './calendar/calendarSlice';
import { actividadSlice } from './actividades/actividadSlice';
import { comisionSlice } from './comisiones/comisionSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    ui: uiSlice.reducer,
    calendar: calendarSlice.reducer,
    actividad: actividadSlice.reducer,
    comision: comisionSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
