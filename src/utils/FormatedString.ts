
export const formatedShortString = (
    name: string | undefined | null,
    maxLength: number | undefined = 25
): string => {
    if(name === undefined || name === null) return "";
    let formatedName = name;
    if(name.length > maxLength){
        formatedName = `${name.slice(0, maxLength)}...`;
    };

    return formatedName;
};

export const getFirstAndSecondName = (
    name: string | undefined | null
): string => {
    if(name === undefined || name === null) return "Usuário";
    let formattedName = name.trim();

    const nameParts = formattedName.split(" ");
    const firstTwoNames = nameParts.slice(0, 2);

    return firstTwoNames.join(" ");
};
