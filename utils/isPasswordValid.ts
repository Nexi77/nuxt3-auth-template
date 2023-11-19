export const isPasswordValid = (password: string) =>
{
    const minLength = 8;
    const minLowercase = 1;
    const minNumbers = 1;
    const minSymbols = 1;
    const minUppercase = 1;

    const lowercaseRegex = /[a-z]/g;
    const uppercaseRegex = /[A-Z]/g;
    const numberRegex = /\d/g;
    const symbolRegex = /[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/g;

    // Check length
    if (password.length < minLength)
    {
        return false;
    }

    // Check lowercase letters
    if ((password.match(lowercaseRegex) || []).length < minLowercase)
    {
        return false;
    }

    // Check uppercase letters
    if ((password.match(uppercaseRegex) || []).length < minUppercase)
    {
        return false;
    }

    // Check numbers
    if ((password.match(numberRegex) || []).length < minNumbers)
    {
        return false;
    }

    // Check symbols
    if ((password.match(symbolRegex) || []).length < minSymbols)
    {
        return false;
    }

    // If all requirements are met, return true
    return true;
};
