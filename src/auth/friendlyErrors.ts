export const FriendlyAuthError = (firebaseError: string) => {
  console.log(firebaseError);

  if (firebaseError === "Firebase: Error (auth/wrong-password).") {
    return "incorrect password";
  } else if (firebaseError === "Firebase: Error (auth/invalid-email).") {
    return "incorrect email";
  } else if (
    firebaseError ===
    "Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests)."
  ) {
    return "too many attempts";
  } else if (firebaseError === "Firebase: Error (auth/user-not-found).") {
    return "user not found"
  }
};
