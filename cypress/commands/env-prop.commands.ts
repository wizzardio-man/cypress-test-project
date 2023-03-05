enum Env {
    DEMOBLAZE_URL = 'DEMOBLAZE_URL',
    DEMOBLAZE_LOGIN = 'DEMOBLAZE_LOGIN',
    DEMOBLAZE_PASS = 'DEMOBLAZE_PASS'
}

export const getEnvProperty = (variable: string | Env): string => {
    if (variable in Env) {
        return Cypress.env(variable);
    } throw Error(`[${variable}] is not present in the Env list.`)
}

export default Env;