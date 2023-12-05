"use client";
import { useUserAuth } from "./_utils/auth-context";
import { useEffect } from "react";
import ItemList from "./shopping-list/item-list";
import Page from "./shopping-list/page";

const ShoppingListPage = () => {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleSignIn = () => {
    gitHubSignIn();
  };

  const handleSignOut = () => {
    firebaseSignOut();
  };

  return (
    <main>
      <div className = "grid grid-cols-1 gap-4 place-content-center h-48">
      User: {user?.displayName}
      <br />
      {user ? (
        <button className = "border-4 text-2xl" onClick={handleSignOut}>Sign Out</button>
      ) : (
        <button className = "border-2 text-2xl " onClick={handleSignIn}>Sign In</button>
      )}
      </div>
      <div>{user &&       <Page> </Page>   } </div>
      </main>
  );

  
}
export default ShoppingListPage;
