/**
 * Checks the validity of the given name
 *
 * @returns {boolean} the name is valid statement
 */
export default function () {
    function nameValidation(name) {
        console.log(name.value);
        const validator = /^[a-z-]{2,}$/i;
        return validator.test(name.value);
    }

    return {
        nameValidation,
    };
}
