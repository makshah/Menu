document.querySelectorAll('.ingredient-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', filterTable);
});

document.getElementById('resetButton').addEventListener('click', resetFilters);

function filterTable() {
    const selectedIngredients = Array.from(document.querySelectorAll('.ingredient-checkbox:checked')).map(cb => cb.value.toLowerCase());
    const rows = document.querySelectorAll('#cocktailTable tbody tr');

    rows.forEach(row => {
        const ingredients = row.cells[2].textContent.toLowerCase();
        const matches = selectedIngredients.every(ingredient => ingredients.includes(ingredient));
        row.style.display = selectedIngredients.length === 0 || matches ? '' : 'none';
    });
}

function resetFilters() {
    document.querySelectorAll('.ingredient-checkbox').forEach(checkbox => {
        checkbox.checked = false; // Uncheck each checkbox
    });
    filterTable(); // Reapply the filter to show all rows
}