/**
 * Ensure monetary values follow standard currency formatting.
 */
function validateCurrencyFormat(json, fieldNames = ["amount", "balance", "price", "cost"]) {
    fieldNames.forEach(field => {
        if (json[field]) {
            pm.test(`Field '${field}' should be a valid currency`, function () {
                pm.expect(json[field]).to.match(/^\d+(\.\d{2})$/); // e.g. 123.45
            });
        }
    });
}
module.exports = { validateCurrencyFormat };
