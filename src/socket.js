import { io } from "socket.io-client";
const SOCKET = process.env.REACT_APP_BASE_SOCKET;
export const socket = io(SOCKET);
