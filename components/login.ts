import * as React from "react";
export const login = async (creds: {
    username: string;
    password: string;
  }): Promise<void> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (creds.username === "admin" && creds.password === "admin") {
          resolve();
        } else {
          reject();
        }
      }, 1000);
    });
  };
  