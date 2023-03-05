import Env, { getEnvProperty } from "./env-prop.commands";

export const navigateToPDFFilesPage = () => cy.visit('http://localhost:3000/');
export const navigateToDemoblazePage = () => cy.visit(getEnvProperty(Env.DEMOBLAZE_URL));