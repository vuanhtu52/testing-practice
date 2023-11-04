const capitalize = string => {
    string = string.toLowerCase();
    string = string.charAt(0).toUpperCase() + string.slice(1);

    return string;
};

export default capitalize;