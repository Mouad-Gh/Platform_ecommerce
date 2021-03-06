import { authenticationService } from '../services/authenticationService';

export function authHeader() {
    // return authorization header with jwt token
    const currentUser = authenticationService.currentUserValue;
    if (currentUser && currentUser.token) {
        return { Authorization: `${currentUser.token.token}`,
                "Content-Type": "application/json" };
    } else {
        return {"Content-Type": "application/json" };
    }
}