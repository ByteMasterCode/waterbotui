export const TOGGLE_DRAWER = 'TOGGLE_DRAWER';

export const toggleDrawer = (type, isOpen) => ({
    type: TOGGLE_DRAWER,
    payload: { type, isOpen },
});
