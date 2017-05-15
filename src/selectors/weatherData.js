import { createSelector } from "reselect"

export const selectTemperature = (state) => state.currently.temperature
export const selectTimezone = (state) => state.timezone
